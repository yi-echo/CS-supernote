import type { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue"),
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
