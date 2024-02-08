[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / JWTCredential

# Class: JWTCredential

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`JWTCredential`**

## Implements

- [`ProvableCredential`](../interfaces/Domain.ProvableCredential.md)
- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)

## Table of contents

### Constructors

- [constructor](JWTCredential.md#constructor)

### Properties

- [aud](JWTCredential.md#aud)
- [credentialType](JWTCredential.md#credentialtype)
- [exp](JWTCredential.md#exp)
- [iss](JWTCredential.md#iss)
- [jti](JWTCredential.md#jti)
- [nbf](JWTCredential.md#nbf)
- [originalJWTString](JWTCredential.md#originaljwtstring)
- [properties](JWTCredential.md#properties)
- [recoveryId](JWTCredential.md#recoveryid)
- [sub](JWTCredential.md#sub)
- [verifiableCredential](JWTCredential.md#verifiablecredential)

### Accessors

- [claims](JWTCredential.md#claims)
- [context](JWTCredential.md#context)
- [credentialSchema](JWTCredential.md#credentialschema)
- [credentialStatus](JWTCredential.md#credentialstatus)
- [credentialSubject](JWTCredential.md#credentialsubject)
- [evidence](JWTCredential.md#evidence)
- [expirationDate](JWTCredential.md#expirationdate)
- [id](JWTCredential.md#id)
- [issuanceDate](JWTCredential.md#issuancedate)
- [issuer](JWTCredential.md#issuer)
- [refreshService](JWTCredential.md#refreshservice)
- [subject](JWTCredential.md#subject)
- [termsOfUse](JWTCredential.md#termsofuse)
- [type](JWTCredential.md#type)
- [vc](JWTCredential.md#vc)

### Methods

- [getProperty](JWTCredential.md#getproperty)
- [isProvable](JWTCredential.md#isprovable)
- [isStorable](JWTCredential.md#isstorable)
- [presentation](JWTCredential.md#presentation)
- [toStorable](JWTCredential.md#tostorable)
- [fromJWT](JWTCredential.md#fromjwt)

## Constructors

### constructor

• **new JWTCredential**(`iss`, `verifiableCredential`, `jti`, `nbf`, `sub`, `exp?`, `aud?`, `originalJWTString?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `iss` | `string` | `undefined` |
| `verifiableCredential` | `Record`\<`string`, `any`\> | `undefined` |
| `jti` | `string` | `undefined` |
| `nbf` | `number` | `undefined` |
| `sub` | `string` | `undefined` |
| `exp?` | `number` | `undefined` |
| `aud` | `string`[] | `[]` |
| `originalJWTString?` | `string` | `undefined` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L32)

## Properties

### aud

• `Readonly` **aud**: `string`[] = `[]`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L39)

___

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L24)

___

### exp

• `Optional` `Readonly` **exp**: `number`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L38)

___

### iss

• `Readonly` **iss**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L33)

___

### jti

• `Readonly` **jti**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L35)

___

### nbf

• `Readonly` **nbf**: `number`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L36)

___

### originalJWTString

• `Optional` `Readonly` **originalJWTString**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L40)

___

### properties

• **properties**: `Map`\<[`JWTVerifiableCredentialProperties`](../enums/JWTVerifiableCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L26)

___

### recoveryId

• **recoveryId**: `string` = `JWTVerifiableCredentialRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L25)

___

### sub

• `Readonly` **sub**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L37)

___

### verifiableCredential

• `Readonly` **verifiableCredential**: `Record`\<`string`, `any`\>

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L34)

## Accessors

### claims

• `get` **claims**(): `any`[]

#### Returns

`any`[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:80](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L80)

___

### context

• `get` **context**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L84)

___

### credentialSchema

• `get` **credentialSchema**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:88](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L88)

___

### credentialStatus

• `get` **credentialStatus**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L92)

___

### credentialSubject

• `get` **credentialSubject**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:96](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L96)

___

### evidence

• `get` **evidence**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:100](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L100)

___

### expirationDate

• `get` **expirationDate**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:104](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L104)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L72)

___

### issuanceDate

• `get` **issuanceDate**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:108](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L108)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:112](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L112)

___

### refreshService

• `get` **refreshService**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L116)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:120](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L120)

___

### termsOfUse

• `get` **termsOfUse**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:124](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L124)

___

### type

• `get` **type**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:128](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L128)

___

### vc

• `get` **vc**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L76)

## Methods

### getProperty

▸ **getProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[Credential](Domain.Credential.md).[getProperty](Domain.Credential.md#getproperty)

#### Defined in

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/domain/models/Credential.ts#L19)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/domain/models/Credential.ts#L23)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/domain/models/Credential.ts#L27)

___

### presentation

▸ **presentation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `@context` | `string`[] |
| `type` | `string`[] |
| `verifiableCredential` | `string`[] |

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[presentation](../interfaces/Domain.ProvableCredential.md#presentation)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:132](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L132)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims` | `any`[] |
| `credentialData` | `string` |
| `id` | `any` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:141](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L141)

___

### fromJWT

▸ **fromJWT**(`jwtObj`, `jwtString`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtObj` | `any` |
| `jwtString` | `string` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:59](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/pollux/models/JWTVerifiableCredential.ts#L59)
