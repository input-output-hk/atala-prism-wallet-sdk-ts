import { RxDocument, KeyFunctionMap, RxCollection } from 'rxdb'
import { PlutoDBontext } from '..'
import { Anoncreds } from '../../../domain'





export interface LinkSecretSchemaType {
    readonly name: string
    readonly secret: string
}



export type LinkSecretDocument = RxDocument<
    LinkSecretSchemaType,
    LinkSecretMethodTypes
>

export interface LinkSecretMethodTypes extends KeyFunctionMap {
    toDomainLinkSecret: (this: LinkSecretDocument) => Anoncreds.LinkSecret
}

export interface LinkSecretStaticMethodTypes extends KeyFunctionMap {
    storeLinkSecret(
        this: PlutoDBontext,
        linkSecret: string,
        linkSecretName: string
    ): Promise<void>
    getLinkSecret(
        this: PlutoDBontext,
        linkSecretName?: string | undefined
    ): Promise<string | null>
}

export type LinkSecretColletion = RxCollection<
    LinkSecretSchemaType,
    LinkSecretMethodTypes,
    LinkSecretStaticMethodTypes
>