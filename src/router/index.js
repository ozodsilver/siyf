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
      path: "/auto",
      name: "auto",
      component: () => import("../Authorization.vue"),
    },
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
      path:'/news/:id',
      name:'news',
      component: () => import('../views/inSaidNews/inNews.vue')
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: () => import("../views/Dashboard/Admin.vue"),
      children: [
        {
          path: "/addEmployee",
          name: "employee",
          component: addEmployee,
        },
        {
          path: "/addNews",
          name: "addNews",
          component: addNews,
        },
      ],
    },
  ],
});

export default router;
