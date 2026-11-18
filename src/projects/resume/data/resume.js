
export const profile = {
    name: '이름을 입력하세요',
    role: '웹 개발자',
    introduction: [
        '안녕하세요. 웹 서비스를 개발하고 운영하는 개발자입니다.',
        '제가 참여한 프로젝트와 담당 업무를 소개합니다.'
    ]
}

export const careers = [
    {
        id: 1,
        company: '회사 B',
        period: '2025.01 ~ 현재',
        position: '웹 개발자',
        projects: [
            {
                id: 1,
                name: '프로젝트 A',
                period: '2025.01 ~ 현재',
                description: '웹 서비스 개발 및 운영',
                role: '백엔드 개발 및 운영',
                tasks: [
                    '신규 기능 개발',
                    '기존 시스템 유지보수'
                ],
                achievements: [
                    '반복되는 로직을 정리하여 유지보수성 개선'
                ],
                technologies: [
                    {
                        category: 'Backend',
                        items: ['Java', 'Spring', 'MyBatis']
                    },
                    {
                        category: 'Database',
                        items: ['Oracle']
                    },
                    {
                        category: 'Tools',
                        items: ['IntelliJ', 'Git']
                    }
                ]
            },
            {
                id: 2,
                name: '프로젝트 B',
                period: '2025.06 ~ 현재',
                description: '관리자 웹 화면 개발',
                role: '프론트엔드 개발',
                tasks: [
                    '사용자 화면 개발',
                    'API 연동'
                ],
                achievements: [],
                technologies: [
                    {
                        category: 'Frontend',
                        items: ['Vue 3', 'JavaScript']
                    },
                    {
                        category: 'Tools',
                        items: ['Vite', 'Git']
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        company: '회사 A',
        period: '2022.01 ~ 2024.12',
        position: '웹 개발자',
        projects: [
            {
                id: 1,
                name: '프로젝트 C',
                period: '2022.03 ~ 2024.12',
                description: '업무 관리 시스템 개발',
                role: '웹 애플리케이션 개발',
                tasks: [
                    '업무 화면 개발',
                    '데이터 조회 및 저장 기능 구현'
                ],
                achievements: [],
                technologies: [
                    {
                        category: 'Backend',
                        items: ['Java', 'Spring', 'MyBatis']
                    },
                    {
                        category: 'Database',
                        items: ['Oracle']
                    }
                ]
            }
        ]
    }
]
