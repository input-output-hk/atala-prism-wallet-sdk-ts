

import { DID, DIDPair } from '../../../domain'
import { DIDPairStaticMethodTypes } from './types'

export const DIDPairStaticMethods: DIDPairStaticMethodTypes = {

    /**
     * Stores a didpair
     * @param host
     * @param receiver
     * @param name
     */
    async storeDIDPair(
        host: DID,
        receiver: DID,
        name: string
    ): Promise<void> {
        await this.db.collections.didpairs.insert({
            hostDID: host.toString(),
            receiverDID: receiver.toString(),
            name
        })
    },
    /**
     * Gets all the stores didPairs
     * @returns [Domain.DIDPair[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
     */
    async getAllDidPairs(): Promise<DIDPair[]> {
        const results = await this.db.collections.didpairs.find().exec()
        return results.map(
            ({ hostDID, receiverDID, name }) =>
                new DIDPair(DID.fromString(hostDID), DID.fromString(receiverDID), name)
        )
    },
    async getPairByName(name: string): Promise<DIDPair | null> {
        const didPair = await this.db.collections.didpairs.findOne({
            selector: {
                $and: [
                    {
                        name
                    }
                ]
            }
        }).exec()

        return didPair
            ? new DIDPair(
                DID.fromString(didPair.hostDID),
                DID.fromString(didPair.receiverDID),
                didPair.name
            )
            : null
    },
    /**
   * Get a did pair (connection) by one of its dids
   * @param did
   * @returns [Domain.DIDPair](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.DIDPair.html)
   */
    async getPairByDID(did: DID): Promise<DIDPair | null> {
        const didPair = await this.db.collections.didpairs.findOne({
            selector: {
                $or: [
                    {
                        hostDID: did.toString()
                    },
                    {
                        receiverDID: did.toString()
                    }
                ]
            }
        }).exec()
        return didPair
            ? new DIDPair(
                DID.fromString(didPair.hostDID),
                DID.fromString(didPair.receiverDID),
                didPair.name
            )
            : null
    }
}