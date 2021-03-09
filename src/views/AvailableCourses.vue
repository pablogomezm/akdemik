<template>
  <div id="detailCourse">
    <div v-if="loading" class="container-fluid mt-5 mx-auto">
          <h2>Please wait...</h2>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
      </div>
    <div v-else class="row container mx-auto">
        
        <div class="col-md-4" v-for="course in arrCourses" :key="course.id">
            <div class="card mt-2 d-flex justify-content-center">
                <div clasS="d-flex justify-content-center">
                    <img :src="course.attributes.cover" alt="" class="mw-100">
                </div>
                <h2 class="card-title">
                    {{ course.attributes.name }}
                </h2>
                <div class="card-body">
                    <h4 class="card-text">Nivel de dificultad: {{ course.attributes.difficulty }}</h4>
                    <div v-html="course.attributes.description" class="text-justify mt-2"></div>
                </div>
                <div class="d-flex justify-content-center mb-5">
                    <router-link id="detail" class="btn btn-secondary mt-2 w-50" :to="{name: 'DetailCourse', params: {slug: course.attributes.slug}}">Ver detalles</router-link>
                </div>
             </div>
        </div>

        <div class="row container mb-5">
            <router-link id="back" class="btn btn-secondary mt-2" to="/">Back</router-link>
        </div>
    </div>

  </div>
</template>

<script>
import dataService from "../services/DataService"

export default {
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