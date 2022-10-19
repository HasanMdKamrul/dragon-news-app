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
        loader: () => fetch("http://localhost:15000/allnews"),
      },
      {
        path: "/news/:newsId",
        element: <News />,
        loader: ({ params: { newsId } }) =>
          fetch(`http://localhost:15000/news/${newsId}`),
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
        loader: ({ params: { categoryId } }) =>
          fetch(`http://localhost:15000/category/${categoryId}`),
      },
    ],
  },
]);
