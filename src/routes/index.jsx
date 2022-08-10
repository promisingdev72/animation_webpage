import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home";
import RequestPage from "../pages/request";
import LoginPage from "../pages/login";

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
      children: [{ element: <RequestPage />, index: true }],
    },
    {
      path: "/login",
      element: <MainLayout />,
      children: [{ element: <LoginPage />, index: true }],
    },
  ]);
}
