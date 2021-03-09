<template>
  <div id="user-course-detail">
    <!-- splash -->
    <div v-if="loading" class="container-fluid mt-5 mx-auto">
        <h2>Please wait...</h2>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>

    <div v-else class="row container mx-auto">

        <UserCourse :course=course />
        
        <div class="row container">
            <router-link id="back" class="btn btn-secondary mt-2" to="/">Back</router-link>
        </div>
    </div>

  </div>
</template>

<script>
import UserCourse from "@/components/UserCourse.vue"

export default {
    components: {
        UserCourse,
    },
    data(){
        return {
            loading: false,
            courses: [],
            course: {
                attributes: {
                    name: '',
                    slug: '',
                    cover: ''
                },
            }
        }
    },
    mounted(){
        this.courses = this.$store.getters.getCourses;
        console.log(this.courses);
    },
    created(){
        console.log("created");
        console.log(this.$route.params.slug);
        console.log(this.$store.state.courses[1].attributes.slug);
        const course = this.$store.state.courses.find(c => {
            return c.attributes.slug == this.$route.params.slug;
        })
        console.log(course);
        this.course = course;
    }
}
</script>

<style>

</style>