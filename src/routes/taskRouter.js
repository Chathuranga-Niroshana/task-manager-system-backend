import express from 'express'
import { createTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/create', createTask)

export default router;