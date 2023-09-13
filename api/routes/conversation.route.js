import express from "express";
import {
  getConversations,
  createConversation,
  getConversation,
  updateConversation,
} from "../controller/conversation.controller.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.get("/", verifyToken, createConversation);
router.get("/:id", verifyToken, getConversation);
router.get("/:id", verifyToken, updateConversation);

export default router;
