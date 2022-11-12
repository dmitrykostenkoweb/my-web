import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About";
import Contact from "@/components/Contact";

const children = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/components/Loader"),
    children: children,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
