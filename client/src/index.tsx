import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import store from "./store-toolkit/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Item from "./pages/item";
import Cart from "./pages/cart";
import Login from "./pages/login";
import { ErrorRouterBoundary } from "./components/errorRoterBoundary";
import "./index.css";

const AppLayout = () => {
  return (

    
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>

  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorRouterBoundary />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "item/:id",
        element: <Item />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <Navbar/> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
