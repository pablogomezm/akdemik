<template>
  <div v-if="course" id="detailCourse">

    <div v-if="loading" class="container-fluid mx-auto mt-5">
          <h2>Please wait...</h2>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
      </div>

    <div v-else class="row container mx-auto">
        <div class="row">
            <div class="card mt-2 d-flex justify-content-center">
                <div>
                    <img :src="course && course.data.attributes.cover" alt="" width="400">
                </div>
                <h2 class="card-title mt-4">
                    <div>{{ course && course.data.attributes.name }}</div>
                </h2>
                <div class="card-body">
                    <h4 class="card-text mb-3">Nivel de dificultad: {{ course && course.data.attributes.difficulty }}</h4>
                    <div v-html="course && course.data.attributes.description" class="text-justify mt-2"></div>
                </div>
             </div>
        </div>

        <!-- Programa de estudios -->

        <div class="row">
            <div class="card mt-2">
                <h2 class="card-title">Programa de estudios</h2>
                <ul class="card-body">
                    <li class="card-text text-left" v-for="p in course.included" :key="p.id">
                        {{ course && p.attributes.name }}
                    </li>
                </ul>
             </div>
        </div>

        <div class="row container">
            <router-link id="back" class="btn btn-secondary mt-2" to="/AvailableCourses">Back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import dataService from "../services/DataService"

export default {
    data(){
        return{
            loading: false,
            course: null, /* {
                attributes: {
                    name: '',
                    slug: '',
                    description: '',
                    difficulty: '',
                    cover: ''
                },
            }, */
        }
    },
    methods:{
        async getCourse(slug){
            this.loading = true;
            setTimeout(() => {
                let service = new dataService();
                service.getOneCourse(slug).then((response) => {
                    return response.json();
                }).then(this.processCourse).catch((error) => {
                    console.log(error);
                    this.loading = false;
                })
            }, 1000)
        },
        processCourse(data) {
            //console.log(data);
            this.course = data;
            this.loading = false;
            console.log(this.course);
        }
    },
    mounted(){
        //if(this.$route.params.uid){
            console.log(this.$route.params.slug);
            //let uidConsult = this.$route.params.uid;
            //this.getTheBird(uidConsult);
       // }
        this.getCourse(this.$route.params.slug);
    }
}
</script>

<style>

</style>