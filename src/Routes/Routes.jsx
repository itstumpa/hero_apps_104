import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import NotFoundError from "../Pages/NotFoundError";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <Error/>,
    children: [
      {
    index: true, 
    element: <Home/>,
  },
  {
    path: "/apps",
    element: <Apps />,
  },
  {
    path: "/installation",
    element: <Installation />,
  },
    ],
  },
  
]);

export default router;