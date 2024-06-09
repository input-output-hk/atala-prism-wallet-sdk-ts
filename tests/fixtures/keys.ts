import { Ed25519KeyPair } from "../../src/apollo/utils/Ed25519KeyPair";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { Secp256k1KeyPair } from "../../src/apollo/utils/Secp256k1KeyPair";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { X25519KeyPair } from "../../src/apollo/utils/X25519KeyPair";
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";

export const expectedDIDSecp256K1 =
  "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw";

export const expectedDIDX25519 =
  "did:prism:ba32baedae5964a54603f05a10ecb0939131e3160b2e92ec9eda22d202bf2ad4:Cq0CCqoCEkwKEWlzc3Vpbmdpc3N1aW5nS2V5EAJKNQoGWDI1NTE5EitfUGpIZWZGaDlIN3FIM1Z0N01POFZFTi1GMlBsV2NYemR4dzZMUGt4RUdFEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw";

export const expectedDIDEd25519 =
  "did:prism:969fdc2ae434b4db3e6dd8df42231c719610bd10df93fc6139a6f9d3144e15fd:Cq4CCqsCEk0KEWlzc3Vpbmdpc3N1aW5nS2V5EAJKNgoHRWQyNTUxORIrZG01ZjJHZFI1QmFIcFJ4QjhiVEVsdkVfMGdJQzJwNDA0TXN4OXN3SjkxNBJ0Ch9hdXRoZW50aWNhdGlvbmF1dGhlbnRpY2F0aW9uS2V5EARCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSZAoPbWFzdGVybWFzdGVyS2V5EAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfos"

const secpPrivateKey = new Secp256k1PrivateKey(
  new Uint8Array([
    45, 182, 188, 189, 107, 229, 136, 180, 199, 177, 110, 84, 98, 140, 121, 84,
    107, 105, 179, 139, 14, 174, 177, 63, 173, 141, 7, 118, 161, 192, 192, 221,
  ])
);
export const secp256K1 = new Secp256k1KeyPair(
  secpPrivateKey,
  secpPrivateKey.publicKey()
);

const ed25519PrivateKey = new Ed25519PrivateKey(
  Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs", "base64url")
);
export const ed25519 = new Ed25519KeyPair(
  ed25519PrivateKey,
  ed25519PrivateKey.publicKey()
);

const x25519PrivateKey = new X25519PrivateKey(
  Buffer.from("eHbEtI71XIBIsuQK7XdjZ_ZPnLZb3y4paWoqSoS7BnI", "base64url")
);
export const x25519 = new X25519KeyPair(
  x25519PrivateKey,
  x25519PrivateKey.publicKey()
);

export const Derivations = [
  {
    seed: '947877896c61a5c64f266adbebbc69a2a01f1a2cfbf72c08a11c693d0429ccded34bdc0c28b5be910a5095b97e7bc6e3e209527ce8e75f9964d25cd6f6ad63e0',
    raw: 'e8133470f8b807e7b405a8d1214d1a6c82c989a80fc51d9858eb574c49ff9fe5',
    path: "m/1'/0'/0'",
    derived: '4cc70b0ef596c44ba612ed66f897056688ec5207cbaf9c6b0dc5af5a7f9bca37'
  },
  {
    seed: '947877896c61a5c64f266adbebbc69a2a01f1a2cfbf72c08a11c693d0429ccded34bdc0c28b5be910a5095b97e7bc6e3e209527ce8e75f9964d25cd6f6ad63e0',
    raw: 'e8133470f8b807e7b405a8d1214d1a6c82c989a80fc51d9858eb574c49ff9fe5',
    path: "m/1'/2'/3'",
    derived: '37ef69dc5ebdc549fe7d4775381be9025e52b5089c5a15436293f660937f4801'
  },
  {
    seed: '947877896c61a5c64f266adbebbc69a2a01f1a2cfbf72c08a11c693d0429ccded34bdc0c28b5be910a5095b97e7bc6e3e209527ce8e75f9964d25cd6f6ad63e0',
    raw: 'e8133470f8b807e7b405a8d1214d1a6c82c989a80fc51d9858eb574c49ff9fe5',
    path: "m/2'/2'/4'",
    derived: '9c34aa70ee4ab4666aac2a6511691e69d55be608f799c3f8dd83911758c6395e'
  },
  {
    seed: '947877896c61a5c64f266adbebbc69a2a01f1a2cfbf72c08a11c693d0429ccded34bdc0c28b5be910a5095b97e7bc6e3e209527ce8e75f9964d25cd6f6ad63e0',
    raw: 'e8133470f8b807e7b405a8d1214d1a6c82c989a80fc51d9858eb574c49ff9fe5',
    path: "m/44'/6'/4'",
    derived: 'b5ac87a07fb28997cec262841f4d6e79089ce61b58e39681623c61edf4d690a0'
  },
  {
    seed: 'fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542',
    raw: '4b03d6fc340455b363f51020ad3ecca4f0850280cf436c70c727923f6db46c3e',
    path: "m/3'/2'/1'",
    derived: 'c4a82f0e3a06847d1d40962457eec69fbe426eedb6c2f69971df7412a3b630ec'
  },
  {
    seed: 'fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542',
    raw: '4b03d6fc340455b363f51020ad3ecca4f0850280cf436c70c727923f6db46c3e',
    path: "m/224'/8'/16'",
    derived: '8962f31369fb10f0585b4a22e7e24f75769b2eea9758a9aec33674eab024fa59'
  },
];
