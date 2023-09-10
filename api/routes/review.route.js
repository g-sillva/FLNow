import express from "express";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controller/review.controller.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:serviceId", verifyToken, getReviews);
router.delete("/:id", verifyToken, deleteReview);

export default router;
