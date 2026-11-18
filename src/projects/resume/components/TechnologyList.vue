<script setup>
defineProps({
  technologies: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="technology-list">
    <!-- 기술 카테고리 반복 -->
    <div
        v-for="group in technologies"
        :key="group.category"
        class="technology-group"
    >
      <p class="category">
        {{ group.category }}
      </p>

      <!-- 카테고리별 기술 목록 -->
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
</template>

<style scoped>
.technology-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.technology-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category {
  margin: 0;
  color: var(--resume-muted);
  font-size: 13px;
  font-weight: 600;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech {
  display: inline-block;
  padding: 5px 11px;

  background: #eff6ff;
  color: #1d4ed8;

  border: 1px solid #dbeafe;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 640px) {
  .tech {
    padding: 4px 9px;
    font-size: 12px;
  }
}
</style>
