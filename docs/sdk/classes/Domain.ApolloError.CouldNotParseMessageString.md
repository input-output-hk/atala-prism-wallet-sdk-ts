[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / CouldNotParseMessageString

# Class: CouldNotParseMessageString

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).CouldNotParseMessageString

## Hierarchy

- `Error`

  ↳ **`CouldNotParseMessageString`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.CouldNotParseMessageString.md#constructor)

### Properties

- [cause](Domain.ApolloError.CouldNotParseMessageString.md#cause)
- [message](Domain.ApolloError.CouldNotParseMessageString.md#message)
- [name](Domain.ApolloError.CouldNotParseMessageString.md#name)
- [stack](Domain.ApolloError.CouldNotParseMessageString.md#stack)
- [prepareStackTrace](Domain.ApolloError.CouldNotParseMessageString.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.CouldNotParseMessageString.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.CouldNotParseMessageString.md#capturestacktrace)

## Constructors

### constructor

• **new CouldNotParseMessageString**(`message?`): [`CouldNotParseMessageString`](Domain.ApolloError.CouldNotParseMessageString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`CouldNotParseMessageString`](Domain.ApolloError.CouldNotParseMessageString.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Apollo.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/domain/models/errors/Apollo.ts#L10)

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
