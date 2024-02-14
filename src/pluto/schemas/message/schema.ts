import { Schema } from "../../types";
import { MessageSchemaType } from "./types";

export const MessageSchema: Schema<MessageSchemaType> = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 60
        },
        body: {
            type: 'string'
        },
        piuri: {
            type: 'string'
        },
        attachments: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'id',
                        maxLength: 60
                    },
                    description: {
                        type: 'string'
                    },
                    byteCount: {
                        type: 'number'
                    },
                    lastModTime: {
                        type: 'string'
                    },
                    format: {
                        type: 'string'
                    },
                    filename: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    mediaType: {
                        type: 'string'
                    },
                    data: {
                        type: 'object'
                    }
                }
            }
        },
        extraHeaders: {
            type: 'array'
        },
        createdTime: {
            type: 'string'
        },
        expiresTimePlus: {
            type: 'string'
        },
        ack: {
            type: 'array'
        },
        direction: {
            type: 'number'
        },
        from: {
            type: 'string'
        },
        to: {
            type: 'string'
        },
        thid: {
            type: 'string'
        },
        fromPrior: {
            type: 'string'
        },
        pthid: {
            type: 'string'
        }
    },
    encrypted: ['thid', 'attachments', 'body'],
    required: ['id']
}