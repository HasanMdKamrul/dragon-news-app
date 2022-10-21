import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../page/Category/Category/Category";
import Home from "../../page/Home/Home/Home";
import LogIn from "../../page/Login/Login/LogIn";
import Register from "../../page/Login/Register/Register";
import News from "../../page/News/News/News";
import TermsAndConditions from "../../page/Shared/Others/TermsAndConditions/TermsAndConditions";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            {" "}
            <News />
          </PrivateRoute>
        ),
        loader: ({ params: { newsId } }) =>
          fetch(`http://localhost:15000/news/${newsId}`),
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
        loader: ({ params: { categoryId } }) =>
          fetch(`http://localhost:15000/category/${categoryId}`),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
    ],
  },
]);
