import {
    CollectionsOfDatabase,
    RxCollection,
    RxCollectionCreator,
    RxDatabase,
    RxDatabaseCreator,
    RxDumpDatabase,
    RxJsonSchema,
    RxStorage
} from "rxdb"
import { DatabaseBase } from "./base/Database";
import { CredentialCollection } from "./schemas/credential";
import { CredentialRequestMetadataCollection } from "./schemas/credentialRequestMetadata";
import { DIDCollection } from "./schemas/did";
import { DIDPairCollection } from "./schemas/didpair";
import { LinkSecretColletion } from "./schemas/linksecret";
import { MediatorCollection } from "./schemas/mediator";
import { MessageColletion } from "./schemas/message";
import { PrivateKeyColletion } from "./schemas/privatekey";

export type ExtractStaticMethods<T> = {
    [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

export type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type Schema<T> = RxJsonSchema<T> & {
    encrypted: Array<keyof T>
}

