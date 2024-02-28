[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Domain

# Namespace: Domain

## Table of contents

### Namespaces

- [AgentError](Domain.AgentError.md)
- [Anoncreds](Domain.Anoncreds.md)
- [ApiError](Domain.ApiError.md)
- [ApolloError](Domain.ApolloError.md)
- [CastorError](Domain.CastorError.md)
- [CommonError](Domain.CommonError.md)
- [ExportableKey](Domain.ExportableKey.md)
- [ImportableKey](Domain.ImportableKey.md)
- [JWK](Domain.JWK.md)
- [MercuryError](Domain.MercuryError.md)
- [Message](Domain.Message.md)
- [PEM](Domain.PEM.md)
- [Pluto](Domain.Pluto.md)
- [PlutoError](Domain.PlutoError.md)
- [Pollux](Domain.Pollux.md)
- [PolluxError](Domain.PolluxError.md)
- [StorableKey](Domain.StorableKey.md)

### Enumerations

- [CredentialType](../enums/Domain.CredentialType.md)
- [Curve](../enums/Domain.Curve.md)
- [KeyProperties](../enums/Domain.KeyProperties.md)
- [KeyTypes](../enums/Domain.KeyTypes.md)
- [MessageDirection](../enums/Domain.MessageDirection.md)

### Classes

- [AlsoKnownAs](../classes/Domain.AlsoKnownAs.md)
- [AssertionMethod](../classes/Domain.AssertionMethod.md)
- [AttachmentDescriptor](../classes/Domain.AttachmentDescriptor.md)
- [Authentication](../classes/Domain.Authentication.md)
- [CapabilityDelegation](../classes/Domain.CapabilityDelegation.md)
- [CapabilityInvocation](../classes/Domain.CapabilityInvocation.md)
- [Controller](../classes/Domain.Controller.md)
- [Credential](../classes/Domain.Credential.md)
- [CredentialMetadata](../classes/Domain.CredentialMetadata.md)
- [DID](../classes/Domain.DID.md)
- [DIDDocument](../classes/Domain.DIDDocument.md)
- [DIDPair](../classes/Domain.DIDPair.md)
- [DIDResolver](../classes/Domain.DIDResolver.md)
- [DIDUrl](../classes/Domain.DIDUrl.md)
- [DerivableKey](../classes/Domain.DerivableKey.md)
- [HttpResponse](../classes/Domain.HttpResponse.md)
- [Key](../classes/Domain.Key.md)
- [KeyAgreement](../classes/Domain.KeyAgreement.md)
- [KeyPair](../classes/Domain.KeyPair.md)
- [LinkSecret](../classes/Domain.LinkSecret.md)
- [Message](../classes/Domain.Message-1.md)
- [PrismDID](../classes/Domain.PrismDID.md)
- [PrivateKey](../classes/Domain.PrivateKey.md)
- [PublicKey](../classes/Domain.PublicKey.md)
- [Service](../classes/Domain.Service.md)
- [ServiceEndpoint](../classes/Domain.ServiceEndpoint.md)
- [Services](../classes/Domain.Services.md)
- [SignableKey](../classes/Domain.SignableKey.md)
- [VerifiableKey](../classes/Domain.VerifiableKey.md)
- [VerificationMethod](../classes/Domain.VerificationMethod.md)
- [VerificationMethods](../classes/Domain.VerificationMethods.md)

### Interfaces

- [Api](../interfaces/Domain.Api.md)
- [Apollo](../interfaces/Domain.Apollo.md)
- [AttachmentBase64](../interfaces/Domain.AttachmentBase64.md)
- [AttachmentHeader](../interfaces/Domain.AttachmentHeader.md)
- [AttachmentJsonData](../interfaces/Domain.AttachmentJsonData.md)
- [AttachmentJws](../interfaces/Domain.AttachmentJws.md)
- [AttachmentJwsData](../interfaces/Domain.AttachmentJwsData.md)
- [AttachmentLinkData](../interfaces/Domain.AttachmentLinkData.md)
- [Castor](../interfaces/Domain.Castor.md)
- [CredentialIssueOptions](../interfaces/Domain.CredentialIssueOptions.md)
- [CredentialRequestOptions](../interfaces/Domain.CredentialRequestOptions.md)
- [CredentialSubject](../interfaces/Domain.CredentialSubject.md)
- [KeyCurve](../interfaces/Domain.KeyCurve.md)
- [KeyRestoration](../interfaces/Domain.KeyRestoration.md)
- [Mediator](../interfaces/Domain.Mediator.md)
- [Mercury](../interfaces/Domain.Mercury.md)
- [Pluto](../interfaces/Domain.Pluto-1.md)
- [Pollux](../interfaces/Domain.Pollux-1.md)
- [ProvableCredential](../interfaces/Domain.ProvableCredential.md)
- [PublicKeyJWK](../interfaces/Domain.PublicKeyJWK.md)
- [Seed](../interfaces/Domain.Seed.md)
- [SeedWords](../interfaces/Domain.SeedWords.md)
- [Signature](../interfaces/Domain.Signature.md)
- [StorableCredential](../interfaces/Domain.StorableCredential.md)
- [StorableKey](../interfaces/Domain.StorableKey-1.md)
- [VerifiableCredentialTypeContainer](../interfaces/Domain.VerifiableCredentialTypeContainer.md)

### Type Aliases

- [AttachmentData](Domain.md#attachmentdata)
- [DIDDocumentCoreProperty](Domain.md#diddocumentcoreproperty)
- [ExportableKey](Domain.md#exportablekey)
- [JWK](Domain.md#jwk)
- [JsonString](Domain.md#jsonstring)
- [MnemonicWordList](Domain.md#mnemonicwordlist)

### Functions

- [getKeyCurveByNameAndIndex](Domain.md#getkeycurvebynameandindex)

## Type Aliases

### AttachmentData

Ƭ **AttachmentData**: [`AttachmentJsonData`](../interfaces/Domain.AttachmentJsonData.md) \| [`AttachmentLinkData`](../interfaces/Domain.AttachmentLinkData.md) \| [`AttachmentBase64`](../interfaces/Domain.AttachmentBase64.md) \| [`AttachmentJwsData`](../interfaces/Domain.AttachmentJwsData.md) \| [`AttachmentJws`](../interfaces/Domain.AttachmentJws.md) \| [`AttachmentHeader`](../interfaces/Domain.AttachmentHeader.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/MessageAttachment.ts#L31)

___

### DIDDocumentCoreProperty

Ƭ **DIDDocumentCoreProperty**: [`Service`](../classes/Domain.Service.md) \| [`AlsoKnownAs`](../classes/Domain.AlsoKnownAs.md) \| [`Controller`](../classes/Domain.Controller.md) \| [`VerificationMethods`](../classes/Domain.VerificationMethods.md) \| [`Services`](../classes/Domain.Services.md) \| [`Authentication`](../classes/Domain.Authentication.md) \| [`AssertionMethod`](../classes/Domain.AssertionMethod.md) \| [`KeyAgreement`](../classes/Domain.KeyAgreement.md) \| [`CapabilityInvocation`](../classes/Domain.CapabilityInvocation.md) \| [`CapabilityDelegation`](../classes/Domain.CapabilityDelegation.md)

#### Defined in

[src/domain/models/DIDDocument.ts:99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/DIDDocument.ts#L99)

___

### ExportableKey

Ƭ **ExportableKey**: [`All`](Domain.ExportableKey.md#all)

ExportableKey defines the formats a crypographic key can be converted to
Default is all

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/keyManagement/exportable/ExportableKey.ts#L11)

[src/domain/models/keyManagement/exportable/ExportableKey.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/keyManagement/exportable/ExportableKey.ts#L23)

___

### JWK

Ƭ **JWK**: [`EC`](../interfaces/Domain.JWK.EC.md) \| [`OCT`](../interfaces/Domain.JWK.OCT.md) \| [`OKP`](../interfaces/Domain.JWK.OKP.md) \| [`RSA`](../interfaces/Domain.JWK.RSA.md)

JWK

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/keyManagement/exportable/JWK.ts#L7)

[src/domain/models/keyManagement/exportable/JWK.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/keyManagement/exportable/JWK.ts#L13)

___

### JsonString

Ƭ **JsonString**: `string`

#### Defined in

[src/domain/models/index.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/index.ts#L24)

___

### MnemonicWordList

Ƭ **MnemonicWordList**: [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`] \| [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]

#### Defined in

[src/domain/models/WordList.ts:1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/WordList.ts#L1)

## Functions

### getKeyCurveByNameAndIndex

▸ **getKeyCurveByNameAndIndex**(`name`, `index?`): `KeyCurve`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `index?` | `number` |

#### Returns

`KeyCurve`

#### Defined in

[src/domain/models/keyManagement/Key.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/keyManagement/Key.ts#L12)
