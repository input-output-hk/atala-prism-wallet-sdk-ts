import { Schema } from "../../types";
import { LinkSecretSchemaType } from "./types";

export const LinkSecretSchema: Schema<LinkSecretSchemaType> = {
    version: 0,
    primaryKey: 'name',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            maxLength: 60
        },
        secret: {
            type: 'string'
        }
    },
    encrypted: ['secret'],
    required: ['name', 'secret']
}
