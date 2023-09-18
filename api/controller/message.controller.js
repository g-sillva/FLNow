import Message from "../models/message.model.js"
import Conversation from "../models/conversation.model.js"

export const createMessage = async (req, res, next) => {
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        description: req.body.description
    });
    try {
        const savedMessage = await newMessage.save();
        await Conversation.findOneAndUpdate({ conversationId: req.body.conversationId}, {
            $set: {
                readBySeller: req.isSeller,
                readByBuyer: req.isBuyer,
                lastMessage: req.body.description
            }
        }, { new: true });

        res.status(201).json(savedMessage);
    } catch (err) {
        next(err);
    }
}

export const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        res.send(messages);
    } catch (err) {
        next(err);
    }
}