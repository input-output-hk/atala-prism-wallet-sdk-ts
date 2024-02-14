import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"
import { PlutoDBontext } from ".."
import { DID, DIDPair } from "../../../domain"

export interface DIDPairSchemaType {
    hostDID: string
    receiverDID: string
    name: string
}


export type DIDPairDocument = RxDocument<DIDPairSchemaType>

export interface DIDPairStaticMethodTypes extends KeyFunctionMap {
    storeDIDPair(
        this: PlutoDBontext,
        host: DID,
        receiver: DID,
        name: string
    ): Promise<void>
    getAllDidPairs(this: PlutoDBontext): Promise<DIDPair[]>
    getPairByName(this: PlutoDBontext, name: string): Promise<DIDPair | null>
    getPairByDID(this: PlutoDBontext, did: DID): Promise<DIDPair | null>
}
export type DIDPairCollection = RxCollection<DIDPairSchemaType, any, DIDPairStaticMethodTypes>
