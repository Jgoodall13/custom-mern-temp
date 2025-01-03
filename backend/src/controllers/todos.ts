import { Request, Response } from "express";
import Todo from "../models/Todo";
import logger from "../utils/logger";

// Create a new todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;

    // Validate request body
    if (!title || !description || typeof status !== "boolean") {
      return res.status(400).json({ message: "Invalid data provided" });
    }

    const todo = new Todo({ title, description, status });
    await todo.save();

    res.status(201).json({ message: "Todo created successfully", todo });
  } catch (err: any) {
    logger.error("Error creating todo:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Read all todos
export const getTodos = async (_req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (err: any) {
    logger.error("Error fetching todos:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
