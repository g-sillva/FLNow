import express from 'express';
import { deleteUser } from '../controller/user.controller.js';
import { verifyToken } from '../middleware/jwtMiddleware.js';

const router = express.Router();

router.delete('/:id', verifyToken, deleteUser);

export default router;