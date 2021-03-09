<template>
  <div id="detailCourse">
    <div v-if="loading" class="container-fluid mt-5 mx-auto">
          <h2>Please wait...</h2>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
      </div>
    <div v-else class="row container mx-auto">

        <AvailableCourse
            v-for="course in arrCourses" :key="course.id"
            :course=course
        />

        <div class="row container mb-5">
            <router-link id="back" class="btn btn-secondary mt-2" to="/">Back</router-link>
        </div>
    </div>

  </div>
</template>

<script>
import dataService from "../services/DataService"
import AvailableCourse from "@/components/AvailableCourse.vue"

export default {
    components: {
        AvailableCourse,
    },
    data(){
        return{
            arrCourses: [],
            loading: false,
        }
    },
    methods:{
        async getCourses(){
            this.loading = true;
            setTimeout(() => {
                let service = new dataService();
                service.getAllCourses().then((response) => {
                    return response.json();
                }).then(this.showCourses).catch((error) => {
                    console.log(error);
                    this.loading = false;
                })
            }, 1000)
        },
        showCourses(data) {
            //console.log(data);
            this.arrCourses = data.data;
            this.loading = false;
            console.log(this.arrCourses);
        }
    },
    mounted(){
        this.getCourses()
    }
}
</script>

<style>

</style>