import { v4 as uuidv4 } from 'uuid'
import { CredentialRequestMetadataStaticMethodTypes } from './types'
import { Anoncreds } from '../../../domain'

export const CredentialRequestMetadataStaticMethods: CredentialRequestMetadataStaticMethodTypes =
{
    async storeCredentialMetadata(
        metadata: Anoncreds.CredentialRequestMeta,
        linkSecret: string
    ): Promise<void> {
        await this.db.collections.credentialrequestmetadatas.insert({
            ...metadata,
            id: uuidv4(),
            link_secret_name: linkSecret
        })
    },
    async fetchCredentialMetadata(
        linkSecretName: string
    ): Promise<Anoncreds.CredentialRequestMeta | null> {
        const credentialRequestMetadata = await this.db.collections.credentialrequestmetadatas.findOne({
            selector: {
                link_secret_name: {
                    $eq: linkSecretName
                }
            }
        }).exec()

        if (credentialRequestMetadata) {
            return credentialRequestMetadata.toDomainCredentialRequestMetadata()
        }
        return null
    }
}
