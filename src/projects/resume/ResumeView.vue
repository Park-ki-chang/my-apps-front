<script setup>
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeIntroduction from './components/ResumeIntroduction.vue'
import CareerList from './components/CareerList.vue'
import ResumeContact from './components/ResumeContact.vue'

import { profile, careers, navigation, contactLinks } from './data/resume.js'

import './styles/resume.css'
</script>

<template>
  <main class="resume-page">

    <!-- 상단 메뉴 -->
    <ResumeHeader :navigation="navigation" />

    <!-- 자기소개 -->
    <ResumeIntroduction :profile="profile" />

    <!-- 업무 경력 -->
    <CareerList :careers="careers" />

    <!-- 연락처 -->
    <ResumeContact :contact-links="contactLinks" />

  </main>
</template>
