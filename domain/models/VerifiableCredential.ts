import { JsonString } from "."
import { DID } from "./DID"


export enum CredentialType {
  JWT = "jwt",
  W3C = "w3c",
  Unknown = "Unknown"
}


export class VerifiableCredentialTypeContainer {
  constructor(
    public readonly id: string,
    public readonly type: string
  ) {}
}

export interface VerifiableCredential {
  readonly id?: string
  readonly credentialType: CredentialType
  readonly context: Array<string>
  readonly type: Array<string>
  readonly credentialSceham?: VerifiableCredentialTypeContainer
  readonly credentialSubject: string
  readonly credentialStatus?: VerifiableCredentialTypeContainer
  readonly refreshService: VerifiableCredentialTypeContainer
  readonly evidence: VerifiableCredentialTypeContainer
  readonly termsOfUse: VerifiableCredentialTypeContainer
  readonly issuer: DID
  readonly issuanceDate: string
  readonly expirationDate: string
  readonly validFrom: VerifiableCredentialTypeContainer
  readonly validUntil: VerifiableCredentialTypeContainer
  readonly proof?: JsonString
  readonly aud: Array<string>
}
