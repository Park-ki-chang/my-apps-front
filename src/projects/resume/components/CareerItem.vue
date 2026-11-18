
<script setup>
defineProps({
  career: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="career">
    <div class="career-title">
      <h3>{{ career.company }}</h3>
      <span>{{ career.period }}</span>
    </div>

    <p class="position">
      {{ career.position }}
    </p>

    <div
        v-for="project in career.projects"
        :key="project.id"
        class="project"
    >
      <h4>{{ project.name }}</h4>

      <p class="period">
        {{ project.period }}
      </p>

      <p class="description">
        {{ project.description }}
      </p>

      <h5>담당 업무</h5>
      <ul>
        <li
            v-for="task in project.tasks"
            :key="task"
        >
          {{ task }}
        </li>
      </ul>

      <h5>사용 기술</h5>

      <div class="technologies">
        <span
            v-for="tech in project.technologies"
            :key="tech"
            class="tech"
        >
          {{ tech }}
        </span>
      </div>
    </div>
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

.career-title span,
.period {
  font-size: 14px;
  color: #888;
}

.position {
  margin-top: 8px;
  color: #666;
}

.project {
  margin-top: 28px;
  padding-left: 22px;
  border-left: 2px solid #ddd;
}

.project h4 {
  margin: 0;
  font-size: 19px;
}

.description {
  margin: 18px 0;
}

.project h5 {
  margin: 24px 0 8px;
  font-size: 15px;
}

.project ul {
  padding-left: 20px;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech {
  padding: 4px 10px;
  border-radius: 5px;
  background: #f3f3f3;
  font-size: 13px;
}

@media (max-width: 640px) {
  .career-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
