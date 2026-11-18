<script setup>
import ResumeHeader from "./components/ResumeHeader.vue";
import ResumeIntroduction from './components/ResumeIntroduction.vue'
import CareerList from "./components/CareerList.vue";

import { profile, careers } from './data/resume.js'

import './styles/resume.css'
</script>

<template>
  <main class="resume-page">
    <!-- 상단 메뉴 -->
    <ResumeHeader />

    <!-- 자기소개 -->
    <ResumeIntroduction :profile="profile" />

    <!-- 업무 경력 -->
    <CareerList :careers="careers" />

  </main>
</template>

<style scoped>
.resume-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px 100px;
  color: #242424;
  line-height: 1.8;
}

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
}

.resume-header nav {
  display: flex;
  gap: 24px;
}

.resume-header a {
  color: #555;
  text-decoration: none;
}
</style>
