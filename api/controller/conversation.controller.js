import Conversation from '../models/conversation.model.js';

export const getConversations = (req, res, next) => {
    try {

    } catch(err) {
        next(err);
    }
}

export const getConversation = (req, res, next) => {
    try {

    } catch(err) {
        next(err);
    }
}

export const createConversation = async (req, res, next) => {
    const newConversation = new Conversation({
        conversationId: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);
    } catch(err) {
        next(err);
    }
}

export const updateConversation = async (req, res, next) => {
    try {
        const updatedConversation = await Conversation.findOneAndUpdate({ conversationId: req.params.id}, {
            $set: {
                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
            }
        }, { new: true });
        
        res.status(200).send(updatedConversation);
    } catch(err) {
        next(err);
    }
}