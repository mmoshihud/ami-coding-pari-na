import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
