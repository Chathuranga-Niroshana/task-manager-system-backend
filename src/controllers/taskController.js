import { taskStatus } from "../constants/taskStatus.js";
import Task from "../models/taskModel.js";

export const createTask = async (req, res, next) => {
    try {
        const data = req.body
        if (!data.title) {
            return res.status(400).json({ message: "Title is missing" })
        }
        if (data.status && !taskStatus.includes(data.status)) {
            return res.status(400).json({ message: "Status is invalid " })
        }
        const task = await Task.create(data)
        res.status(201).json({ message: 'Task created successfully.', task: task })
    } catch (error) {
        next(error)
    }
}

export const getTaskById = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json(task)
    } catch (error) {
        next(error)
    }
}

export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find()
        if (!tasks) {
            return res.status(404).json({ message: "Tasks not available" })
        }
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

export const updateTaskById = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = req.body

        if (data.status && !taskStatus.includes(data.status)) {
            return res.status(400).json({ message: "Status is invalid " })
        }

        const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true, runValidators: true })
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json(updatedTask)
    } catch (error) {
        next(error)
    }
}

export const deleteTaskById = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({ message: "Task deleted" })
    } catch (error) {
        next(error)
    }
}