import { v4 as uuidv4 } from 'uuid'
import { KeySpec, PrivateKeyStaticMethodTypes } from './types'
import { PlutoDBontext } from '..'
import { DID, PrivateKey } from '../../../domain'

export const PrivateKeyStaticMethods: PrivateKeyStaticMethodTypes = {
    /**
     * Stores privateKeys references to an existing DID
     * @param privateKey
     * @param did
     * @param keyPathIndex
     * @param _metaId
     */
    async storePrivateKeys(
        this: PlutoDBontext,
        privateKey: PrivateKey,
        did: DID,
        keyPathIndex: number
    ): Promise<void> {
        await this.db.collections.privatekeys.insert({
            id: uuidv4(),
            did: did.toString(),
            type: privateKey.type,
            keySpecification: Array.from(privateKey.keySpecification).reduce<KeySpec[]>(
                (all, [key, value]: any) => [
                    ...all,
                    {
                        type: 'string',
                        name: key,
                        value: `${value}`
                    }
                ],
                [
                    {
                        type: 'string',
                        name: 'raw',
                        value: Buffer.from(privateKey.raw).toString('hex')
                    },
                    {
                        type: 'number',
                        name: 'index',
                        value: `${keyPathIndex}`
                    }
                ]
            )
        })
    },
    async getDIDPrivateKeysByDID(
        this: PlutoDBontext,
        did: DID
    ): Promise<PrivateKey[]> {
        const privateKeys = await this.db.collections.privatekeys.find({
            selector: {
                did: {
                    $eq: did.toString()
                }
            }
        }).exec()
        return privateKeys.map((privateKey) => {
            return privateKey.toDomainPrivateKey()
        })
    },
    async getDIDPrivateKeyByID(
        this: PlutoDBontext,
        id: string
    ): Promise<PrivateKey | null> {
        const privateKey = await this.db.collections.privatekeys.findOne({
            selector: {
                id: {
                    $eq: id
                }
            }
        }).exec()
        return privateKey ? privateKey.toDomainPrivateKey() : null
    }
}