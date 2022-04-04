const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    chatId: String,
    userId: String,
    content: String,
    date: { type: Date, default: Date.now }
});

const ChatSchema = new Schema({
    messages: [MessageSchema],
    date: { type: Date, default: Date.now },
    participants: [{ name: String }]
})

const MessageModel = mongoose.model('Message', MessageSchema);
const ChatModel = mongoose.model('Chat', ChatSchema);

module.exports = {
    MessageModel,
    ChatModel
}