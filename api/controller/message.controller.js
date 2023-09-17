import Message from "../models/message.model.js"

export const createMessage = async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
}

export const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ conversationId: req.params.is });
        res.send(messages);
    } catch (err) {
        next(err);
    }
}