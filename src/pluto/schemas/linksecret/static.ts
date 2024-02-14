
import { LinkSecretStaticMethodTypes } from "./types"

export const LinkSecretStaticMethods: LinkSecretStaticMethodTypes = {
    async storeLinkSecret(
        linkSecret: string,
        linkSecretName: string
    ): Promise<void> {
        await this.db.collections.linksecrets.insert({
            name: linkSecretName,
            secret: linkSecret
        })
    },
    async getLinkSecret(
        linkSecretName?: string | undefined
    ): Promise<string | null> {
        const query = linkSecretName
            ? {
                selector: {
                    name: {
                        $eq: linkSecretName
                    }
                }
            } : {}
        const linkSecret = await this.db.collections.linksecrets.findOne(query).exec()
        if (linkSecret) {
            return linkSecret.toDomainLinkSecret()
        }
        return null
    }
}
