import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/offline",
      name: "offline",
      component: () => import("../../views/offline/Index.vue"),
    },
  ],
});

export default router;
