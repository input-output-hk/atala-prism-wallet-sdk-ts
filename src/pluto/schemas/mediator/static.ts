import { v4 as uuidv4 } from 'uuid'

import { MediatorStaticMethodTypes } from "./types"
import { DID, Mediator } from '../../../domain'

export const MediatorStaticMethods: MediatorStaticMethodTypes = {
    async storeMediator(
        mediator: DID,
        host: DID,
        routing: DID
    ): Promise<void> {
        await this.db.collections.mediators.insert({
            id: uuidv4(),
            mediatorDID: mediator.toString(),
            hostDID: host.toString(),
            routingDID: routing.toString()
        })
    }
    ,
    async getAllMediators(): Promise<Mediator[]> {
        const mediators = await this.db.collections.mediators.find().exec()
        return mediators.map((mediator) => mediator.toDomainMediator())
    }
}