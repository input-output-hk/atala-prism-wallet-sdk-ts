import { Schema } from "../../types";
import { CredentialRequestMetadataSchemaType } from "./types";

export const CredentialRequestMetadataSchema: Schema<CredentialRequestMetadataSchemaType> =
{
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 60
        },
        link_secret_blinding_data: {
            type: 'object',
            properties: {
                v_prime: {
                    type: 'string'
                }
            }
        },
        link_secret_name: {
            type: 'string'
        },
        nonce: {
            type: 'string'
        }
    },
    encrypted: ['link_secret_blinding_data', 'nonce'],
    required: ['id', 'link_secret_blinding_data', 'link_secret_name', 'nonce']
}