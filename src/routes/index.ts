import { createRouter, createWebHistory } from "vue-router";

const children = [
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/About"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/Contact"),
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
