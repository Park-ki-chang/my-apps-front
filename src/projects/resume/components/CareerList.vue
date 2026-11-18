
<script setup>
import CareerItem from './CareerItem.vue'

defineProps({
  careers: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="experience" class="experience">
    <h2>업무 경력</h2>

    <CareerItem
        v-for="career in careers"
        :key="career.id"
        :career="career"
    />
  </section>
</template>

<style scoped>
.experience {
  padding-top: 65px;
}

.experience h2 {
  margin-bottom: 40px;
  font-size: 27px;
}
</style>
