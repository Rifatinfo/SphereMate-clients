import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AddJob from "../Pages/AddJob/AddJob";
import BidRequests from "../Pages/BidRequest/BidRequest";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

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
          loader : ({params}) => fetch(`http://localhost:9000/job/${params.id}`)
        },
        {
          path: "/update/:id",
          element:<UpdateJob></UpdateJob>,
          loader : ({params}) => fetch(`http://localhost:9000/job/${params.id}`)
        },
        {
          path : '/add-job',
          element : <AddJob></AddJob>
        },
        {
          path : '/bid-request',
          element : <BidRequests></BidRequests>
        },
        {
          path : '/my-posted-jobs',
          element : <MyPostedJobs></MyPostedJobs>
        }
      ],
    },
  ]);

export default router;