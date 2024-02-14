
import { Message } from '../../../domain'
import { MessageDocument, MessageMethodTypes } from './types'


export const MessageMethods: MessageMethodTypes = {
    toDomainMessage: function toDomainMessage(this: MessageDocument) {
        return Message.fromJson(JSON.stringify(this))
    }
}