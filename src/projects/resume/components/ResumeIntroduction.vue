<script setup>
defineProps({
  profile: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="about" class="introduction">
    <p class="eyebrow">RESUME</p>

    <h1>{{ profile.name }}</h1>

    <p class="role">
      {{ profile.role }}
    </p>

    <p
        v-for="(paragraph, index) in profile.introduction"
        :key="index"
        class="intro-text"
    >
      {{ paragraph }}
    </p>
  </section>
</template>

<style scoped>
.introduction {
  padding: 72px 0;
  border-bottom: 1px solid #e5e5e5;
}

.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  color: #888;
}

.introduction h1 {
  margin: 12px 0;
  font-size: 38px;
  font-weight: 700;
}

.role {
  margin-bottom: 32px;
  font-size: 19px;
  color: #666;
}

.intro-text {
  margin: 10px 0;
  font-size: 16px;
}

@media (max-width: 640px) {
  .introduction {
    padding: 48px 0;
  }

  .introduction h1 {
    font-size: 29px;
  }
}
</style>
