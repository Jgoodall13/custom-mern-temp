import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Todos,
  Counter,
  HomeLayout,
  Error,
  Landing,
  Projects,
  Login,
  Register,
} from "./pages";
import TicTacToe from "./components/TicTacToe";
import Sodoku from "./components/Sudoku";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />, // Protect authenticated routes
    errorElement: <Error />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <Landing /> },
          { path: "counter", element: <Counter /> },
          { path: "todos", element: <Todos /> },
          {
            path: "projects",
            element: <Projects />,
            children: [
              { path: "tic-tac-toe", element: <TicTacToe /> },
              { path: "sudoku", element: <Sodoku /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute />, // Allow only unauthenticated users
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/register",
    element: <PublicRoute />, // Allow only unauthenticated users
    children: [{ index: true, element: <Register /> }],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
