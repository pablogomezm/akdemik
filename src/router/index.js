import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import UserCourseDetail from "../views/UserCourseDetail.vue";
import AvailableCourses from "../views/AvailableCourses.vue";
import DetailCourse from "../views/DetailCourse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AvailableCourses",
    name: "AvailableCourses",
    component: AvailableCourses
  },
  {
    path: "/DetailCourse",
    name: "DetailCourse",
    component: DetailCourse
  },
  {
    path: "/UserCourseDetail",
    name: "UserCourseDetail",
    component: UserCourseDetail
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: "/:catchaAll(.*)",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
