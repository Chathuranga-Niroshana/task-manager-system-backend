import express from 'express'
import {
    createTask,
    deleteTaskById,
    getAllTasks,
    getTaskById,
    updateTaskById
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/create', createTask)
router.get('/get', getAllTasks);
router.get('/get/:id', getTaskById);
router.patch('/update/:id', updateTaskById);
router.delete('/delete/:id', deleteTaskById);

export default router;