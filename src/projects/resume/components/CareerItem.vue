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

      <span class="career-period">
        {{ career.period }}
      </span>
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
/* 회사 경력 카드 */
.career {
  margin-bottom: 32px;
  padding: 30px 32px;

  background: var(--resume-surface);
  border: 1px solid var(--resume-border);
  border-radius: 16px;

  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

/* 회사명과 기간 */
.career-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

.career-title h3 {
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.4;
}

/* 근무 기간 */
.career-period {
  flex-shrink: 0;
  color: var(--resume-muted);
  font-size: 14px;
}

/* 담당 직무 */
.position {
  margin: 8px 0 0;
  color: var(--resume-muted);
  font-size: 15px;
}

/* 모바일 */
@media (max-width: 640px) {
  .career {
    padding: 22px 20px;
    margin-bottom: 20px;
    border-radius: 12px;
  }

  .career-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .career-title h3 {
    font-size: 20px;
  }

  .career-period {
    font-size: 13px;
  }
}
</style>
