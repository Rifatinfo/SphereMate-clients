import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader : () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
          loader : () => fetch('http://localhost:9000/jobs')
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Register></Register>,
        },
      ],
    },
  ]);

export default router;