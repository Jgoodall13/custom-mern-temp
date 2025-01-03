import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/todos";

export async function getTodos() {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Failed to fetch todos");
  }
}

export async function postTodo(todo: any) {
  try {
    const response = await axios.post(`${API_BASE_URL}`, todo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
}
