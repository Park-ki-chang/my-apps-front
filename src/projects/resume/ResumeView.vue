<script setup>
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeIntroduction from './components/ResumeIntroduction.vue'
import CareerList from './components/CareerList.vue'
import PersonalProjectList from './components/PersonalProjectList.vue'
import ResumeContact from './components/ResumeContact.vue'

import {
  profile,
  careers,
  personalProjects,
  navigation,
  contactLinks
} from './data/resume.js'

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

    <!-- 개인 프로젝트 -->
    <PersonalProjectList :projects="personalProjects" />

    <!-- 연락처 -->
    <ResumeContact :contact-links="contactLinks" />

  </main>
</template>
