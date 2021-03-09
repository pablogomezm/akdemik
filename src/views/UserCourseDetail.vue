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
        <div class="card mt-2">
            <img :src="course.attributes.cover" alt="image" width="300" class="ml-auto mr-auto">
            <div class="card-body">
                <h2 class="card-title">{{ course.attributes.name }}</h2>
            </div>
        </div>
        <div class="row">
            <h2 class="card-title mt-3">
                <strong>Contenido curso</strong>
            </h2>
        </div>
        <!-- Mostrar listado de contenidos de un curso -->
        <div class="card-body">
            <div class="card-title" v-for="content in course.attributes.learning" :key="content.name">
                <div class="card mt-2">
                    <div class="card-body d-flex justify-content-between">
                        <h2>{{ content.name }}</h2>
                        <h4 class="card-title mr-1">{{ content.status }}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row container">
            <router-link id="back" class="btn btn-secondary mt-2" to="/">Back</router-link>
        </div>
    </div>

  </div>
</template>

<script>
export default {
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