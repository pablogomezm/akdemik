<template>
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
