
import { DID, MessageDirection, Message } from '../../../domain'
import { MessageSchemaType, MessageStaticMethodTypes } from './types'
import { MangoQuerySelector } from 'rxdb'


export const MessageStaticMethods: MessageStaticMethodTypes = {
    async getAllMessagesByDID(did: DID): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $or: [
                    {
                        to: did.toString()
                    },
                    {
                        from: did.toString()
                    }
                ]
            }
        }).exec()

        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesSent(): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $or: [
                    {
                        direction: MessageDirection.SENT
                    }
                ]
            }
        }).exec()

        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesReceived(): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $or: [
                    {
                        direction: MessageDirection.RECEIVED
                    }
                ]
            }
        }).exec()

        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesSentTo(did: DID): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $and: [
                    {
                        to: did.toString()
                    },
                    {
                        direction: MessageDirection.SENT
                    }
                ]
            }
        }).exec()
        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesReceivedFrom(did: DID): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $and: [
                    {
                        from: did.toString()
                    },
                    {
                        direction: MessageDirection.RECEIVED
                    }
                ]
            }
        }).exec()
        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesOfType(
        type: string,
        relatedWithDID?: DID | undefined
    ): Promise<Message[]> {
        const query: Array<MangoQuerySelector<MessageSchemaType>> = [
            {
                piuri: type
            }
        ]
        if (relatedWithDID) {
            query.push({
                $or: [
                    {
                        from: relatedWithDID.toString()
                    },
                    {
                        to: relatedWithDID.toString()
                    }
                ]
            })
        }
        const messages = await this.db.collections.messages.find({
            selector: {
                $and: query
            }
        }).exec()

        return messages.map((message) => message.toDomainMessage())
    },
    async getAllMessagesByFromToDID(
        from: DID,
        to: DID
    ): Promise<Message[]> {
        const messages = await this.db.collections.messages.find({
            selector: {
                $or: [
                    {
                        from: from.toString()
                    },
                    {
                        to: to.toString()
                    }
                ]
            }
        }).exec()

        return messages.map((message) => message.toDomainMessage())
    }
    ,
    /**
    * Get all the stored messages
    * @returns [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
    */
    async getAllMessages(): Promise<Message[]> {
        const messages = await this.db.collections.messages.find().exec()
        return messages.map((message) => message.toDomainMessage())
    },
    /**
     * Stores multiple messages in 1 call
     * @param [Message[]](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
     * @returns void
     */
    async storeMessages(messages: Message[]): Promise<void> {
        for (const message of messages) {
            await this.storeMessage(message)
        }
    },
    /**
     * Stores a message
     * @param [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
     * @returns void
     */
    async storeMessage(message: Message): Promise<void> {
        const existing = await this.db.collections.messages.findOne({
            selector: {
                id: {
                    $eq: message.id
                }
            }
        }).exec()
        if (existing) {
            await existing.patch({
                ...message,
                to: message.to?.toString(),
                from: message.from?.toString()
            })
        } else {
            await this.db.collections.messages.insert({
                ...message,
                to: message.to?.toString(),
                from: message.from?.toString()
            })
        }
    },
    /**
     * Get a Message by its id
     * @param id
     * @returns [Message](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/classes/Domain.Message.html)
     */
    async getMessage(id: string): Promise<Message | null> {
        const message = await this.db.collections.messages.findOne({
            selector: {
                id: {
                    $eq: id
                }
            }
        }).exec()
        if (message) {
            return message.toDomainMessage()
        }
        return null
    }
}