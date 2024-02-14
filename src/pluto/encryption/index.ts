/**
 * @packageDocumentation
 * @module encryption
 * @description This package is an rxdb encryption layer, a replacement for the vulnerable crypto-js dependency provided by the free version of rxDB.
 * The package can be used outside or Pluto as its fully compatible with RXDB.
 * @examples In order to use this package in any RXDB environment type the following code.
 * Install the package with npm
 * 
 * 
 * ```bash
 * npm i @pluto-encrypted/encryption --save
 * ```
 * or with yarn
 * ```bash
 * npm i @pluto-encrypted/encryption --save
 * ```
 *
 * Integrate in your existing RXDB storage.
 * ```typescript
 * import { wrappedKeyEncryptionStorage } from "@pluto-encrypted/encryption";
 * import { RxStorage } from "rxdb";
 * const storage: RxStorage<any, any> = wrappedKeyEncryptionStorage({
 *     storage: [[ADD your RXDB instance here]],
 * })
 * export default storage;
 * ```
 * 
 */
//Do we need this? import "./globals";
import {
    type InternalStoreDocType,
    type RxAttachmentWriteData,
    type RxDocumentData,
    type RxDocumentWriteData,
    type RxError,
    type RxJsonSchema,
    type RxStorage,
    type RxStorageInstanceCreationParams,
    b64DecodeUnicode,
    b64EncodeUnicode,
    clone,
    ensureNotFalsy,
    flatClone,
    getProperty,
    hasEncryption,
    newRxError,
    newRxTypeError,
    setProperty,
    wrapRxStorageInstance
} from 'rxdb'

import { sha256 } from '@noble/hashes/sha256'
import { chacha20poly1305 } from '@noble/ciphers/chacha'
import { type CipherWithOutput } from '@noble/ciphers/utils'

export type { RxStorage } from 'rxdb'
export type { CipherWithOutput } from '@noble/ciphers/utils'
export const MINIMUM_PASSWORD_LENGTH: 8 = 8

// We must keep nonce static to be able to restore the database later, user only has the password
const nonce = Buffer.from('b47e1d4e5f7377c2e80a19b8', 'hex')

export function encryptString(chacha: CipherWithOutput, value: string): string {
    try {
        const encrypted = chacha.encrypt(Buffer.from(value))
        return Buffer.from(encrypted).toString('hex')
    } catch (err) {
        if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
            throw new Error('Invalid Authentication')
        } else {
            /* istanbul ignore next */

            throw err
        }
    }
}

export function decryptString(chacha: CipherWithOutput, cipherText: string): string {
    try {
        /**
             * Trying to decrypt non-strings
             * will cause no errors and will be hard to debug.
             * So instead we do this check here.
             */
        if (typeof cipherText !== 'string') {
            throw newRxError('SNH', {
                args: {
                    cipherText
                }
            })
        }
        const decrypted = chacha.decrypt(Buffer.from(cipherText, 'hex'))
        const ret = Buffer.from(decrypted).toString()
        return ret
    } catch (err) {
        if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
            throw new Error('Invalid Authentication')
        } else {
            /* istanbul ignore next */

            throw err
        }
    }
}

export type InternalStorePasswordDocType = InternalStoreDocType<{
    hash: string
}>

export interface EncryptableStorageType<Internals, InstanceCreationOptions> {
    storage: RxStorage<Internals, InstanceCreationOptions>
}

/**
 * Create encrypted storage for pluto-encrypted
 * @param args {  storage: RxStorage<Internals, InstanceCreationOptions>;  }
 * @returns RxStorage<Internals, InstanceCreationOptions>
 */
