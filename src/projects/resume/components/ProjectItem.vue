<script setup>
import TechnologyList from './TechnologyList.vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="project">

    <!-- 프로젝트 제목과 기간 -->
    <div class="project-heading">
      <h4>{{ project.name }}</h4>

      <span class="period">
        {{ project.period }}
      </span>
    </div>

    <!-- 프로젝트 설명 -->
    <p class="description">
      {{ project.description }}
    </p>

    <!-- 담당 역할 -->
    <div v-if="project.role" class="detail">
      <h5>담당 역할</h5>
      <p>{{ project.role }}</p>
    </div>

    <!-- 담당 업무 -->
    <div
        v-if="project.tasks?.length"
        class="detail"
    >
      <h5>담당 업무</h5>

      <ul>
        <li
            v-for="task in project.tasks"
            :key="task"
        >
          {{ task }}
        </li>
      </ul>
    </div>

    <!-- 주요 성과 -->
    <div
        v-if="project.achievements?.length"
        class="detail"
    >
      <h5>주요 성과</h5>

      <ul>
        <li
            v-for="achievement in project.achievements"
            :key="achievement"
        >
          {{ achievement }}
        </li>
      </ul>
    </div>

    <!-- 사용 기술 -->
    <div
        v-if="project.technologies?.length"
        class="detail"
    >
      <h5>사용 기술</h5>

      <TechnologyList
          :technologies="project.technologies"
      />
    </div>

  </section>
</template>

<style scoped>
.project {
  margin-top: 26px;
  padding-top: 24px;
  border-top: 1px solid var(--resume-border);
}

.project-heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

.project-heading h4 {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5;
}

.period {
  flex-shrink: 0;
  color: var(--resume-muted);
  font-size: 13px;
}

.description {
  margin: 12px 0 0;
  color: var(--resume-muted);
  font-size: 15px;
}

.detail {
  margin-top: 22px;
}

.detail h5 {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
}

.detail p {
  margin: 0;
  font-size: 14px;
}

.detail ul {
  margin: 0;
  padding-left: 20px;
}

.detail li {
  margin-bottom: 5px;
  font-size: 14px;
}

@media (max-width: 640px) {
  .project-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .project-heading h4 {
    font-size: 17px;
  }

  .description {
    font-size: 14px;
  }
}
</style>
