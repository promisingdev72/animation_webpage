import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    {
      path: "/request",
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
  ]);
}
