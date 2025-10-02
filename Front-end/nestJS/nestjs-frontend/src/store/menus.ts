import { defineStore } from "pinia";
import type { MenuItem } from "@/types/MenuNav";
export const userMenuStore = defineStore("menu", {
  state: () => ({
    menus: [
      // {
      //   id: 1,
      //   name: "Home",
      //   path: "dashboard",
      // },
      {
        id: 2,
        name: "Users",
        path: "users",
        icon:'fas fa-user',
        routeName:'users',
      },
      {
        id: 3,
        name: "Roles",
        path: "roles",
        icon:'fas fa-user-tie',
        routeName:'roles',
      },
      {
        id: 4,
        name: "Menus",
        path: "menus",
        icon:"fab fa-elementor",
        routeName:'menus',
      },
      
    ] as MenuItem[],
  }),
});
