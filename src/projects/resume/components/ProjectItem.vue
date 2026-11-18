
<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="project">
    <!-- 프로젝트 이름 -->
    <h4>{{ project.name }}</h4>

    <!-- 프로젝트 기간 -->
    <p class="period">
      {{ project.period }}
    </p>

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
        v-if="project.tasks && project.tasks.length > 0"
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
        v-if="project.achievements && project.achievements.length > 0"
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
        v-if="project.technologies && project.technologies.length > 0"
        class="detail"
    >
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
  </section>
</template>

<style scoped>
.project {
  margin-top: 28px;
  padding-left: 22px;
  border-left: 2px solid #ddd;
}

.project h4 {
  margin: 0;
  font-size: 19px;
}

.period {
  margin: 4px 0 0;
  color: #888;
  font-size: 14px;
}

.description {
  margin: 18px 0;
}

.detail {
  margin-top: 24px;
}

.detail h5 {
  margin: 0 0 8px;
  font-size: 15px;
}

.detail p {
  margin: 0;
}

.detail ul {
  margin: 0;
  padding-left: 20px;
}

.detail li {
  margin-bottom: 4px;
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
</style>