export function wrappedKeyEncryptionStorage<Internals, InstanceCreationOptions>(
    args: EncryptableStorageType<Internals, InstanceCreationOptions>
): RxStorage<Internals, InstanceCreationOptions> {
    return Object.assign(
        {},
        args.storage,
        {
            async createStorageInstance<RxDocType>(
                params: RxStorageInstanceCreationParams<RxDocType, any>
            ) {
                try {
                    if (typeof params.password !== 'undefined') {
                        validatePassword(params.password)
                    }

                    if (!hasEncryption(params.schema)) {
                        const retInstance = await args.storage.createStorageInstance(params)
                        return retInstance
                    }

                    if (!params.password) {
                        throw newRxError('EN3', {
                            database: params.databaseName,
                            collection: params.collectionName,
                            schema: params.schema
                        })
                    }

                    const password = params.password

                    const hashedPassword = sha256(password)
                    const chacha = chacha20poly1305(hashedPassword, nonce)

                    const schemaWithoutEncrypted: RxJsonSchema<RxDocumentData<RxDocType>> = clone(params.schema)
                    delete schemaWithoutEncrypted.encrypted
                    if (schemaWithoutEncrypted.attachments) {
                        schemaWithoutEncrypted.attachments.encrypted = false
                    }

                    const instance = await args.storage.createStorageInstance(
                        Object.assign(
                            {},
                            params,
                            {
                                schema: schemaWithoutEncrypted
                            }
                        )
                    )

                    function modifyToStorage(docData: RxDocumentWriteData<RxDocType>) {
                        try {
                            docData = cloneWithoutAttachments(docData)
                            ensureNotFalsy(params.schema.encrypted)
                                .forEach(path => {
                                    const value = getProperty(docData, path)
                                    if (typeof value === 'undefined') {
                                        return
                                    }

                                    const stringValue = JSON.stringify(value)
                                    const encrypted = encryptString(chacha, stringValue)
                                    setProperty(docData, path, encrypted)
                                })

                            // handle attachments
                            if (
                                params.schema.attachments &&
                                params.schema.attachments.encrypted
                            ) {
                                const newAttachments: typeof docData._attachments = {}
                                Object.entries(docData._attachments).forEach(([id, attachment]) => {
                                    const useAttachment: RxAttachmentWriteData = flatClone(attachment) as any
                                    if (useAttachment.data) {
                                        const dataString = useAttachment.data
                                        useAttachment.data = b64EncodeUnicode(encryptString(chacha, dataString))
                                    }
                                    newAttachments[id] = useAttachment
                                })
                                docData._attachments = newAttachments
                            }
                            return docData
                        } catch (err) {
                            if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
                                throw new Error('Invalid Authentication')
                            } else {
                                /* istanbul ignore next */

                                throw err
                            }
                        }
                    }
                    async function modifyFromStorage(docData: RxDocumentData<any>): Promise<RxDocumentData<RxDocType>> {
                        try {
                            docData = cloneWithoutAttachments(docData)
                            ensureNotFalsy(params.schema.encrypted)
                                .forEach(path => {
                                    const value = getProperty(docData, path)
                                    if (typeof value === 'undefined') {
                                        return
                                    }
                                    const decrypted = decryptString(chacha, value)
                                    const decryptedParsed = JSON.parse(decrypted)
                                    setProperty(docData, path, decryptedParsed)
                                })
                            return docData
                        } catch (err) {
                            if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
                                throw new Error('Invalid Authentication')
                            } else {
                                /* istanbul ignore next */

                                throw err
                            }
                        }
                    }

                    function modifyAttachmentFromStorage(attachmentData: string): string {
                        try {
                            if (
                                params.schema.attachments &&
                                params.schema.attachments.encrypted
                            ) {
                                const decrypted = decryptString(chacha, b64DecodeUnicode(attachmentData))
                                return decrypted
                            } else {
                                return attachmentData
                            }
                        } catch (err) {
                            if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
                                throw new Error('Invalid Authentication')
                            } else {
                                /* istanbul ignore next */

                                throw err
                            }
                        }
                    }

                    return wrapRxStorageInstance(
                        instance,
                        modifyToStorage,
                        modifyFromStorage,
                        modifyAttachmentFromStorage
                    )
                } catch (err) {
                    if ((err as RxError).code === 'DB1' || (err as RxError).message === 'invalid tag') {
                        throw new Error('Invalid Authentication')
                    } else {
                        /* istanbul ignore next */

                        throw err
                    }
                }
            }
        }
    )
}

function cloneWithoutAttachments<T>(data: RxDocumentWriteData<T>): RxDocumentData<T> {
    const attachments = data._attachments
    data = flatClone(data)
    delete (data as any)._attachments
    data = clone(data)
    data._attachments = attachments
    return data as any
}

function validatePassword(password: string) {
    if (typeof password !== 'string') {
        throw newRxTypeError('EN1', {
            password
        })
    }
    if (password.length < MINIMUM_PASSWORD_LENGTH) {
        throw newRxError('EN2', {
            minPassLength: MINIMUM_PASSWORD_LENGTH,
            password
        })
    }
}
