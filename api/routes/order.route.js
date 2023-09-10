import express from "express";
import { createOrder, getOrders } from "../controller/order.controller.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.post("/:serviceId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
