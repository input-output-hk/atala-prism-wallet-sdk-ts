import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import { PlutoDBontext } from ".."
import { Credential } from '../../../domain'

export interface CredentialSubjectType {
    type: string
    name: string
    value: string
}

export interface CredentialSchemaType {
    id: string
    recoveryId: string
    credentialData: string
    issuer?: string
    subject?: string
    credentialCreated?: string
    credentialUpdated?: string
    credentialSchema?: string
    validUntil?: string
    revoked?: boolean
    availableClaims?: string[]
}

export type CredentialDocument = RxDocument<CredentialSchemaType>
export interface CredentialMethodTypes extends KeyFunctionMap {
    toDomainCredential: (this: CredentialSchemaType) => Credential
}

export interface CredentialStaticMethodTypes extends KeyFunctionMap {
    getAllCredentials(this: PlutoDBontext): Promise<Credential[]>
    storeCredential(this: PlutoDBontext, credential: Credential): Promise<void>
}

export type CredentialCollection = RxCollection<
    CredentialSchemaType,
    CredentialMethodTypes,
    CredentialStaticMethodTypes
>
