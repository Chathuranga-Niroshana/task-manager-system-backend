import Task from "../models/taskModel.js";

export const createTask = async (req, res, next) => {
    try {
        const data = req.body
        if (!data.title) {
            return res.status(400).json({ message: "Title is missing" })
        }
        const task = await Task.create(data)
        res.status(201).json({ message: 'Task created successfully.', task: task })
    } catch (error) {
        next(error)
    }
}