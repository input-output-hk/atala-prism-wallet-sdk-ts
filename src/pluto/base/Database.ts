


import {
    CollectionsOfDatabase,
    RxCollectionCreator,
    addRxPlugin,
    createRxDatabase,
    removeRxDatabase,
    RxDatabase,
    RxDatabaseCreator,
} from 'rxdb'
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump'
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder'
import { RxDBEncryptedMigrationPlugin } from '../migration'

export type DBOptions = RxDatabaseCreator;

export class DatabaseBase<Collections extends CollectionsOfDatabase = CollectionsOfDatabase> {
    private _db!: RxDatabase<Collections, any, any>

    get db() {
        if (!this._db) {
            throw new Error('Start Pluto first.')
        }
        return this._db
    }

    getCollection(name: string) {
        const collections = this.db.collections;
        if (!collections[name]) {
            throw new Error("Collection does not exist")
        }
        return collections[name]
    }

    constructor(
        private readonly dbOptions: DBOptions
    ) {
        addRxPlugin(RxDBQueryBuilderPlugin)
        addRxPlugin(RxDBJsonDumpPlugin)
        addRxPlugin(RxDBEncryptedMigrationPlugin)
    }

    async backup() {
        return await this.db.exportJSON()
    }

    /**
     * Use with caution, this will remove all entries from database
     * and then destroy the database itself.
     */
    async clear() {
        const storages = Array.from(this.db.storageInstances.values())
        for (const storage of storages) {
            await storage.cleanup(Infinity)
        }
        await removeRxDatabase(this.dbOptions.name, this.db.storage)
    }

    /**
     * Start the database and build collections
     */
    async start(collections?: {
        [name: string]: RxCollectionCreator<any>
    }): Promise<void> {
        const { dbOptions } = this
        if (!this._db) {
            this._db = await createRxDatabase<Collections>({
                ...dbOptions,
                multiInstance: false
            })
        }
        if (collections) {
            const extendedCollections = collections ? collections : {};
            await this._db.addCollections(extendedCollections);
        }
    }
}