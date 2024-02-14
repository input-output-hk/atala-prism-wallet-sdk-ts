import { v4 as uuidv4 } from 'uuid'

import { KeySpec } from '../privatekey'
import { DIDStaticMethodTypes } from './types'
import { DID, PrivateKey, PrismDIDInfo, KeyProperties } from '../../../domain';
import { PeerDID } from '../../../peer-did/PeerDID';



export const DIDStaticMethods: DIDStaticMethodTypes = {
    async storePrismDID(did: DID, keyPathIndex: number, privateKey: PrivateKey, _privateKeyMetaId?: string | null | undefined, alias?: string | undefined): Promise<void> {
        const found = await this.db.collections.dids.findOne({
            selector: {
                did: {
                    $eq: did.toString(),
                }
            }
        }).exec();
        if (!found) {
            await this.db.collections.dids.insert({
                did: did.toString(),
                method: did.method,
                methodId: did.methodId,
                schema: did.schema,
                alias
            })
            await this.storePrivateKeys(
                privateKey,
                did,
                keyPathIndex,
            )
        }
    },
    async getAllPrismDIDs(): Promise<PrismDIDInfo[]> {
        const dids = await this.db.collections.dids.find({
            selector: {
                method: {
                    $eq: 'prism'
                }
            }
        }).exec()

        const prismDIDInfo: PrismDIDInfo[] = []

        for (const did of dids) {
            const didPrivateKeys = await this.getDIDPrivateKeysByDID!(
                DID.fromString(did.did)
            )

            for (const privateKey of didPrivateKeys) {
                const indexProp = privateKey.getProperty(KeyProperties.index)!

                prismDIDInfo.push(
                    new PrismDIDInfo(
                        DID.fromString(did.did),
                        parseInt(indexProp),
                        did.alias
                    )
                )
            }
        }

        return prismDIDInfo
    },
    async getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null> {
        const didDB = await this.db.collections.dids.findOne({
            selector: {
                did: did.toString()
            }
        }).exec()

        if (didDB) {
            const privateKeys = await this.getDIDPrivateKeysByDID!(
                DID.fromString(didDB.did)
            )
            /* istanbul ignore if */
            if (privateKeys.length === 0) {
                throw new Error(
                    'Imposible to recover PrismDIDInfo without its privateKey data.'
                )
            }
            const indexProp = privateKeys
                .at(0)!
                .getProperty(KeyProperties.index)
            const index = indexProp ? parseInt(indexProp) : undefined
            return new PrismDIDInfo(
                DID.fromString(didDB.did),
                index,
                didDB.alias
            )
        }

        return null
    },
    async getDIDInfoByAlias(alias: string): Promise<PrismDIDInfo[]> {
        const dids = await this.db.collections.dids.find({
            selector: {
                alias: {
                    $eq: alias
                }
            }
        }).exec()
        const prismDIDInfo: PrismDIDInfo[] = []
        for (const did of dids) {
            const didPrivateKeys = await this.getDIDPrivateKeysByDID!(
                DID.fromString(did.did)
            )
            for (const privateKey of didPrivateKeys) {
                const indexProp = privateKey.getProperty(KeyProperties.index)!
                prismDIDInfo.push(
                    new PrismDIDInfo(
                        DID.fromString(did.did),
                        parseInt(indexProp),
                        did.alias
                    )
                )
            }
        }
        return prismDIDInfo
    },
    async getPrismDIDKeyPathIndex(did: DID): Promise<number | null> {
        const [key] = await this.getDIDPrivateKeysByDID!(did)
        if (!key) {
            return 0
        }
        return key.index === undefined ? 0 : key.index + 1
    },

    async getPrismLastKeyPathIndex(): Promise<number> {
        const results = await this.getAllPrismDIDs!()
        if (!results || results.length === 0) {
            return 0
        }
        const maxim = Math.max(...results.map((result) => result.keyPathIndex))
        return maxim + 1
    },
    async getAllPeerDIDs(): Promise<PeerDID[]> {
        const peerDIDs: PeerDID[] = []
        const dids = await this.db.collections.dids.find({
            selector: {
                method: {
                    $eq: 'peer'
                }
            }
        }).exec()
        for (const did of dids) {
            const peerDID = DID.fromString(did.did)
            const keys = await this.getDIDPrivateKeysByDID!(peerDID)
            peerDIDs.push(
                new PeerDID(
                    peerDID,
                    keys.map((key) => ({
                        keyCurve: {
                            curve: key.curve as any
                        },
                        value: key.raw
                    }))
                )
            )
        }
        return peerDIDs
    },
    /**
    * Stores a peerdid with its privateKeys
    * @param did
    * @param privateKeys
    */
    async storePeerDID(
        did: DID,
        privateKeys: PrivateKey[]
    ): Promise<void> {
        await this.db.collections.dids.insert({
            did: did.toString(),
            method: did.method,
            methodId: did.methodId,
            schema: did.schema
        })
        for (const prv of privateKeys) {
            await this.db.collections.privatekeys.insert({
                id: uuidv4(),
                did: did.toString(),
                type: prv.type,
                keySpecification: Array.from(prv.keySpecification).reduce<KeySpec[]>(
                    (all, [key, value]) => [
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
                            value: Buffer.from(prv.raw).toString('hex')
                        }
                    ]
                )
            })
        }
    },


}