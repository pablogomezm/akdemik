<template>
  <div id="header">
    <nav class="d-flex navbar navbar-dark bg-success style-Header">
      <div class="d-flex">
        <a href="/">
          <img src="../assets/imgs/book.png" alt="logo" height="30">
        </a>
        <!-- logo con ruta a Home -->
        <a href="/" class="logo-header pl-1">
          <strong>
            <h4 style="margin-bottom: 0px">a<span style="color: chocolate">K</span>demik</h4>
          </strong>
        </a>
      </div>
      <!-- menú navegación -->
      <div class="w-80 text-white">
        <router-link to="/" class="style-menu mr-3"><strong>Home</strong></router-link>
        <span>|</span>
        
        <router-link to="/AvailableCourses" class="style-menu ml-3"><strong>Available courses</strong></router-link>
        <!-- {{ getTitle() }} -->
        <!-- <h2>{{title2}}</h2> // ejemplo con h2 -->
        <!-- <div id="testId">{{ title2 }}</div> -->
      </div>

      <!-- Chat room () -->
      <!-- <div>
        <router-link to="/Messages" class="style-menu">Chat room</router-link>
      </div> -->

      <!-- InfoBirds View -->
     <!--  <div>
        <router-link to="/InfoBirds" class="style-menu">Birds</router-link>
      </div> -->
      
      <!-- if user is logged in -->
      <!-- <div v-if="$store.getters.isLoggedIn">
        <a href="#" @click.prevent="logOut()" class="style-menu">Log out</a>
      </div> -->

      <!-- if user is not logged in -->
      <!-- <div v-else>
        <a href="#" @click.prevent="logIn()" class="style-menu">Log in</a>
      </div> -->
    </nav>
    <!-- <router-link id="link-detail" class="btn btn-primary mt-3" to="/Login">Login</router-link>-->
    <!-- <router-link to="/Login">Log in</router-link> -->
  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebase/init";

export default {
  name: "Header",
  props: {
    title: String,
    title2: String
  },
  methods: {
    getTitle() {
      return this.$props.title ? this.$props.title : "Welcome to our NYSL app"
    },
    logIn() {
      // going to Login page to authenticate
      this.$router.push("/Login");
    },
    logOut() {
      // logging out Firebase
      firebase
        .auth()
        .signOut()
        .then(() => {
          // here we're logged out
          // tell the state that user is null
          this.$store.dispatch("setUserAction", null);
          // at this point, user is not longer logged in
        });
      console.log("Log Out");
    }
  }
};
</script>

<style scoped lang="sass">
@import "../assets/sass/variables.scss"

.style-Header
    text-align: center

.style-menu
    color: $color-nav-item
    text-decoration: none

.logo-header
    color: black
    text-decoration: none
</style>
