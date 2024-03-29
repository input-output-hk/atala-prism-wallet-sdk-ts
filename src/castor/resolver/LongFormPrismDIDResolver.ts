import { SHA256 } from "@stablelib/sha256";
import { CastorError } from "../../domain/models/Errors";
import { Apollo } from "../../domain/buildingBlocks/Apollo";
import { LongFormPrismDID } from "../../castor/did/prismDID/LongFormPrismDID";
import {
  DIDResolver,
  DIDDocument,
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
  Service as DIDDocumentService,
  Services as DIDDocumentServices,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  Authentication as DIDDocumentAuthentication,
  DID,
  DIDUrl,
  DIDDocumentCoreProperty,
} from "../../domain/models";

import * as DIDParser from "../parser/DIDParser";
import * as Protos from "../../castor/protos/node_models";
import {
  getUsage,
  getUsageId,
  PrismDIDPublicKey,
} from "../../castor/did/prismDID/PrismDIDPublicKey";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";
import { Secp256k1PublicKey } from "../../apollo/utils/Secp256k1PublicKey";
import { KeyProperties } from "../../domain/models/KeyProperties";

export class LongFormPrismDIDResolver implements DIDResolver {
  method = "prism";

  constructor(private apollo: Apollo) {}

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const prismDID = new LongFormPrismDID(did);
    const state = prismDID.encodedState;
    const base64State = base64.base64url.decode(`u${state}`);
    const [verificationMethods, services] = this.decodeState(
      did,
      prismDID.stateHash,
      base64State
    );
    const servicesProperty = new DIDDocumentServices(services);
    const verificationMethodsProperty = new DIDDocumentVerificationMethods([
      ...verificationMethods.values(),
    ]);
    const coreProperties: DIDDocumentCoreProperty[] = [];
    const authenticate: DIDDocumentAuthentication[] = [];

    for (const [key, value] of verificationMethods) {
      authenticate.push(new DIDDocumentAuthentication([key], [value]));
    }

    coreProperties.push(...authenticate);
    coreProperties.push(servicesProperty);
    coreProperties.push(verificationMethodsProperty);

    return new DIDDocument(did, coreProperties);
  }

  private decodeState(
    did: DID,
    stateHash: string,
    encodedData: Uint8Array
  ): [Map<string, DIDDocumentVerificationMethod>, DIDDocumentService[]] {
    try {
      const verifyEncodedState = new SHA256().update(encodedData).digest();
      const verifyEncodedStateHex = verifyEncodedState;

      if (
        Buffer.from(verifyEncodedState).toString("hex") !==
        Buffer.from(verifyEncodedStateHex).toString("hex")
      ) {
        throw new CastorError.InitialStateOfDIDChanged();
      }
      const operation =
        Protos.io.iohk.atala.prism.protos.AtalaOperation.deserializeBinary(
          encodedData
        );

      const publicKeys: PrismDIDPublicKey[] =
        operation.create_did?.did_data?.public_keys?.map(
          (key: Protos.io.iohk.atala.prism.protos.PublicKey) => {
            const publicKey = key.has_compressed_ec_key_data
              ? Secp256k1PublicKey.secp256k1FromBytes(
                  key.compressed_ec_key_data.data
                )
              : Secp256k1PublicKey.secp256k1FromByteCoordinates(
                  key.ec_key_data.x,
                  key.ec_key_data.y
                );

            return new PrismDIDPublicKey(
              getUsageId(getUsage(key.usage)),
              getUsage(key.usage),
              publicKey
            );
          }
        ) || [];

      const services =
        operation.create_did?.did_data?.services?.reduce<DIDDocumentService[]>(
          (acc, service) => {
            const endpoint = service.service_endpoint.at(0);

            if (endpoint === undefined) return acc;

            return acc.concat(
              new DIDDocumentService(
                service.id,
                [service.type],
                new DIDDocumentServiceEndpoint(endpoint)
              )
            );
          },
          []
        ) ?? [];

      const verificationMethods = publicKeys.reduce(
        (partialResult, publicKey) => {
          /**
           * TODO: Support keys in multiple formats, right now its multibase
           */
          const didUrl = new DIDUrl(did, [], new Map(), publicKey.id);
          const curve = publicKey.keyData.getProperty(KeyProperties.curve);
          if (!curve) {
            throw new CastorError.InvalidKeyError();
          }
          const method = new DIDDocumentVerificationMethod(
            didUrl.string(),
            did.toString(),
            curve,
            undefined,
            base58.base58btc.encode(publicKey.keyData.raw)
          );
          partialResult.set(didUrl.string(), method);
          return partialResult;
        },
        new Map<string, DIDDocumentVerificationMethod>()
      );

      return [verificationMethods, services];
    } catch (err) {
      throw new CastorError.InitialStateOfDIDChanged();
    }
  }
}
