const { MessageModel } = require('../schemas/Chats');
const mongoose = require("mongoose");
class MessageService {

    async createMessage(data) {
        return MessageModel.create({
            userId: data.userId || "null",
            content: data.content
        });
    }

    async getMessages(data) {
        return MessageModel.find({});
    }

    async getMessage(data) {
        return MessageModel.find({ _id: mongoose.Types.ObjectId(data?.id) });
    }

    async updateMessage() {

    }

    async deleteMessage() {

    }
}

module.exports = MessageService;