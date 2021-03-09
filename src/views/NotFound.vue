<template>
  <div id="not-found">
      <div class="container mx-auto">
          <div class="row">
              <h1>¡OOPS!</h1>
              <h2 class="mt-3">ERROR 404</h2>
              <p class="mt-5"><strong>Sorry, this page is not found :(</strong></p>
              <div class="row">
                  <router-link id="myLink" class="btn btn-warning mt-3" to="/">Back to Home Page</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>