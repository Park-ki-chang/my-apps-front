<script setup>
import PersonalProjectItem from './PersonalProjectItem.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section
      id="personal-projects"
      class="personal-projects"
  >
    <h2>개인 프로젝트</h2>

    <p class="section-description">
      직접 개발하거나 학습하며 진행한 프로젝트를 소개합니다.
    </p>

    <PersonalProjectItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
    />

  </section>
</template>

<style scoped>
.personal-projects {
  padding: 65px 0;
}

.personal-projects h2 {
  margin: 0 0 14px;
  font-size: 27px;
}

.section-description {
  margin: 0 0 32px;
  color: var(--resume-muted);
  font-size: 15px;
}

@media (max-width: 640px) {
  .personal-projects {
    padding: 45px 0;
  }

  .personal-projects h2 {
    font-size: 23px;
  }
}
</style>
