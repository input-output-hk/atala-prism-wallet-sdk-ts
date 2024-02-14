import { KeyFunctionMap, RxCollection, RxDocument } from "rxdb"
import { PlutoDBontext } from ".."
import { Mediator, DID } from "../../../domain"

export interface MediatorSchemaType {
    id: string
    mediatorDID: string
    hostDID: string
    routingDID: string
}



export type MediatorDocument = RxDocument<MediatorSchemaType>
export interface MediatorMethodTypes extends KeyFunctionMap {
    toDomainMediator: (this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) => Mediator
}

export interface MediatorStaticMethodTypes extends KeyFunctionMap {
    getAllMediators(this: PlutoDBontext): Promise<Mediator[]>
    storeMediator(
        this: PlutoDBontext,
        mediator: DID,
        host: DID,
        routing: DID
    ): Promise<void>
}
export type MediatorCollection = RxCollection<
    MediatorSchemaType,
    MediatorMethodTypes,
    MediatorStaticMethodTypes
>