import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider, Navigate, defer } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path:'/', 
      element: <Navigate to='/root/home'/>
    }, 
    {
      path: '/root', 
      element: <Root/>,
      children: [
        {
          path: 'home', 
          element: <Home />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
);
