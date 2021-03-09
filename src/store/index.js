import { createStore } from "vuex";
export const store = createStore({
  state: {
    courses: []
  },
  //obtiene elementos del STATE
  getters: {
    getCourses(state) {
      console.log("getCourses");
      return state.courses;
    },
    getCourseBySlug: (state) => (slug) => {
      return state.courses.find(course => course.slug === slug)
    }
  },
  actions: {
    setCoursesAction(context, arrCourses){
      context.commit("setCourses", arrCourses);
      console.log("setCoursesAction");
    },
  },
  mutations: {
    setCourses(state, newCourses){
      state.courses = newCourses;
      console.log("setCourses");
    },
  }
});
export default store;
