import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import LayoutApp from "@/components/layouts/LayoutApp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { layout: LayoutApp },
  },
  {
    path: "/menus",
    name: "Menu",
    component: () => import("@/views/Menu.vue"),
    meta: { layout: LayoutApp },
  },
  {
    path: "/menus/:slug",
    name: "MenuDynamic",
    component: () => import("@/views/Menu.vue"),
    meta: { layout: LayoutApp },
  },
  {
    path: "/products/:slug",
    name: "ProductsDetail",
    component: () => import("@/views/Products.vue"),
    meta: { layout: LayoutApp },
  },
  {
    path: "/cart/preview",
    name: "CartPreview",
    component: () => import("@/views/Cart.vue"),
    meta: { layout: LayoutApp },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/error/404.vue"),
    meta: { layout: LayoutApp },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
