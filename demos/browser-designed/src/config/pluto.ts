import {Database} from "@pluto-encrypted/database";
import {
  CredentialCollection,
  CredentialRequestMetadataCollection,
  DIDCollection,
  DIDPairCollection,
  getDefaultCollections,
  LinkSecretColletion,
  MediatorCollection,
  MessageColletion,
  PrivateKeyColletion
} from "@pluto-encrypted/schemas";
import InMemory from '@pluto-encrypted/inmemory';

const encoder = new TextEncoder();
const databaseName = "pluto";
const password = encoder.encode("my secret");

//default password must be 32 bytes long
const defaultPassword = new Uint8Array(32).fill(1);

export async function getDB() {
  const db = await Database.createEncrypted<{
    dids: DIDCollection;
    didpairs: DIDPairCollection;
    mediators: MediatorCollection;
    privatekeys: PrivateKeyColletion;
    credentials: CredentialCollection;
    credentialrequestmetadatas: CredentialRequestMetadataCollection;
    linksecrets: LinkSecretColletion;
    messages: MessageColletion;
  }>(
      {
        name: `my-db`,
        encryptionKey: defaultPassword,
        storage: InMemory,
        collections: getDefaultCollections()
      }
  );
  console.log(await db.getAllMediators());
  return db;
}
