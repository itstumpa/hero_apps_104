import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import NotFoundError from "../Pages/NotFoundError";
import AppDetails from "../components/AppDetails/AppDetails";
import MainLayouts from "../components/Layout/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        children: [
          { index: true, element: <Apps /> }, // /apps
          { path: ":id", element: <AppDetails /> },
          { path: "*", element: <NotFoundError /> }, // /apps/anything/wrong
        ],
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/not",
        element: <NotFoundError />,
        errorElement: <NotFoundError />,
      },
      
    ],
  },
]);

export default router;
