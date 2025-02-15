import { createRoot } from "react-dom/client";
import "@workspace/ui/globals.css";
import "./main.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemesProvider } from "@workspace/ui/components/customs/themes-provider";

createRoot(document.getElementById("root")!).render(
  <ThemesProvider>
    <RouterProvider router={router} />
  </ThemesProvider>
);
