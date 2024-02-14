import { Schema } from "../../types";
import { CredentialSchemaType } from "./types";



export const CredentialSchema: Schema<CredentialSchemaType> = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 60
        },
        recoveryId: {
            type: 'string'
        },
        credentialData: {
            type: 'string'
        },
        issuer: {
            type: 'string'
        },
        subject: {
            type: 'string'
        },
        credentialCreated: {
            type: 'string'
        },
        credentialUpdated: {
            type: 'string'
        },
        credentialSchema: {
            type: 'string'
        },
        validUntil: {
            type: 'string'
        },
        revoked: {
            type: 'boolean'
        },
        availableClaims: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    },
    encrypted: ['credentialData'],
    required: ['id', 'recoveryId', 'credentialData']
}