import { KeyFunctionMap, RxCollection, RxDocument } from 'rxdb'
import { DID, PrivateKey } from '../../../domain'
import { PlutoDBontext } from '..'

export interface KeySpec {
    name: string
    type: string
    value: string
}

export interface KeySchemaType {
    id: string
    type: string
    did: string
    keySpecification: KeySpec[]
}

export interface PrivateKeyMethodTypes extends KeyFunctionMap {
    toDomainPrivateKey: (this: PrivateKeyDocument) => PrivateKey
}

export interface PrivateKeyStaticMethodTypes extends KeyFunctionMap {
    storePrivateKeys(
        this: PlutoDBontext,
        privateKey: PrivateKey,
        did: DID,
        keyPathIndex: number
    ): Promise<void>
    getDIDPrivateKeysByDID(
        this: PlutoDBontext,
        did: DID
    ): Promise<PrivateKey[]>
    getDIDPrivateKeyByID(
        this: PlutoDBontext,
        id: string
    ): Promise<PrivateKey | null>
}

export type PrivateKeyColletion = RxCollection<
    KeySchemaType,
    PrivateKeyMethodTypes,
    PrivateKeyStaticMethodTypes
>
export type PrivateKeyDocument = RxDocument<
    KeySchemaType,
    PrivateKeyMethodTypes
>