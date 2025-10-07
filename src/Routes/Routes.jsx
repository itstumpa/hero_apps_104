import { createBrowserRouter } from "react-router";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Wishlist from "../Pages/Wishlist";



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
    path: "/products",
    element: <Products />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
    ],
  },
  
]);

export default router;