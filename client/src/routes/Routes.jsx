import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";

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
]);

export default router;
