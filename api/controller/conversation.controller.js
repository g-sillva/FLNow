import Conversation from "../models/conversation.model.js";
import createError from "../utils/createError.js";

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({
      conversationId: req.params.id,
    });
    if (!conversation) return next(createError(404, "Conversation not found"));
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    conversationId: req.isSeller
      ? req.userId + req.body.to
      : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { conversationId: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};
