<script setup>
defineProps({
  contactLinks: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="contact" class="resume-contact">
    <h2>연락처</h2>

    <p class="contact-description">
      아래 링크를 통해 연락하거나 개발 활동을 확인할 수 있습니다.
    </p>

    <div class="contact-links">
      <a
          v-for="link in contactLinks"
          :key="link.id"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          :aria-label="link.external
          ? link.label + ' (새 창에서 열림)'
          : link.label"
          class="contact-link"
      >
        {{ link.label }}
        <span aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.resume-contact {
  padding-top: 60px;
  border-top: 1px solid var(--resume-border);
}

.resume-contact h2 {
  margin: 0 0 14px;
  font-size: 27px;
}

.contact-description {
  color: var(--resume-muted);
  font-size: 15px;
  margin-bottom: 28px;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;

  padding: 10px 18px;

  color: var(--resume-text);
  background: var(--resume-surface);
  border: 1px solid var(--resume-border);
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  transition:
      border-color 0.2s,
      color 0.2s;
}

.contact-link:hover {
  color: var(--resume-accent);
  border-color: var(--resume-accent);
}

.contact-link:focus-visible {
  outline: 2px solid var(--resume-accent);
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .resume-contact {
    padding-top: 40px;
  }

  .resume-contact h2 {
    font-size: 23px;
  }

  .contact-link {
    padding: 9px 14px;
    font-size: 13px;
  }
}
</style>
