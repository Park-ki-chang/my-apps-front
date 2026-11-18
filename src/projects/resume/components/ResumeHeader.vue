<script setup>
const navigation = [
  { label: '소개', href: '#about' },
  { label: '경력', href: '#experience' }
]
</script>

<template>
  <header class="resume-header">
    <a href="#about" class="brand">
      Resume
    </a>

    <nav aria-label="이력서 메뉴">
      <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  border-bottom: 1px solid #eee;
}

.brand {
  font-size: 18px;
  font-weight: 700;
  color: #242424;
  text-decoration: none;
}

.resume-header nav {
  display: flex;
  gap: 24px;
}

.resume-header nav a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}

.resume-header nav a:hover {
  color: #111;
}

@media (max-width: 640px) {
  .resume-header {
    padding: 20px 0;
  }

  .resume-header nav {
    gap: 16px;
  }
}
</style>
