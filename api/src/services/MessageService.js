const { MessageModel} = require('../schemas/Chats');
class MessageService {

    async createMessage(data) {
        return MessageModel.create({
            userId: "anid2",
            content: "test message2"
        });
    }

    async getMessages() {
        return MessageModel.find({});
    }

    async getMessage() {

    }

    async updateMessage() {

    }

    async deleteMessage() {

    }
}

module.exports = MessageService;