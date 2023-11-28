import {Database} from 'pluto-encrypted';
import {PlutoInMemory} from '../../../pluto/PlutoInMemory';

const encoder = new TextEncoder();
const databaseName = "pluto";
const password = encoder.encode("my secret");

export const pluto = Database.createEncrypted(
    databaseName,
    password
);

export async function getDB() {
  // const pluto = await Database.createEncrypted(
  //     databaseName,
  //     password
  // );
  // const backup = await pluto.backup();
  // const db = await Database.createEncrypted(
  //     databaseName + "restored",
  //     password,
  //     backup
  // );
  // await db.start();
  return new PlutoInMemory();
}

export default pluto;