import { RxDocument, KeyFunctionMap, RxCollection } from 'rxdb'
import { PlutoDBontext } from '..'
import { AttachmentDescriptor, MessageDirection, DID, Message } from '../../../domain'


export interface MessageSchemaType {
    readonly body: string
    readonly id: string
    readonly piuri: string
    readonly from?: string | undefined
    readonly to?: string | undefined
    readonly attachments: AttachmentDescriptor[]
    readonly thid?: string
    readonly extraHeaders: string[]
    readonly createdTime: string
    readonly expiresTimePlus: string
    readonly ack: string[]
    readonly direction: MessageDirection
    readonly fromPrior?: string | undefined
    readonly pthid?: string | undefined
}

export type MessageDocument = RxDocument<MessageSchemaType, MessageMethodTypes>

export interface MessageMethodTypes extends KeyFunctionMap {
    toDomainMessage: (
        this: MessageDocument
    ) => Message
}

export interface MessageStaticMethodTypes extends KeyFunctionMap {
    getMessage(
        this: PlutoDBontext,
        id: string
    ): Promise<Message | null>
    storeMessage(
        this: PlutoDBontext,
        message: Message
    ): Promise<void>
    storeMessages(
        this: PlutoDBontext,
        messages: Message[]
    ): Promise<void>
    getAllMessages(
        this: PlutoDBontext,
    ): Promise<Message[]>
    getAllMessagesByFromToDID(
        this: PlutoDBontext,
        from: DID,
        to: DID
    ): Promise<Message[]>
    getAllMessagesOfType(
        this: PlutoDBontext,
        type: string,
        relatedWithDID?: DID | undefined
    ): Promise<Message[]>
    getAllMessagesReceivedFrom(
        this: PlutoDBontext,
        did: DID
    ): Promise<Message[]>
    getAllMessagesSentTo(
        this: PlutoDBontext,
        did: DID
    ): Promise<Message[]>
    getAllMessagesReceived(
        this: PlutoDBontext,
    ): Promise<Message[]>
    getAllMessagesSent(
        this: PlutoDBontext,
    ): Promise<Message[]>
    getAllMessagesByDID(
        this: PlutoDBontext,
        did: DID
    ): Promise<Message[]>
}

export type MessageColletion = RxCollection<
    MessageSchemaType,
    MessageMethodTypes,
    MessageStaticMethodTypes
>