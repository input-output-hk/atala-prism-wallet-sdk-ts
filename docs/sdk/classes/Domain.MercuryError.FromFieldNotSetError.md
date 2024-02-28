[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [MercuryError](../modules/Domain.MercuryError.md) / FromFieldNotSetError

# Class: FromFieldNotSetError

[Domain](../modules/Domain.md).[MercuryError](../modules/Domain.MercuryError.md).FromFieldNotSetError

## Hierarchy

- `Error`

  ↳ **`FromFieldNotSetError`**

## Table of contents

### Constructors

- [constructor](Domain.MercuryError.FromFieldNotSetError.md#constructor)

### Properties

- [cause](Domain.MercuryError.FromFieldNotSetError.md#cause)
- [message](Domain.MercuryError.FromFieldNotSetError.md#message)
- [name](Domain.MercuryError.FromFieldNotSetError.md#name)
- [stack](Domain.MercuryError.FromFieldNotSetError.md#stack)
- [prepareStackTrace](Domain.MercuryError.FromFieldNotSetError.md#preparestacktrace)
- [stackTraceLimit](Domain.MercuryError.FromFieldNotSetError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.MercuryError.FromFieldNotSetError.md#capturestacktrace)

## Constructors

### constructor

• **new FromFieldNotSetError**(`message?`): [`FromFieldNotSetError`](Domain.MercuryError.FromFieldNotSetError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`FromFieldNotSetError`](Domain.MercuryError.FromFieldNotSetError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Mercury.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/errors/Mercury.ts#L34)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:29

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:20
