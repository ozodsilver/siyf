import { createRouter, createWebHistory } from "vue-router";
import addNews from "../views/Dashboard/children/addNews.vue";
import addEmployee from "../views/Dashboard/children/addEmployee.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
 
    {
      path: "/",
      name: "main",
      component: () => import("../views/Main/Main.vue"),
    },

    {
      path: "/Managiment",
      name: "managiment",
      component: () => import("../views/Managiments/Managiment.vue"),
    },

    {
      path: "/News/:id",
      name: "inside_news",
      component: () => import("../views/News/InsideNews.vue"),
    },

    {
      path: "/Learners",
      name: "learners",
      component: () => import("../views/Opportunities/Components/Learners.vue"),
    },
    {
      path: "/Students",
      name: "Students",
      component: () => import("../views/Opportunities/Students/Students.vue"),
    },
    {
      path: "/Partners",
      name: "Partners",
      component: () => import("../views/Become a partner/Partners.vue"),
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      
      
    },
  ],
});

export default router;
