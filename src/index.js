import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PIZZAS_ROUTE, SHOPPING_CART, SAUCES } from "./constants/routes";

import App from "./App";

import ShoppingCart from "./components/ShoppingCart";
import Pizza from "./components/Pizza";
import Sauces from "./components/Sauces";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: PIZZAS_ROUTE,
        element: <Pizza />,
      },
      {
        path: SHOPPING_CART,
        element: <ShoppingCart />,
      },
      {
        path: SAUCES,
        element: <Sauces />,
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
