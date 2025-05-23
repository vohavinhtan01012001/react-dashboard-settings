import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routeAuth } from "./router/routeAuth";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/shared/ThemeProvider";

const router = createBrowserRouter(routeAuth);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
