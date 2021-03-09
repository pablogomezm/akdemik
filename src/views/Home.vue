<template>
  <div class="home">
    <Header title="Welcome to aK-demic"/>
    <ContainerHome />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import component
import Header from "@/components/Header.vue";
import ContainerHome from "@/components/ContainerHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    ContainerHome,
    Footer
  }
};
</script>
