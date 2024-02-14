import { Schema } from "../../types";
import { MediatorSchemaType } from "./types";




export const MediatorSchema: Schema<MediatorSchemaType> = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 60
        },
        mediatorDID: {
            type: 'string'
        },
        hostDID: {
            type: 'string'
        },
        routingDID: {
            type: 'string'
        }
    },
    encrypted: [],
    required: ['id', 'mediatorDID']
}


