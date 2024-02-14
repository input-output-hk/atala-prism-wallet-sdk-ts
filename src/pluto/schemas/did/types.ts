import { RxDocument, KeyFunctionMap, RxCollection } from "rxdb"
import { PlutoDBontext } from ".."
import { DID, PrismDIDInfo, PrivateKey } from "../../../domain"
import { PeerDID } from "../../../peer-did/PeerDID"



export interface DIDSchemaType {
    schema: string
    method: string
    methodId: string
    alias?: string
    did: string
}

export type DIDDocument = RxDocument<DIDSchemaType>

export interface DIDStaticMethodTypes extends KeyFunctionMap {
    getPrismLastKeyPathIndex(this: PlutoDBontext,): Promise<number>
    getPrismDIDKeyPathIndex(this: PlutoDBontext, did: DID): Promise<number | null>
    storePeerDID(
        this: PlutoDBontext,
        did: DID,
        privateKeys: PrivateKey[]
    ): Promise<void>
    getAllPeerDIDs(this: PlutoDBontext): Promise<PeerDID[]>
    getAllPrismDIDs(this: PlutoDBontext): Promise<PrismDIDInfo[]>
    getDIDInfoByDID(this: PlutoDBontext, did: DID): Promise<PrismDIDInfo | null>
    getDIDInfoByAlias(this: PlutoDBontext, alias: string): Promise<PrismDIDInfo[]>
    storePrismDID(
        this: PlutoDBontext,
        did: DID,
        keyPathIndex: number,
        privateKey: PrivateKey,
        _privateKeyMetaId?: string | null,
        alias?: string | undefined
    ): Promise<void>
}



export type DIDCollection = RxCollection<
    DIDSchemaType,
    any,
    DIDStaticMethodTypes
>