import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todos";

const router = Router();

/**
 * @route POST /api/todos
 * @desc Create a new todo
 */
router.post("/", createTodo);

/**
 * @route GET /api/todos
 * @desc Get all todos
 */
router.get("/", getTodos);

export default router;
