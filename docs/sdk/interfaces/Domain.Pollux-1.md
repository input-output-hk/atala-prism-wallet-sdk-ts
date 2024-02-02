[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pollux

# Interface: Pollux

[Domain](../modules/Domain.md).Pollux

Pollux
handle Credential related tasks

## Implemented by

- [`Pollux`](../classes/Pollux.md)

## Table of contents

### Properties

- [parseCredential](Domain.Pollux-1.md#parsecredential)

### Methods

- [createPresentationProof](Domain.Pollux-1.md#createpresentationproof)
- [extractCredentialFormatFromMessage](Domain.Pollux-1.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](Domain.Pollux-1.md#processanoncredscredential)
- [processJWTCredential](Domain.Pollux-1.md#processjwtcredential)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/Domain.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L18)

## Methods

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<[`Presentation`](Domain.Anoncreds.Presentation.md)\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |  |
| `credential` | [`AnonCredsCredential`](../classes/AnonCredsCredential.md) |  |
| `options` | [`Anoncreds`](Domain.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<[`Presentation`](Domain.Anoncreds.Presentation.md)\>

dependent on the CredentialType

**`Throws`**

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L42)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`JWTCredential`](../classes/JWTCredential.md) |
| `options` | [`JWT`](Domain.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:43](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L43)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `options?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L44)

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/Domain.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

[`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L30)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L26)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/6927a34/src/domain/buildingBlocks/Pollux.ts#L22)
