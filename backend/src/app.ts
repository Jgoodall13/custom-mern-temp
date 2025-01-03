import express from "express";
import { setupMiddlewares } from "./middlewares/setup";
import errorHandler from "./middlewares/errorHandler";
import todoRoutes from "./routes/todos";
import countRoutes from "./routes/count";
const app = express();

// Middlewares
setupMiddlewares(app);

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/count", countRoutes);

// Default route for API information
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Jacob's Rover API",
    routes: {
      todos: "/api/users",
      // friends: "/api/friends",
    },
  });
});

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Route not found :-(" });
});

// Error handling middleware
app.use(errorHandler);

export default app;
