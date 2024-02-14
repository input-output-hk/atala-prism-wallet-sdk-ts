import { LinkSecretDocument, LinkSecretMethodTypes } from "./types"




export const LinkSecretMethods: LinkSecretMethodTypes = {
    toDomainLinkSecret: function toDomainLinkSecret(this: LinkSecretDocument) {
        return this.secret
    }
}