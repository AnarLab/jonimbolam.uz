import type { RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Doctors } from "./pages/Doctors";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Payment } from "./pages/Payment";
import { Layout } from "./components/Layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "doctors", Component: Doctors },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "payment", Component: Payment },
    ],
  },
];