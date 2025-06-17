import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ratnasonawaney5@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ratna, I am reaching out to you because...',

    oldPortfolio: 'https://www.instagram.com/rakhi_.1308',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ratna1308/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ratna-sonawane-6851562a6' },
    { name: 'facebook', url: 'https://www.facebook.com/share/19QdwWLB1e/' },
    { name: 'instagram', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    
    backend: [
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'C',
            icon: '/logo/c1.png',
        }
    ],
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html1.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgres.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.png',
        },
        {
            name: 'MariaDB',
            icon: '/logo/mariadb.png',
        },
        {
            name: 'SQLite',
            icon: '/logo/sql1.png',
        },
        {
            name: 'InfluxDB',
            icon: '/logo/influx.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Azure',
            icon: '/logo/azure.png',
        },
        {
            name: 'Postman API',
            icon: '/logo/postmanapi.png',
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
        thumbnail: '/projects/thumbnail/kone.png',
        longThumbnail: '/projects/long/kone.png',
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
        thumbnail: '/projects/thumbnail/team-main.png',
        longThumbnail: '/projects/long/team-main.png',
        images: [
            '/projects/images/team-gps2.png',
            '/projects/images/team-gps3.png',
            '/projects/images/team-gps4.png',
            '/projects/images/team-gps5.png',
            '/projects/images/team-gps6.png',
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
        thumbnail: '/projects/thumbnail/vodafone1.png',
        longThumbnail: '/projects/long/vodafone1.png',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
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
        slug: 'anamoly-detection',
        techStack: [
            'Python',
            'Jira',
            'Git',
            'Github',
            'Anamoly',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
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
        duration: 'May 2022 - Fev 2024',
    }
];
