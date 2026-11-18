<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="personal-project">

    <!-- 프로젝트 이름 및 상태 -->
    <div class="project-header">
      <div>
        <h3>{{ project.name }}</h3>

        <p v-if="project.period" class="period">
          {{ project.period }}
        </p>
      </div>

      <span v-if="project.status" class="status">
        {{ project.status }}
      </span>
    </div>

    <!-- 프로젝트 설명 -->
    <p class="description">
      {{ project.description }}
    </p>

    <!-- 주요 구현 기능 -->
    <div
        v-if="project.features?.length"
        class="project-detail"
    >
      <h4>주요 구현 기능</h4>

      <ul>
        <li
            v-for="feature in project.features"
            :key="feature"
        >
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- 기술 스택 -->
    <div
        v-if="project.technologies?.length"
        class="project-detail"
    >
      <h4>기술 스택</h4>

      <div
          v-for="group in project.technologies"
          :key="group.category"
          class="technology-group"
      >
        <h5>{{ group.category }}</h5>

        <div class="technologies">
          <span
              v-for="tech in group.items"
              :key="tech"
              class="tech"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- 프로젝트 링크 -->
    <div
        v-if="project.links?.length"
        class="project-links"
    >
      <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external
          ? 'noopener noreferrer'
          : undefined"
      >
        {{ link.label }}
      </a>
    </div>

  </article>
</template>

<style scoped>
.personal-project {
  padding: 30px 32px;
  margin-bottom: 24px;

  background: var(--resume-surface);
  border: 1px solid var(--resume-border);
  border-radius: 16px;

  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.project-header h3 {
  margin: 0;
  font-size: 21px;
}

.period {
  margin: 6px 0 0;
  color: var(--resume-muted);
  font-size: 13px;
}

.status {
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 20px;

  background: #eff6ff;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
}

.description {
  margin: 22px 0 0;
  color: var(--resume-muted);
  font-size: 15px;
}

.project-detail {
  margin-top: 26px;
}

.project-detail h4 {
  margin: 0 0 10px;
  font-size: 15px;
}

.project-detail ul {
  margin: 0;
  padding-left: 20px;
}

.project-detail li {
  margin-bottom: 6px;
  font-size: 14px;
}

.technology-group {
  margin-top: 14px;
}

.technology-group h5 {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--resume-muted);
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech {
  padding: 5px 11px;
  border: 1px solid #dbeafe;
  border-radius: 6px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 12px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.project-links a {
  padding: 9px 16px;
  border: 1px solid var(--resume-border);
  border-radius: 8px;

  color: var(--resume-accent);
  text-decoration: none;
  font-size: 14px;
}

.project-links a:hover {
  border-color: var(--resume-accent);
}

@media (max-width: 640px) {
  .personal-project {
    padding: 22px 20px;
  }

  .project-header {
    flex-direction: column;
    gap: 10px;
  }

  .project-header h3 {
    font-size: 18px;
  }
}
</style>
