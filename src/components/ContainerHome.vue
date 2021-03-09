<template>
  <div id="containerHome" class="container">
        <!-- splash -->
    <div v-if="loading" class="container-fluid mt-5">
        <h2>Please wait...</h2>
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
    <!-- Info cargada -->
    
    <div v-else class="row">
    
      <div class="row">
        <img class="image ml-auto mr-auto"
        :src="info && info.included[0].attributes.avatar"
        alt="logo"
        width="500"
        /> 
      </div>

      <!-- User information -->
      <div class="card mt-3">
        <h5 class="card-header">User information</h5>
        <div class="card-body">
          <div class="row">
            <h5 class="card-title">
              <div><strong>{{info && (info.included[0].attributes.firstname + " " + info.included[0].attributes.lastname)}}</strong></div>
              <div>{{info && info.data.attributes.email}}</div>
            </h5>
            <h6>{{info && info.included[0].attributes.bio}}</h6>
          </div>
          <div class="d-flex row">
            <!-- GITHUB -->
            <div class="col-6">
              <a :href="info && info.included[1].attributes.url" target="_blank">
                <i class="fab fa-github mb-3" style="font-size: 60px"></i></a>
              <div>
                <a class="btn btn-primary" target="_blank" :href="info && info.included[1].attributes.url">{{info && info.included[1].attributes.name}}</a>
              </div>
            </div>
            <!-- TWITTER -->
            <div class="col-6 align-items-center">
              <a :href="info && info.included[2].attributes.url" target="_blank">
                <i class="fab fa-twitter mb-3" style="font-size: 60px"></i></a>
              <div>
                <a class="btn btn-primary" target="_blank" :href="info && info.included[2].attributes.url">{{info && info.included[2].attributes.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <!-- User courses -->
      <div class="card mt-3">
        <h5 class="card-header">User courses</h5>
        <div class="card-body">
        <!-- <div class="card-body" v-for="course in arrCourses" :key="course.slug"> -->
          <div class="row d-flex justify-content-between">
            <h6 class="card-title col-3">{{info && info.included[3].attributes.name}}</h6>
            <router-link id="detail" class="btn btn-secondary mt-2 col-3" :to="{name: 'UserCourseDetail', params: {slug: info && info.included[3].attributes.slug}}">Detalle</router-link>
          </div>
          <div class="row d-flex justify-content-between">
            <h6 class="card-title col-3">{{info && info.included[4].attributes.name}}</h6>
            <router-link id="detail" class="btn btn-secondary mt-2 col-3" :to="{name: 'UserCourseDetail', params: {slug: info?.included[4]?.attributes?.slug}}">Detalle</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- {{$store.getters.isLoggedIn}} -->
</template>

<script>
import dataService from "../services/DataService";

export default {
  name: "ContainerHome",
  data(){
    return {
      arrCourses: [],
      info: null,
      loading: false,
    }
  },
  methods: {
    async getCourses(){
      this.loading = true;
        setTimeout(() => {
          let service = new dataService();
          //esto es un fetch, por lo tanto retorna una promesa => usamos then
          service.getAll().then((response) => {
              return response.json()
          }).then(this.processInfo)
      }, 1000)
    },
    processInfo(resp){
        console.log(resp);
        this.info = resp; // usamos nuestro arreglo vacío para guardar la información procesada
        //acá se termina de procesar la información
        const courses = [];
        courses.push(resp.included[3]);
        courses.push(resp.included[4]);
        console.log(courses);
        this.$store.dispatch("setCoursesAction", courses);
        this.arrCourses = courses;
        this.loading = false;
    
    },
    /* changeTitle() {
      console.log(this.$store.getters.getElement1);
      this.$store.dispatch(
        "setTitleAction",
        "This is the new title... a cool one"
      );
    }, */
  },
  mounted(){
      //acá debiera ir a buscar la información de los methods
      //luego, la función "processBirds" me debiera mostrar en consola la respuesta
      this.getCourses(); 
      /* arrData = [];
      Object.keys(data).forEach(data => {
        arrData.push({
          id: key,
          type: data[key].type,
          attribute: data[key].attribute
        });
      });
      this.arrData  */    
  }
}
</script>

<style scoped lang="sass">
#containerHome
  min-height: calc(100vh - 169px)

.button-matches
  color: blue

.card-home
  position: relative
  display: flex
  flex-direction: row
  min-width: 0
  word-wrap: break-word
  background-color: #fff
  background-clip: border-box
  border: 1px solid rgba(0,0,0,.125)
  border-radius: .25rem

.image
  max-width: 30%
</style>
