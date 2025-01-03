import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/count";

export async function getCount() {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Failed to fetch todos");
  }
}

export async function postCount(count: any) {
  try {
    const response = await axios.post(`${API_BASE_URL}`, count);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
}

export async function deleteCount(id: string) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting count:", error);
    throw new Error("Failed to delete count");
  }
}
