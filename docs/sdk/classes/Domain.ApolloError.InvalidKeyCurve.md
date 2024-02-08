[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / InvalidKeyCurve

# Class: InvalidKeyCurve

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).InvalidKeyCurve

## Hierarchy

- `Error`

  ↳ **`InvalidKeyCurve`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.InvalidKeyCurve.md#constructor)

### Properties

- [cause](Domain.ApolloError.InvalidKeyCurve.md#cause)
- [message](Domain.ApolloError.InvalidKeyCurve.md#message)
- [name](Domain.ApolloError.InvalidKeyCurve.md#name)
- [stack](Domain.ApolloError.InvalidKeyCurve.md#stack)
- [prepareStackTrace](Domain.ApolloError.InvalidKeyCurve.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.InvalidKeyCurve.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.InvalidKeyCurve.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidKeyCurve**(`invalidKeyCurve`, `validKeyCurves`): [`InvalidKeyCurve`](Domain.ApolloError.InvalidKeyCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `invalidKeyCurve` | `string` |
| `validKeyCurves` | `string`[] |

#### Returns

[`InvalidKeyCurve`](Domain.ApolloError.InvalidKeyCurve.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Apollo.ts:20](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/domain/models/errors/Apollo.ts#L20)

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
