import express from 'express';
import { func } from '../controller/conversation.controller.js';

const router = express.Router();

router.get('/test', func);

export default router;