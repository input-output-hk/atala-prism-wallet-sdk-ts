import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import { PlutoDBontext } from ".."
import { Anoncreds } from "../../../domain"




export type CredentialRequestMetadataCollection = RxCollection<
    CredentialRequestMetadataSchemaType,
    CredentialRequestMetadataMethodTypes,
    CredentialRequestMetadataStaticMethodTypes
>



export interface CredentialRequestMetadataSchemaType {
    id: string
    link_secret_blinding_data: {
        v_prime: string
    }
    link_secret_name: string
    nonce: string
}

export type CredentialRequestMetadataDocument =
    RxDocument<CredentialRequestMetadataSchemaType>

export interface CredentialRequestMetadataMethodTypes extends KeyFunctionMap {
    toDomainCredentialRequestMetadata: (
        this: CredentialRequestMetadataSchemaType
    ) => Anoncreds.CredentialRequestMeta
}

export interface CredentialRequestMetadataStaticMethodTypes extends KeyFunctionMap {
    fetchCredentialMetadata(
        this: PlutoDBontext,
        linkSecretName: string
    ): Promise<Anoncreds.CredentialRequestMeta | null>
    storeCredentialMetadata(
        this: PlutoDBontext,
        metadata: Anoncreds.CredentialRequestMeta,
        linkSecret: string
    ): Promise<void>
}