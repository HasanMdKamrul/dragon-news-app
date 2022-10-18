import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../page/Category/Category/Category";
import Home from "../../page/Home/Home/Home";
import News from "../../page/News/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:newsId",
        element: <News />,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
      },
    ],
  },
]);
