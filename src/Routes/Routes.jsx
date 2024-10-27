import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader : () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Register></Register>,
        },
        {
          path: "/job/:id",
          element:<JobDetails></JobDetails>,
          loader : ({params}) => fetch(`http://localhost:9000/jobs/${params.id}`)
        },
      ],
    },
  ]);

export default router;