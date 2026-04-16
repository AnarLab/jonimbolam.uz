import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import { routes } from "./app/routes";
import "./styles/index.css";

const router = createBrowserRouter(routes);

hydrateRoot(document.getElementById("root")!, <RouterProvider router={router} />);

