[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AnonCredsCredential

# Class: AnonCredsCredential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`AnonCredsCredential`**

## Implements

- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)

## Table of contents

### Constructors

- [constructor](AnonCredsCredential.md#constructor)

### Properties

- [credentialType](AnonCredsCredential.md#credentialtype)
- [properties](AnonCredsCredential.md#properties)
- [recoveryId](AnonCredsCredential.md#recoveryid)
- [uuid](AnonCredsCredential.md#uuid)

### Accessors

- [claims](AnonCredsCredential.md#claims)
- [credentialDefinitionId](AnonCredsCredential.md#credentialdefinitionid)
- [id](AnonCredsCredential.md#id)
- [issuer](AnonCredsCredential.md#issuer)
- [schemaId](AnonCredsCredential.md#schemaid)
- [subject](AnonCredsCredential.md#subject)

### Methods

- [getProperty](AnonCredsCredential.md#getproperty)
- [isProvable](AnonCredsCredential.md#isprovable)
- [isStorable](AnonCredsCredential.md#isstorable)
- [toJSON](AnonCredsCredential.md#tojson)
- [toStorable](AnonCredsCredential.md#tostorable)

## Constructors

### constructor

• **new AnonCredsCredential**(`credential`): [`AnonCredsCredential`](AnonCredsCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../interfaces/Domain.Anoncreds.Credential.md) |

#### Returns

[`AnonCredsCredential`](AnonCredsCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L27)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.AnonCreds`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L23)

___

### properties

• **properties**: `Map`\<[`AnonCredsCredentialProperties`](../enums/AnonCredsCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L25)

___

### recoveryId

• **recoveryId**: `string` = `AnonCredsRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L24)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Inherited from

[Credential](Domain.Credential.md).[uuid](Domain.Credential.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L16)

## Accessors

### claims

• `get` **claims**(): {}[]

#### Returns

{}[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L49)

___

### credentialDefinitionId

• `get` **credentialDefinitionId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L56)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:45](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L45)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L60)

___

### schemaId

• `get` **schemaId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:64](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L64)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L68)

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

[src/domain/models/Credential.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L18)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L22)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L26)

___

### toJSON

▸ **toJSON**(): [`Credential`](../interfaces/Domain.Anoncreds.Credential.md)

#### Returns

[`Credential`](../interfaces/Domain.Anoncreds.Credential.md)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:86](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L86)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `credentialData` | `string` |
| `id` | `any` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pollux/models/AnonCredsVerifiableCredential.ts#L72)
