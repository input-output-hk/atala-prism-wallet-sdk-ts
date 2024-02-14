import { CollectionsOfDatabase, RxCollection } from "rxdb";
import { DatabaseBase } from "../base/Database";
import { ExtractStaticMethods, UnionToIntersection } from "../types";
import { CredentialCollection } from "./credential";
import { CredentialRequestMetadataCollection } from "./credentialRequestMetadata";
import { DIDCollection } from "./did";
import { DIDPairCollection } from "./didpair";
import { LinkSecretColletion } from "./linksecret";
import { MediatorCollection } from "./mediator";
import { MessageColletion } from "./message";
import { PrivateKeyColletion } from "./privatekey";

export type PlutoInstance<
    Collections extends CollectionsOfDatabase = CollectionsOfDatabase,
> = DatabaseBase<Collections>

export type StaticRxCollectionContext<Collections extends CollectionsOfDatabase = { [name: string]: RxCollection; }> = PlutoInstance<Collections>

export type Collections = {
    messages: MessageColletion;
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
}

export type PlutoDBontext = DatabaseBase<Collections> & ExtractStaticMethods<UnionToIntersection<
    Collections[keyof Collections]
>>
