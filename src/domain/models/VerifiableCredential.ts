
export enum CredentialType {
  JWT = "prism/jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  ANONCREDS_OFFER = "anoncreds/credential-offer@v1.0",
  ANONCREDS_REQUEST = "anoncreds/credential-request@v1.0",
  ANONCREDS_ISSUE = "anoncreds/credential@v1.0",
  ANONCREDS_PROOF_REQUEST = "anoncreds/proof-request@v1.0",
  PRESENTATION_EXCHANGE_DEFINITIONS = "dif/presentation-exchange/definitions@v1.0",
  PRESENTATION_EXCHANGE_SUBMISSION = "dif/presentation-exchange/submission@v1.0",
  Unknown = "Unknown"
}

export interface CredentialSubject {
  [name: string]: string;
}

export interface VerifiableCredentialTypeContainer {
  id: string;
  type: string;
}


export type InputFieldFilter = {
  type: string,
  pattern: string
}

export type InputField = {
  path: string[],
  id?: string,
  purpose?: string,
  name?: string,
  filter?: InputFieldFilter,
  optional?: boolean
}

export enum InputLimitDisclosure {
  REQUIRED = "required",
  PREFERRED = "preferred"
}

export type InputConstraints = {
  fields: InputField[],
  limitDisclosure: InputLimitDisclosure
}

export type InputDescriptor = {
  id: string,
  constraints: InputConstraints,
  name?: string,
  purpose?: string,
  format?: DefinitionFormat,
}

export enum SubmissionDescriptorFormat {
  JWT_VC = 'jwt_vc'
}

export type DefinitionFormat = {
  jwt: {
    alg: string[]
  },
};

export type PresentationDefinitionRequest = {
  id: string,
  inputDescriptors: InputDescriptor[],
  format: DefinitionFormat
}

export type DescriptorItem = {
  id: string,
  format: string,
  path: string,
  path_nested?: DescriptorItem
}

export type PresentationSubmission = {
  presentation_submission: {
    id: string,
    definition_id: string,
    descriptor_map: DescriptorItem[]
  },
  verifiable_presentation: string[],
}

export enum JWTVerifiableCredentialProperties {
  iss = "iss",
  vc = "vc",
  jti = "jti",
  nbf = "nbf",
  sub = "sub",
  exp = "exp",
  aud = "aud",
  type = "type",
  revoked = "revoked"
}

export type JWTCredentialPayload = {
  [key in JWTVerifiableCredentialProperties]: any;
}

export enum ProofTypesEnum {
  EcdsaSecp256k1Signature2019 = "EcdsaSecp256k1Signature2019",
  JsonWebSignature2020 = "JsonWebSignature2020"
}

export type Proof = {
  type: string,
  created?: string,
  proofPurpose: ProofPurpose,
  verificationMethod: string,
  challenge?: string,
  domain?: string,
  jws?: string
}

export enum ProofPurpose {
  AUTHENTTICATION = "authentication"
}