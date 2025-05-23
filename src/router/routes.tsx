import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import { Settings } from "@/pages/Settings";
import { Navigate } from "react-router";

export interface Route {
  path?: string;
  element: React.ReactNode;
  layout: "admin" | "public";
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/admin",
    element: <Dashboard />,
    layout: "admin",
  },
  {
    path: "/admin/settings",
    element: <Settings />,
    layout: "admin",
  },
  {
    path: "/login",
    element: <Login />,
    layout: "public",
  },
  {
    path: "/",
    element: <Navigate to="/admin" replace />,
    layout: "public",
  },
];
