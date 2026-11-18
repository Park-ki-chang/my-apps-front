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
        company: '회사명',
        period: '2023.01 ~ 현재',
        position: '웹 개발자',
        projects: [
            {
                id: 1,
                name: '프로젝트 A',
                period: '2023.01 ~ 2024.12',
                description: '웹 서비스 구축 프로젝트',
                tasks: [
                    '신규 기능 개발',
                    '기존 시스템 유지보수'
                ],
                technologies: [
                    'Java', 'Spring', 'Oracle'
                ]
            },
            {
                id: 2,
                name: '프로젝트 B',
                period: '2025.01 ~ 현재',
                description: '웹 시스템 운영 프로젝트',
                tasks: [
                    '시스템 운영 및 장애 대응',
                    '기능 개선'
                ],
                technologies: [
                    'Java', 'MyBatis', 'Oracle'
                ]
            }
        ]
    }
]
