import { Schema } from "../../types";
import { DIDPairSchemaType } from "./types";



export const DIDPairSchema: Schema<DIDPairSchemaType> = {
    version: 0,
    primaryKey: 'name',
    type: 'object',
    properties: {
        hostDID: {
            type: 'string'
        },
        name: {
            type: 'string',
            maxLength: 60
        },
        receiverDID: {
            type: 'string'
        }
    },
    encrypted: [],
    required: ['name', 'hostDID', 'receiverDID']
}