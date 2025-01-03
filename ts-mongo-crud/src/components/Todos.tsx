import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTodos, postTodo } from "../api/todos";

function TodosPage() {
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description
  const [status, setStatus] = useState(false); // State for status (completed or not)
  const queryClient = useQueryClient();

  const { data, isPending, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle(""); // Clear title input
      setDescription(""); // Clear description input
      setStatus(false); // Reset status to false
    },
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading todos</p>;
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Todos</h1>
      <div className="w-full max-w-md rounded shadow p-6">
        <ul className="mb-6">
          {data.todos?.map((todo: any) => (
            <li
              key={todo._id}
              className="border-b last:border-b-0 py-2 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{todo.title}</p>
                <p className="text-sm text-gray-500">{todo.description}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  todo.status
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {todo.status ? "Completed" : "Not Completed"}
              </span>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium mr-2">Completed</label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            className="w-4 h-4"
          />
        </div>
        <button
          disabled={mutation.isPending || !title.trim() || !description.trim()}
          onClick={() =>
            mutation.mutate({
              title,
              description,
              status,
            })
          }
          className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
        >
          {mutation.isPending ? "Adding..." : "Add Todo"}
        </button>
      </div>
    </div>
  );
}

export default TodosPage;
