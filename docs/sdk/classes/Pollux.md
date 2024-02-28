[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pollux

# Class: Pollux

Implementation of Pollux

**`Export`**

## Implements

- [`Pollux`](../interfaces/Domain.Pollux-1.md)

## Table of contents

### Constructors

- [constructor](Pollux.md#constructor)

### Properties

- [\_anoncreds](Pollux.md#_anoncreds)
- [api](Pollux.md#api)
- [castor](Pollux.md#castor)

### Accessors

- [anoncreds](Pollux.md#anoncreds)

### Methods

- [createPresentationProof](Pollux.md#createpresentationproof)
- [extractAttachment](Pollux.md#extractattachment)
- [extractCredentialFormatFromMessage](Pollux.md#extractcredentialformatfrommessage)
- [extractDomainChallenge](Pollux.md#extractdomainchallenge)
- [fetchCredentialDefinition](Pollux.md#fetchcredentialdefinition)
- [fetchSchema](Pollux.md#fetchschema)
- [isAnonCredsBody](Pollux.md#isanoncredsbody)
- [parseCredential](Pollux.md#parsecredential)
- [processAnonCredsCredential](Pollux.md#processanoncredscredential)
- [processJWTCredential](Pollux.md#processjwtcredential)
- [start](Pollux.md#start)

## Constructors

### constructor

• **new Pollux**(`castor`, `api?`): [`Pollux`](Pollux.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |

#### Returns

[`Pollux`](Pollux.md)

#### Defined in

[src/pollux/Pollux.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L34)

## Properties

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L32)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L36)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L35)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L44)

## Methods

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<[`Presentation`](../interfaces/Domain.Anoncreds.Presentation.md)\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |  |
| `credential` | [`AnonCredsCredential`](AnonCredsCredential.md) |  |
| `options` | [`Anoncreds`](../interfaces/Domain.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<[`Presentation`](../interfaces/Domain.Anoncreds.Presentation.md)\>

dependent on the CredentialType

**`Throws`**

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationProof](../interfaces/Domain.Pollux-1.md#createpresentationproof)

#### Defined in

[src/pollux/Pollux.ts:298](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L298)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`JWTCredential`](JWTCredential.md) |
| `options` | [`JWT`](../interfaces/Domain.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationProof](../interfaces/Domain.Pollux-1.md#createpresentationproof)

#### Defined in

[src/pollux/Pollux.ts:299](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L299)

___

### extractAttachment

▸ **extractAttachment**(`body`, `attachments`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`any`

#### Defined in

[src/pollux/Pollux.ts:144](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L144)

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

[`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[extractCredentialFormatFromMessage](../interfaces/Domain.Pollux-1.md#extractcredentialformatfrommessage)

#### Defined in

[src/pollux/Pollux.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L53)

___

### extractDomainChallenge

▸ **extractDomainChallenge**(`attachments`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `challenge?` | `string` |
| `domain?` | `string` |

#### Defined in

[src/pollux/Pollux.ts:285](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L285)

___

### fetchCredentialDefinition

▸ **fetchCredentialDefinition**(`credentialDefinitionId`): `Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

handle the retrieval of a Credential Definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialDefinitionId` | `string` |

#### Returns

`Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

#### Defined in

[src/pollux/Pollux.ts:112](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L112)

___

### fetchSchema

▸ **fetchSchema**(`schemaURI`): `Promise`\<`any`\>

handle the retrieval of a Schema definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaURI` | `string` | URI used to retrieve the Schema definition |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/pollux/Pollux.ts:132](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L132)

___

### isAnonCredsBody

▸ **isAnonCredsBody**(`body`): body is CredentialOffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

body is CredentialOffer

#### Defined in

[src/pollux/Pollux.ts:157](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L157)

___

### parseCredential

▸ **parseCredential**(`credentialBuffer`, `options?`): `Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.credentialMetadata?` | [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md) |
| `options.linkSecret?` | `string` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[parseCredential](../interfaces/Domain.Pollux-1.md#parsecredential)

#### Defined in

[src/pollux/Pollux.ts:225](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L225)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[processAnonCredsCredential](../interfaces/Domain.Pollux-1.md#processanoncredscredential)

#### Defined in

[src/pollux/Pollux.ts:195](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L195)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[processJWTCredential](../interfaces/Domain.Pollux-1.md#processjwtcredential)

#### Defined in

[src/pollux/Pollux.ts:74](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L74)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pollux/Pollux.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/Pollux.ts#L39)
