import { Router } from "express";
import { createCount, getCount, deleteCount } from "../controllers/count";

const router = Router();

/**
 * @route POST /api/todos
 * @desc Create a new todo
 */
router.post("/", createCount);

/**
 * @route GET /api/todos
 * @desc Get all todos
 */
router.get("/", getCount);

/**
 * @route GET /api/todos
 * @desc Get all todos
 */
router.delete("/:id", deleteCount);

export default router;
