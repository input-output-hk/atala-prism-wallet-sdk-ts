import { CredentialRequestMetadataMethodTypes, CredentialRequestMetadataSchemaType } from "./types"

export const CredentialRequestMetadataMethods: CredentialRequestMetadataMethodTypes = {
    toDomainCredentialRequestMetadata: function toDomainCredentialRequestMetadata(
        this: CredentialRequestMetadataSchemaType
    ) {
        return this
    }
}