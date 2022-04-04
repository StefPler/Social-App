const { ChatModel } = require('../schemas/Chats');

class ChatService {

    async createChat(data) {
        return ChatModel.create({
            userId: "anid2",
            content: "test message2"
        });
    }

    async getChats() {
        return ChatModel.find({});
    }

    async getChat() {

    }

    async updateChat() {

    }

    async deleteChat() {

    }
}

module.exports = ChatService;