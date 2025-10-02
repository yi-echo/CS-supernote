import type { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue"),
  },
  {
    path: "/home",
    component: () => import("@/layouts/default.vue"),
    redirect:'/home/dashboard',
    children: [
      {
        name:'dashboard',
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        name:'users',
        path: "users",
        component: () => import("@/views/users/index.vue"),
      },
      {
        name:"roles",
        path: "roles",
        component: () => import("@/views/roles/index.vue"),
      },
      {
        name:'menus',
        path: "menus",
        component: () => import("@/views/menus/index.vue"),
      },
    ],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
