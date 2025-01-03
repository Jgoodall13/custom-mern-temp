import { Request, Response } from "express";
import Count from "../models/Count";
import logger from "../utils/logger";

// Create a new todo
export const createCount = async (req: Request, res: Response) => {
  try {
    let { value } = req.body;
    const count = new Count({ value });
    let dbResponse = await count.save();
    console.log(dbResponse);
    res.status(201).json({
      message: "Count created successfully",
      dbResponse: {
        dbResponse,
      },
    });
  } catch (err: any) {
    logger.error("Error creating todo:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Read all todos
export const getCount = async (_req: Request, res: Response) => {
  try {
    const count = await Count.find();
    res.status(200).json({ count });
  } catch (err: any) {
    logger.error("Error fetching todos:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteCount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Extract from params
    const result = await Count.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Count not found" });
    }
    res.status(200).json({ message: "Count deleted successfully", result });
  } catch (err: any) {
    logger.error("Error deleting count:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
