import express from "express";
import {
  getServices,
  getService,
  createService,
  deleteService,
} from "../controller/service.controller.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getServices);
router.get("/:id", verifyToken, getService);
router.post("/", verifyToken, createService);
router.delete("/:id", verifyToken, deleteService);

export default router;
