import express from "express";
import {
  getOrders,
  createPaymentIntent,
  confirmPayment
} from "../controller/order.controller.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, createPaymentIntent);
router.put("/", verifyToken, confirmPayment);

export default router;
