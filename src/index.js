import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

import ShoppingCart from "./components/ShoppingCart";
import Pizza from "./components/Pizza";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "pizza",
        element: <Pizza />,
      },
      {
        path: "shoppingcart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

