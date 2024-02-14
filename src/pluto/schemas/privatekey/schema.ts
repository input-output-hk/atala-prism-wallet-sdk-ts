import { Schema } from "../../types";
import { KeySchemaType } from "./types";



export const PrivateKeySchema: Schema<KeySchemaType> = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 60
        },
        did: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        keySpecification: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    type: {
                        type: 'string'
                    },
                    value: {
                        type: 'string'
                    }
                }
            }
        }
    },
    encrypted: ['keySpecification', 'type'],
    required: ['keySpecification', 'did', 'type', 'id']
}