import {
    CollectionsOfDatabase,
    RxCollection,
    RxCollectionCreator,
    RxDumpDatabase,
    RxError,
    RxStorage
} from 'rxdb'
import { DatabaseBase } from './base/Database';
import { UnionToIntersection, ExtractStaticMethods } from './types';

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 */
export const Database = {
    createEncrypted: async function createEncrypted<
        Collections extends CollectionsOfDatabase,
    >(options: {
        name: string;
        encryptionKey: Uint8Array;
        importData?: RxDumpDatabase<Collections>;
        storage: RxStorage<any, any>;
        autoStart?: boolean;
        collections: {
            [key in keyof Collections]: RxCollectionCreator<any>;
        };
    }) {
        try {
            const {
                collections,
                name,
                storage,
                encryptionKey,
                importData,
                autoStart = true,
            } = options;


            if (!storage) {
                throw new Error('Please provide a valid storage.')
            }

            const collectionMap = new Map<any, RxCollectionCreator<any>>();

            Object.keys(collections).forEach((collectionName) => {
                const currentCollection = collections[collectionName]!;
                collectionMap.set(collectionName, currentCollection)
            })

            const instance = new DatabaseBase<Collections>({
                ignoreDuplicate: true,
                name,
                storage,
                password: Buffer.from(encryptionKey).toString('hex')
            })

            if (autoStart) {
                await instance.start(collections)
            }

            if (importData) {
                await instance.db.importJSON(importData)
            }

            const currentCollections = instance.db.collections;
            const collectionKeys = Object.keys(currentCollections)
            const staticMethodModels = collectionKeys.reduce<Map<string, Function>>((statics, collectionName) => {
                const currentCollection: RxCollection = instance.getCollection(collectionName);
                Object.keys(currentCollection.statics).forEach((staticName) => {
                    const func = currentCollection.statics[staticName]!;
                    if (statics.has(staticName)) {
                        throw new Error(`Static function in model ${collectionName}.${staticName} is duplicated, statics must be unique across al collections.`)
                    }
                    statics.set(staticName, func)
                })
                return statics
            }, new Map<string, Function>());


            const proxy = new Proxy<DatabaseBase<Collections> & UnionToIntersection<ExtractStaticMethods<
                Collections[keyof Collections]
            >>>(instance as any, {
                get(target, propAny) {
                    const prop = String(propAny)
                    const destination = (target as any)[prop]
                    if (typeof destination === 'function') {
                        // If the property is a function, return a function that calls it
                        return function (...args: any) {
                            return destination.apply(target, args);
                        };
                    } else {
                        if (staticMethodModels.has(prop.toString())) {
                            return staticMethodModels.get(prop.toString())
                        }
                        return destination;
                    }
                },
            })

            return proxy
        } catch (err) {
            /* istanbul ignore else */
            if ((err as RxError).code === 'DB1') {
                throw new Error('Invalid Authentication')
            } else {
                /* istanbul ignore next */

                throw err
            }
        }
    }
}