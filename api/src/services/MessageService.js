const Message = require('../schemas/Messages');

class MessageService {

    async createMessage(data) {
        return Message.create({
            userId: "anid2",
            content: "test message2"
        });
    }

    async getMessages() {
        return Message.find({});
    }

    async getMessage() {

    }

    async updateMessage() {

    }

    async deleteMessage() {

    }
}

module.exports = MessageService;