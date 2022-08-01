import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "../pages/home";

export default function Routes() {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/request", element: <HomePage /> },
  ]);
}
