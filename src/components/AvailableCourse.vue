<template>
    <div class="col-md-4">
        <div class="card mt-2 d-flex justify-content-center">
            <div class="d-flex justify-content-center">
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
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>
