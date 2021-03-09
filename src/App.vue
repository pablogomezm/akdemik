<template>
  <div id="nav">
    <!-- <router-link to="/" class="style-menu">Home</router-link> |
    <router-link to="/matches" class="style-menu">Matches</router-link> -->

    <transition
      name="router-anim"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="sass">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
@import "../src/assets/sass/variables.scss"

.back-header
  background-color: red

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 0
  margin: 0

#nav a
  /* font-weight: bold */

/* #nav a
  color: $color-selected */

#nav a.router-link-exact-active
  color: $color-selected
  text-decoration: none

.contenedores
  margin-top: 60px

.fade-transition
  transtion: all 1s ease
  opacity: 100

.fade-enter
  opacity: 0

.view-enter-active, .view-leave-active
  transition: opacity .5s

.view-enter, .view-leave-to
  opacity: 0

.view-enter-to, .view-leave
  opacity: 1

.style-menu
  color: $color-nav-item
  text-decoration: none
</style>
