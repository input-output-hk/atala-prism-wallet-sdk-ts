
import { DID } from '../../../domain'
import { MediatorMethodTypes, MediatorSchemaType } from './types'
import { RxDocument } from 'rxdb'

export const MediatorMethods: MediatorMethodTypes = {
    toDomainMediator: function toDomainMediator(this: RxDocument<MediatorSchemaType, MediatorMethodTypes>) {
        const mediator = this.toJSON()
        return {
            hostDID: DID.fromString(mediator.hostDID),
            routingDID: DID.fromString(mediator.routingDID),
            mediatorDID: DID.fromString(mediator.mediatorDID)
        }
    }
}