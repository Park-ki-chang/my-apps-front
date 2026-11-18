<script setup>
import ResumeIntroduction from './components/ResumeIntroduction.vue'
import { profile } from './data/resume.js'

const careers = [
  {
    id: 1,
    company: '회사명',
    period: '근무 기간 입력',
    position: '담당 직무',
    projects: [
      {
        id: 1,
        name: '프로젝트명',
        period: '진행 기간 입력',
        description: '프로젝트에 대한 간단한 설명입니다.',
        tasks: [
          '주요 기능 개발 및 유지보수',
          '기존 시스템 개선'
        ],
        technologies: ['Java', 'Spring', 'Oracle']
      }
    ]
  }
]
</script>

<template>
  <main class="resume-page">
    <!-- 상단 메뉴 -->
    <header class="resume-header">
      <span class="brand">Resume</span>

      <nav aria-label="이력서 메뉴">
        <a href="#about">소개</a>
        <a href="#experience">경력</a>
      </nav>
    </header>

    <!-- 자기소개 -->
    <ResumeIntroduction :profile="profile" />

    <!-- 업무 경력 -->
    <section id="experience" class="experience">
      <h2>업무 경력</h2>

      <article
          v-for="career in careers"
          :key="career.id"
          class="career"
      >
        <div class="career-title">
          <h3>{{ career.company }}</h3>
          <span>{{ career.period }}</span>
        </div>

        <p class="position">{{ career.position }}</p>

        <div
            v-for="project in career.projects"
            :key="project.id"
            class="project"
        >
          <h4>{{ project.name }}</h4>
          <p class="period">{{ project.period }}</p>
          <p class="description">{{ project.description }}</p>

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
    </section>
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

/* 상단 메뉴 */
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

/* 자기소개 */
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

/* 업무 경력 */
.experience {
  padding-top: 65px;
}

.experience h2 {
  margin-bottom: 40px;
  font-size: 27px;
}

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

/* 모바일 대응 */
@media (max-width: 640px) {
  .introduction {
    padding: 48px 0;
  }

  .introduction h1 {
    font-size: 29px;
  }

  .career-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
