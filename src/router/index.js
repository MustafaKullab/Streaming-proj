// تم تغيير createWebHistory إلى createWebHashHistory
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
    meta: { title: "Home" },
  },
  {
    name: "tvshows",
    path: "/tvshows",
    component: () => import("@/views/TvShows.vue"),
    meta: { title: "TV Shows" },
  },
  {
    name: "movies",
    path: "/movies",
    component: () => import("@/views/MyMovies.vue"),
    meta: { title: "Movies" },
  },
  {
    name: "mylist",
    path: "/mylist",
    component: () => import("@/views/MyList.vue"),
    meta: { title: "My List" },
  },
];

const router = createRouter({
  // تغيير نظام التتبع للـ Hash ليناسب ملف الـ HTML الواحد
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
