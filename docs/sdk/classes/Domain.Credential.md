[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Credential

# Class: Credential

[Domain](../modules/Domain.md).Credential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- **`Credential`**

  ↳ [`AnonCredsCredential`](AnonCredsCredential.md)

  ↳ [`JWTCredential`](JWTCredential.md)

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.Credential.md#constructor)

### Properties

- [claims](Domain.Credential.md#claims)
- [id](Domain.Credential.md#id)
- [issuer](Domain.Credential.md#issuer)
- [properties](Domain.Credential.md#properties)
- [recoveryId](Domain.Credential.md#recoveryid)
- [subject](Domain.Credential.md#subject)
- [uuid](Domain.Credential.md#uuid)

### Methods

- [getProperty](Domain.Credential.md#getproperty)
- [isProvable](Domain.Credential.md#isprovable)
- [isStorable](Domain.Credential.md#isstorable)

## Constructors

### constructor

• **new Credential**(): [`Credential`](Domain.Credential.md)

#### Returns

[`Credential`](Domain.Credential.md)

## Properties

### claims

• `Abstract` **claims**: `Claim`[]

#### Defined in

[src/domain/models/Credential.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L13)

___

### id

• `Abstract` **id**: `string`

#### Defined in

[src/domain/models/Credential.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L10)

___

### issuer

• `Abstract` **issuer**: `string`

#### Defined in

[src/domain/models/Credential.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L11)

___

### properties

• `Abstract` **properties**: `Map`\<`string`, `any`\>

#### Defined in

[src/domain/models/Credential.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L14)

___

### recoveryId

• `Abstract` **recoveryId**: `string`

#### Defined in

[src/domain/models/Credential.ts:9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L9)

___

### subject

• `Abstract` **subject**: `string`

#### Defined in

[src/domain/models/Credential.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L12)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L16)

## Methods

### getProperty

▸ **getProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[src/domain/models/Credential.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L18)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Defined in

[src/domain/models/Credential.ts:22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L22)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Defined in

[src/domain/models/Credential.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/Credential.ts#L26)
