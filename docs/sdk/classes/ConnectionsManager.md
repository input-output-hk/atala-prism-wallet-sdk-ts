[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / ConnectionsManager

# Class: ConnectionsManager

ConnectionsManager is responsible of establishing didcomm connection and
mediation process with other mediators through didcomm and is also
responsible of managing the task to periodically fetch messages from the mediator once connection is established

## Implements

- [`ConnectionsManagerInterface`](../interfaces/ConnectionsManagerInterface.md)

## Table of contents

### Constructors

- [constructor](ConnectionsManager.md#constructor)

### Properties

- [cancellable](ConnectionsManager.md#cancellable)
- [cancellables](ConnectionsManager.md#cancellables)
- [castor](ConnectionsManager.md#castor)
- [events](ConnectionsManager.md#events)
- [mediationHandler](ConnectionsManager.md#mediationhandler)
- [mercury](ConnectionsManager.md#mercury)
- [pairings](ConnectionsManager.md#pairings)
- [pluto](ConnectionsManager.md#pluto)

### Methods

- [addConnection](ConnectionsManager.md#addconnection)
- [awaitMessageResponse](ConnectionsManager.md#awaitmessageresponse)
- [awaitMessages](ConnectionsManager.md#awaitmessages)
- [findIndex](ConnectionsManager.md#findindex)
- [registerMediator](ConnectionsManager.md#registermediator)
- [removeConnection](ConnectionsManager.md#removeconnection)
- [sendMessage](ConnectionsManager.md#sendmessage)
- [startFetchingMessages](ConnectionsManager.md#startfetchingmessages)
- [startMediator](ConnectionsManager.md#startmediator)
- [stopAllEvents](ConnectionsManager.md#stopallevents)
- [stopFetchingMessages](ConnectionsManager.md#stopfetchingmessages)

## Constructors

### constructor

• **new ConnectionsManager**(`castor`, `mercury`, `pluto`, `mediationHandler`, `pairings?`): [`ConnectionsManager`](ConnectionsManager.md)

Creates an instance of ConnectionsManager.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) | `undefined` |
| `mercury` | [`Mercury`](../interfaces/Domain.Mercury.md) | `undefined` |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) | `undefined` |
| `mediationHandler` | [`MediatorHandler`](MediatorHandler.md) | `undefined` |
| `pairings?` | [`DIDPair`](Domain.DIDPair.md)[] | `[]` |

#### Returns

[`ConnectionsManager`](ConnectionsManager.md)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L72)

## Properties

### cancellable

• `Optional` **cancellable**: `CancellableTask`\<`void`\>

Cancellable task used to listen for new messages, stopping the Agent should also stop this
 from running and destroy the instance of the task until agent is started again

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:51](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L51)

___

### cancellables

• **cancellables**: `CancellableTask`\<`any`\>[] = `[]`

An array with cancellable tasks, mainly used to store one or multiple didcomm
connections in storage implementation at the same time. All of them can be cancelled
despite they run asyncronously when the Edge agent stops

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[cancellables](../interfaces/ConnectionsManagerInterface.md#cancellables)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:43](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L43)

___

### castor

• **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[castor](../interfaces/ConnectionsManagerInterface.md#castor)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L73)

___

### events

• **events**: [`AgentMessageEvents`](../interfaces/AgentMessageEvents.md)

A list of public facing events which will notify the user interface when specific things happen,
for now when new messages arrive or didcomm connections are established in order to make UI more reactive

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L60)

___

### mediationHandler

• **mediationHandler**: [`MediatorHandler`](MediatorHandler.md)

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[mediationHandler](../interfaces/ConnectionsManagerInterface.md#mediationhandler)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L76)

___

### mercury

• **mercury**: [`Mercury`](../interfaces/Domain.Mercury.md)

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[mercury](../interfaces/ConnectionsManagerInterface.md#mercury)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:74](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L74)

___

### pairings

• **pairings**: [`DIDPair`](Domain.DIDPair.md)[] = `[]`

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[pairings](../interfaces/ConnectionsManagerInterface.md#pairings)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:77](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L77)

___

### pluto

• **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[pluto](../interfaces/ConnectionsManagerInterface.md#pluto)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L75)

## Methods

### addConnection

▸ **addConnection**(`paired`): `Promise`\<`void`\>

Asyncronously add a didPair (didcomm connection) into pluto

#### Parameters

| Name | Type |
| :------ | :------ |
| `paired` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[addConnection](../interfaces/ConnectionsManagerInterface.md#addconnection)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:164](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L164)

___

### awaitMessageResponse

▸ **awaitMessageResponse**(`id`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asyncronously wait for a message response just by waiting for new messages that match the specified ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[awaitMessageResponse](../interfaces/ConnectionsManagerInterface.md#awaitmessageresponse)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:152](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L152)

___

### awaitMessages

▸ **awaitMessages**(): `Promise`\<[`Message`](Domain.Message-1.md)[]\>

Asyncronously fetch unread messages from the mediator, if messages are found they will be stored
and the mediator will be notified that they have been read. Mediator shouldn't return a read message again
in next iteration.

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)[]\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[awaitMessages](../interfaces/ConnectionsManagerInterface.md#awaitmessages)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:118](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L118)

___

### findIndex

▸ **findIndex**(`pair`): `number`

Find the specified did pair connection index

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`number`

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:189](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L189)

___

### registerMediator

▸ **registerMediator**(`hostDID`): `Promise`\<`void`\>

Asyncronously establish mediator with a mediator by providing the Host DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostDID` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[registerMediator](../interfaces/ConnectionsManagerInterface.md#registermediator)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:220](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L220)

___

### removeConnection

▸ **removeConnection**(`pair`): `Promise`\<`void`\>

Remove a didPair or a didcomm connection, this does not mean the mediator will do
this but just means the connection will be removed from the current storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[removeConnection](../interfaces/ConnectionsManagerInterface.md#removeconnection)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:206](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L206)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asyncronously store a message and send it as didcomm message through the mercury implementation

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[sendMessage](../interfaces/ConnectionsManagerInterface.md#sendmessage)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:231](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L231)

___

### startFetchingMessages

▸ **startFetchingMessages**(`iterationPeriod`): `Promise`\<`void`\>

Asyncronously start fetching new messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterationPeriod` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:241](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L241)

___

### startMediator

▸ **startMediator**(): `Promise`\<`void`\>

Asyncronously Start the mediator, just checking if we had one stored in Database and
setting that one as default during the Agent start

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[startMediator](../interfaces/ConnectionsManagerInterface.md#startmediator)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L89)

___

### stopAllEvents

▸ **stopAllEvents**(): `void`

Stops all the running events

#### Returns

`void`

#### Implementation of

[ConnectionsManagerInterface](../interfaces/ConnectionsManagerInterface.md).[stopAllEvents](../interfaces/ConnectionsManagerInterface.md#stopallevents)

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:101](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L101)

___

### stopFetchingMessages

▸ **stopFetchingMessages**(): `void`

Asyncronously stop fetching messages

#### Returns

`void`

#### Defined in

[src/prism-agent/connectionsManager/ConnectionsManager.ts:285](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/prism-agent/connectionsManager/ConnectionsManager.ts#L285)
