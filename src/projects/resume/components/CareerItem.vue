
<script setup>
import ProjectItem from './ProjectItem.vue'

defineProps({
  career: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="career">
    <!-- 회사 정보 -->
    <div class="career-title">
      <h3>{{ career.company }}</h3>
      <span>{{ career.period }}</span>
    </div>

    <!-- 담당 직무 -->
    <p class="position">
      {{ career.position }}
    </p>

    <!-- 프로젝트 목록 -->
    <ProjectItem
        v-for="project in career.projects"
        :key="project.id"
        :project="project"
    />
  </article>
</template>

<style scoped>
.career {
  margin-bottom: 48px;
}

.career-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

.career-title h3 {
  margin: 0;
  font-size: 22px;
}

.career-title span {
  font-size: 14px;
  color: #888;
}

.position {
  margin-top: 8px;
  color: #666;
}

@media (max-width: 640px) {
  .career-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
