import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ratnasonawaney5@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ratna, I am reaching out to you because...',

    upworkProfile: 'https://www.linkedin.com/in/ratna-sonawane-6851562a6',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ratna1308/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ratna-sonawane-6851562a6' },
];

export const MY_STACK = {
    
    backend: [
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        },
        {
            name: 'C',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        }
    ],
    frontend: [
        {
            name: 'HTML',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        },
        {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        },
        {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        },
        {
            name: 'MariaDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg',
        },
        {
            name: 'SQLite',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
        },
        {
            name: 'InfluxDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/influxdb/influxdb-original.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        },
        {
            name: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
        {
            name: 'Azure',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
        },
        {
            name: 'Postman API',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
        }
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Kone PyMicroServices',
        slug: 'pyMicroServices',
        year: 2024,
        description: `
        Automated processes with Python, developed AWS microservices, and built CI/CD pipelines. Used Azure DevOps for project management, version control, and deployment. <br/><br/>

        Key Features:<br/>
        <ul>
        <li>🧩 Microservices Architecture: Modular Python-based services for flexibility and scalability</li>
        <li>☁️ Multi-Service AWS Deployment: Services deployed across ECS, Lambda, and EC2</li>
        <li>🛡️ Load Balancing: Efficient traffic handling using AWS ALB</li>
        <li>🔁 CI/CD Automation: Continuous integration and delivery with Azure DevOps pipelines</li>
        <li>📊 Monitoring & Logs: Integrated cloud logs and dashboards for service health tracking</li>
        </ul><br/>

        Technical Highlights:
        <ul>
        <li>Python Script Automation: Implemented Python scripts to automate various processes, improving efficiency and reducing manual tasks.</li>
        <li>AWS Microservices: Worked on designing, developing, and maintaining multiple AWS microservices to meet project requirements.</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>CI/CD Pipeline: Developed and maintained CI/CD pipelines to automate the software development and deployment processes.</li>
        </ul>
        `,
        role: `
        Full-Stack Developer <br/>
        Owned the entire development lifecycle:
        <ul>
        <li>✅ Backend Development: Created microservices using Python for scalable and modular application architecture.</li>
        <li>🔧 CI/CD Pipeline: Implemented and managed CI/CD workflows using Azure DevOps for efficient automation.</li>
        <li>☁️ AWS Deployment: Deployed services across AWS (ECS, Lambda, EC2) tailored to specific application needs.</li>
        <li>🧭 Load Balancing: Configured Application Load Balancer (ALB) to ensure optimal traffic distribution and uptime.</li>
        <li>🚀 Cloud Integration: Streamlined integration and deployment across cloud environments for smooth releases.</li>
        </ul>
        `,
        techStack: [
            'Python',
            'AWS',
            'Azure',
            'postman',
            'SFTP server',
            'CICD',
            'Kafka',
            'Salesforce'
        ],
        thumbnail: '/projects/thumbnail/awsk1.png',
        longThumbnail: '/projects/long/awsk1.png',
        images: [
            '/projects/images/kone.png',
            '/projects/images/kone2.png',
        ],
    },
    {
        title: 'Team GPS',
        slug: 'team-gps',
        techStack: [
            'Python',
            'Django',
            'Api Integration',
            'postgresSQL',
            'Git',
            'Github',
            'SSO (Microsoft)',
        ],
        thumbnail: '/projects/thumbnail/team-gps7.png', 
        longThumbnail: '/projects/long/team-gps7.png',  
        images: [
        '/projects/images/team-gps4.png',
        '/projects/images/team-gps5.png',
        ],
        liveUrl: 'https://app.team-gps.net/',
        year: 2023,
        description: `
        Team GPS is a comprehensive tool developed to enhance employee management, performance tracking, and feedback collection within organizations.<br/><br/>
        It supports a wide range of features such as:
        <ul>
        <li>📊 Survey Builder: Create and manage custom surveys to gather actionable employee feedback</li>
        <li>🎯 Goal Management: Track individual and team goals with measurable KPIs</li>
        <li>📝 Meeting Management: Schedule, manage, and document meetings efficiently</li>
        <li>🏆 Employee Recognition: Enable real-time feedback and reward systems</li>
        <li>👥 User Management: Bulk user creation and SSO integration for seamless onboarding</li>
        </ul>
        `,
        role: `
        Python Backend Developer<br/>
        Key responsibilities included:
        <ul>
        <li>⚙️ Developed RESTful APIs using Django for survey creation, goal tracking, and meeting modules</li>
        <li>🔐 Integrated Single Sign-On (SSO) with Microsoft for secure and seamless user authentication</li>
        <li>🛠️ Optimized database queries and models using PostgreSQL for performance and scalability</li>
        <li>🔄 Collaborated with frontend and QA teams to ensure smooth feature integration and deployment</li>
        <li>📁 Version control and code collaboration using Git and GitHub</li>
        </ul>
        `
    },
    {
        title: 'Vodafone Automation',
        slug: 'vodafone-automation',
        techStack: [
            'Python',
            'PostgreSQL',
            'Postman',
            'Git',
            'Jira'
        ],
        thumbnail: '/projects/thumbnail/vi.jpg',
        longThumbnail: '/projects/long/vi.jpg',
        images: [
            '/projects/images/voda1.jpg',
            '/projects/images/voda2.jpg',
        ],
        year: 2025,
        description: `
        Vodafone Services Automation is an internal backend automation project designed to replace manual service configurations with automated workflows.<br/><br/>

        Previously, operations on circle-wise nodes were performed manually. This project centralized and automated those tasks through Python scripts, allowing the backend to automatically execute all necessary steps based on user-triggered actions.<br/><br/>

        Key Features:
        <ul>
        <li>⚙️ End-to-End Service Automation: All manual backend processes fully automated with Python</li>
        <li>📍 Circle-Based Node Execution: Dynamically processes configuration per Vodafone circle</li>
        <li>🔁 Workflow Integration: Combined multiple service steps into a single triggerable operation</li>
        <li>📦 Version Control: Scripts maintained and versioned for traceability and rollback</li>
        <li>🚀 Scalable Design: Efficient handling of concurrent service automation requests</li>
        </ul>
        `,
        role: `
        Backend Developer<br/>
        Responsibilities:
        <ul>
        <li>💻 Developed Python scripts to automate circle-wise node operations and service tasks</li>
        <li>🔗 Integrated previously manual steps into seamless backend automation workflows</li>
        <li>🛠️ Collaborated with cross-functional teams to define use cases and automation flows</li>
        <li>🚨 Handled script optimization, error handling, and performance tuning</li>
        <li>🔍 Used Git for version control and Jira for task tracking and collaboration</li>
        </ul>
        `
    },
    {
        title: 'Fraud Detection',
        slug: 'fraud-detection',
        techStack: [
            'Python',
            'Jira',
            'Git',
            'Github',
            'Anamoly',
        ],
        thumbnail: '/projects/thumbnail/fraud.jpg',
        longThumbnail: '/projects/long/fraud.jpg',
        images: [
            '/projects/images/transcation1.png',
            '/projects/images/transcation3.png',
            '/projects/images/transcation4.png',
        ],
        year: 2023,
        description: `
        Fraud Detection in Online Transactions is a backend development project in the finance domain, focused on enhancing transaction security through structured Python-based systems.<br/><br/>

        The system processes and validates large volumes of transaction data, identifying anomalies through rule-based logic and backend checks. The project emphasized clean data handling, robust API development, and reliable backend workflows to support fraud detection infrastructure.<br/><br/>

        Key Features:
        <ul>
        <li>🔐 Rule-Based Fraud Detection: Backend logic for flagging suspicious transactions</li>
        <li>📊 Data Handling: Securely processes and validates transaction data</li>
        <li>⚙️ API Development: Python-based APIs to expose fraud detection functionality</li>
        <li>🧹 Data Preprocessing: Cleansing and verifying integrity of transaction data</li>
        <li>📦 Modular Design: Maintainable, scalable backend architecture</li>
        </ul>
        `,
        role: `
        Backend Developer<br/>
        Responsibilities:
        <ul>
        <li>💻 Designed and developed Python-based backend services for fraud detection workflows</li>
        <li>🔗 Built APIs to expose backend functionality for integration with frontend or other systems</li>
        <li>🧹 Handled data preprocessing, cleansing, and validation routines</li>
        <li>🛠️ Ensured performance, reliability, and scalability of backend systems</li>
        <li>📁 Used Git for version control and followed collaborative development practices</li>
        </ul>
        `
    }
];


export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (backend)',
        company: 'Koli Infotech PVT LTD.',
        duration: 'Feb 2024 - Present',
    },
    {
        title: 'Software Engineer (backend)',
        company: '7EDGE',
        duration: 'May 2022 - Feb 2024',
    }
];
