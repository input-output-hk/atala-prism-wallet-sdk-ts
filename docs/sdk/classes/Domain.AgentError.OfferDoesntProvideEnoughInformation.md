[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / OfferDoesntProvideEnoughInformation

# Class: OfferDoesntProvideEnoughInformation

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).OfferDoesntProvideEnoughInformation

## Hierarchy

- `Error`

  ↳ **`OfferDoesntProvideEnoughInformation`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#constructor)

### Properties

- [cause](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#cause)
- [message](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#message)
- [name](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#name)
- [stack](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#stack)
- [prepareStackTrace](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.OfferDoesntProvideEnoughInformation.md#capturestacktrace)

## Constructors

### constructor

• **new OfferDoesntProvideEnoughInformation**(): [`OfferDoesntProvideEnoughInformation`](Domain.AgentError.OfferDoesntProvideEnoughInformation.md)

#### Returns

[`OfferDoesntProvideEnoughInformation`](Domain.AgentError.OfferDoesntProvideEnoughInformation.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/686318e/src/domain/models/errors/Agent.ts#L25)

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
