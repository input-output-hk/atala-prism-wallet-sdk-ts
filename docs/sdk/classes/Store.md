[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Store

# Class: Store

## Implements

- [`Store`](../interfaces/Pluto.Store.md)

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [\_db](Store.md#_db)
- [collections](Store.md#collections)
- [options](Store.md#options)

### Accessors

- [db](Store.md#db)

### Methods

- [clear](Store.md#clear)
- [delete](Store.md#delete)
- [getCollection](Store.md#getcollection)
- [insert](Store.md#insert)
- [query](Store.md#query)
- [start](Store.md#start)
- [update](Store.md#update)

## Constructors

### constructor

• **new Store**(`options`, `collections?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RxDatabaseCreator`\<`any`, `any`\> |
| `collections?` | `CollectionList` |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/pluto/rxdb/Store.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L13)

## Properties

### \_db

• `Private` `Optional` **\_db**: `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L11)

___

### collections

• `Private` `Optional` `Readonly` **collections**: `CollectionList`

#### Defined in

[src/pluto/rxdb/Store.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L15)

___

### options

• `Private` `Readonly` **options**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L14)

## Accessors

### db

• `get` **db**(): `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Returns

`RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L23)

## Methods

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/rxdb/Store.ts:87](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L87)

___

### delete

▸ **delete**(`name`, `uuid`): `Promise`\<`void`\>

Deleting a  row in the Store

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[delete](../interfaces/Pluto.Store.md#delete)

#### Defined in

[src/pluto/rxdb/Store.ts:49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L49)

___

### getCollection

▸ **getCollection**(`name`): `RxCollection`\<`any`, {}, {}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`RxCollection`\<`any`, {}, {}, {}\>

#### Defined in

[src/pluto/rxdb/Store.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L61)

___

### insert

▸ **insert**(`name`, `data`): `Promise`\<`void`\>

Persist new data in the Store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | table name |
| `data` | `any` | object to save |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[insert](../interfaces/Pluto.Store.md#insert)

#### Defined in

[src/pluto/rxdb/Store.ts:78](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L78)

___

### query

▸ **query**\<`T`\>(`name`, `query?`): `Promise`\<`any`\>

Run a query to fetch data from the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](../interfaces/Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Model name |
| `query?` | `MangoQuery`\<`T`\> | a MangoQuery object, a set of values and operators defining the query properties within an object will be AND'ed different objects will be OR'd |

#### Returns

`Promise`\<`any`\>

relevant Models

**`Example`**

search for a model in TableOne with uuid and name
```ts
  store.query("TableOne", { selector: { uuid: "1", name: "eg" }})
```

**`Example`**

search for models in TableOne with uuid of 1 or 2
```ts
  store.query("TableOne", { selector: { $or: [{ uuid: "1" }, { uuid: "2" }] }})
```

**`Example`**

search for all models in TableOne
```ts
  store.query("TableOne")
```

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[query](../interfaces/Pluto.Store.md#query)

#### Defined in

[src/pluto/rxdb/Store.ts:70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L70)

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[start](../interfaces/Pluto.Store.md#start)

#### Defined in

[src/pluto/rxdb/Store.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L34)

___

### update

▸ **update**\<`T`\>(`name`, `model`): `Promise`\<`void`\>

Updating a new row in the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](../interfaces/Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `model` | `T` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[update](../interfaces/Pluto.Store.md#update)

#### Defined in

[src/pluto/rxdb/Store.ts:45](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/eb6a5ab/src/pluto/rxdb/Store.ts#L45)
