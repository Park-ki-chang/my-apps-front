import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/resume'
    },
    {
        path: '/resume',
        name: 'resume',
        component: () =>
            import('../projects/resume/ResumeView.vue')
    },
    {
        path: '/govview',
        name: 'govview',
        component: () =>
            import('../projects/govview/GovView.vue')
    },
    {
        path: '/pkcstudio',
        name: 'pkcstudio',
        component: () =>
            import('../projects/pkcstudio/PkcStudioView.vue')
    },
    {
        path: '/dealerportal',
        name: 'dealerportal',
        component: () =>
            import('../projects/dealerportal/DealerPortalView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
