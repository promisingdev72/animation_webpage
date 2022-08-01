import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "../pages/home";
import CalendarPage from "../pages/calendars";

export default function Routes() {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/calendarsaccordion", element: <CalendarPage /> },
  ]);
}
