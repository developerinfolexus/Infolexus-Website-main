import mobileAppImg from '../assets/mobile1.jpeg';
import uiuxImg from '../assets/uiux2.jpeg';
import customWebImg from '../assets/custom.jpeg';
import erpImg from '../assets/erp.jpeg';
import dataAnalyticsImg from '../assets/dataanalystic.jpeg';

import aiMlImg from '../assets/Ai&ml.jpeg';
import webDevImg from '../assets/webimage.jpeg';
import cloudImg from '../assets/abstract-background-of-digital-technologies-vector-56508182.avif';
import testingImg from '../assets/testing_qa_v2.png';
import itSupportImg from '../assets/it_support_247_v2.png';
import cyberSecImg from '../assets/cyber_security_hero.png';

export const serviceDetails = {
    'ma-01': {
        title: "Mobile Application Development",
        subtitle: "Native & Cross-Platform Excellence for the Mobile-First Era",
        description: "In a world where mobile traffic dominates, your app is often the primary touchpoint for your customers. We don't just build apps. We engineer mobile experiences that are intuitive, engaging, and performant. Whether you need a high-performance native application for iOS and Android or a cost-effective cross-platform solution using Flutter or React Native, our team delivers pixel-perfect code. We handle the entire lifecycle from concept validation and UX prototyping to App Store submission and post-launch maintenance, ensuring your app scales with your user base.",
        features: [
            "Native iOS Development (Swift, SwiftUI)",
            "Native Android Development (Kotlin, Jetpack Compose)",
            "Cross-Platform Solutions (Flutter, React Native)",
            "Real-time Chat & Communication Features",
            "Geolocation & Maps Integration",
            "Secure Payment Gateway Integration",
            "Offline Mode & Local Database Sync",
            "Push Notifications & User Engagement Logic",
            "Wearable & IoT Device Connectivity"
        ],
        benefits: [
            "Reach a wider audience with dual-platform support",
            "Enhance brand loyalty through superior UX",
            "Open new revenue channels via in-app purchases"
        ],
        process: [
            { title: "Discovery & Strategy", desc: "We analyze your market, competitors, and user persona to define the app's core value proposition." },
            { title: "Wireframing & UX", desc: "Creating low-fidelity blueprints to map out user journeys and interaction flows." },
            { title: "Visual Design (UI)", desc: "Applying your brand identity to create stunning, high-fidelity interface designs." },
            { title: "Agile Development", desc: "Iterative coding sprints with regular builds for your review and feedback." },
            { title: "QA & Testing", desc: "Rigorous automated and manual testing across a farm of real devices." },
            { title: "Launch & Growth", desc: "App Store optimization (ASO), submission handling, and analytics setup." }
        ],
        technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL", "SQLite"],
        image: mobileAppImg
    },
    'cw-02': {
        title: "Custom Web Application",
        subtitle: "Tailored Software for Business Critical Operations",
        description: "Off-the-shelf software often forces you to change your business processes to fit the tool. We build custom web applications that fit your business like a glove. From complex enterprise resource planning (ERP) dashboards to customer-facing portals and SaaS platforms, we utilize modern full-stack technologies to create secure, scalable, and responsive web solutions. We prioritize clean architecture, ensuring your application is easy to maintain and ready to grow as your business requirements evolve.",
        features: [
            "SaaS (Software as a Service) Platform Development",
            "Progressive Web Apps (PWA) for Offline Access",
            "Single Page Applications (SPA) for Fluid UX",
            "Secure Customer & Vendor Portals",
            "Real-time Dashboards & Data Visualization",
            "API-First Architecture & Third-Party Integrations",
            "Role-Based Access Control (RBAC) Systems",
            "Cloud-Native Serverless Architecture"
        ],
        benefits: [
            "Automate unique business workflows",
            "Reduce licensing costs of multiple SaaS tools",
            "Own your data and technology IP"
        ],
        process: [
            { title: "Requirements Gathering", desc: "Deep dive workshops to document every functional and non-functional requirement." },
            { title: "System Architecture", desc: "Designing a robust database schema and server infrastructure plan." },
            { title: "Frontend Development", desc: "Building responsive, accessible, and interactive client-side interfaces." },
            { title: "Backend Development", desc: "Engineering secure APIs, business logic, and database integrations." },
            { title: "Integration Testing", desc: "Ensuring all modules and external services communicate flawlessly." },
            { title: "Deployment & Scale", desc: "Setting up CI/CD pipelines and auto-scaling cloud infrastructure." }
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Next.js", "Redis", "Docker"],
        image: customWebImg
    },
    'es-03': {
        title: "Enterprise Solutions (ERP/CRM)",
        subtitle: "Integrated Systems for Large Scale Operations",
        description: "Optimize your organizational efficiency with our custom ERP and CRM solutions. We help you break down data silos, automate routine tasks, and get a 360-degree view of your business operations and customer relationships.",
        features: [
            "Custom ERP Development & Implementation",
            "CRM Customization & Integration (Salesforce, HubSpot)",
            "Supply Chain & Inventory Management Systems",
            "HR & Payroll Automation Modules",
            "Business Intelligence & Reporting Dashboards",
            "Legacy System Modernization"
        ],
        process: [
            { title: "Workflow Audit", desc: "Analyzing current bottlenecks in operations." },
            { title: "Solution Design", desc: "Blueprint for a unified digital ecosystem." },
            { title: "Module Dev", desc: "Building and testing individual functional units." },
            { title: "Training", desc: "Onboarding staff specifically for the new system." }
        ],
        technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Java", ".NET", "Python"],
        image: erpImg
    },
    'ai-04': {
        title: "AI & Machine Learning",
        subtitle: "Intelligent Algorithms for Smarter Decisions",
        description: "Unlock the power of data with our advanced AI and ML services. We build predictive models, recommendation engines, and natural language processing systems that help you automate decision-making and uncover hidden insights.",
        features: [
            "Predictive Analytics & Forecasting Models",
            "Natural Language Processing (NLP) & Chatbots",
            "Computer Vision & Image Recognition",
            "Recommendation Engines for E-commerce",
            "Process Automation (RPA)",
            "Generative AI Integration (LLMs)"
        ],
        process: [
            { title: "Data Prep", desc: "Cleaning and structuring data for training." },
            { title: "Modeling", desc: "Selecting and training appropriate algorithms." },
            { title: "Validation", desc: "Testing accuracy against real-world scenarios." },
            { title: "Integration", desc: "Embedding models into application workflows." }
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "Hugging Face"],
        image: aiMlImg
    },
    'ui-05': {
        title: "UI/UX Design",
        subtitle: "Designing Experiences that Convert",
        description: "We blend aesthetics with usability to create digital products that users love. Our design process focuses on empathy, clarity, and engagement, ensuring every interaction feels intuitive and every pixel serves a purpose.",
        features: [
            "User Research & Persona Mapping",
            "Information Architecture & Wireframing",
            "Interactive Prototyping",
            "High-Fidelity UI Design Systems",
            "Usability Testing & Iteration",
            "Micro-interactions & Motion Design"
        ],
        process: [
            { title: "Empathize", desc: "Understanding the user's pain points." },
            { title: "Define", desc: "Establishing clear design goals." },
            { title: "Ideate", desc: "Brainstorming creative solutions." },
            { title: "Prototype", desc: "Creating testable design artifacts." }
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "Protopie", "After Effects", "Miro"],
        image: uiuxImg
    },
    'da-06': {
        title: "Data Analytics",
        subtitle: "Turning Raw Data into Actionable Insights",
        description: "Stop guessing and start knowing. Our data analytics services help you collect, visualize, and interpret data to drive strategic business growth. We turn complex datasets into clear, interactive dashboards.",
        features: [
            "Data Warehousing & ETL Pipelines",
            "Interactive Business Intelligence Dashboards",
            "Real-time Data Streaming & Visualization",
            "Customer Behavior Analysis",
            "Performance & KPI Tracking",
            "Scalable Big Data Infrastructure"
        ],
        process: [
            { title: "Collection", desc: "Aggregating data from multiple sources." },
            { title: "Processing", desc: "Cleaning and transforming raw data." },
            { title: "Analysis", desc: "Applying statistical methods to find trends." },
            { title: "Visualization", desc: "Presenting findings in clear reports." }
        ],
        technologies: ["Tableau", "PowerBI", "Looker", "Apache Spark", "Snowflake", "Python (Pandas)"],
        image: dataAnalyticsImg
    },
    'ic-07': {
        title: "Infrastructure & Cloud",
        subtitle: "Reliable, Scalable, and Secure Foundation",
        description: "Build your business on a rock-solid foundation. We design and manage cloud architectures that are secure, cost-effective, and infinitely scalable, ensuring your applications are always up and running.",
        features: [
            "Cloud Migration Strategy (AWS, Azure, GCP)",
            "DevOps, CI/CD & Automation",
            "Serverless Architecture Implementation",
            "Containerization (Docker & Kubernetes)",
            "Infrastructure as Code (Terraform)",
            "24/7 Cloud Monitoring & Optimization"
        ],
        process: [
            { title: "Assessment", desc: "Reviewing current infrastructure needs." },
            { title: "Planning", desc: "Designing a cloud-native roadmap." },
            { title: "Migration", desc: "Moving assets with zero downtime." },
            { title: "Management", desc: "Ongoing monitoring and scaling." }
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        image: cloudImg
    },
    'qa-08': {
        title: "Testing & QA",
        subtitle: "Flawless Performance, Guaranteed",
        description: "Bugs cost money and reputation. Our dedicated QA team ensures your software is bulletproof before it hits the market. We use a mix of automated and manual testing to cover every edge case.",
        features: [
            "Automated Testing Suites",
            "Manual Functional & UI Testing",
            "Performance & Load Testing",
            "Security Vulnerability Assessment",
            "API Testing",
            "Mobile App Compatibility Testing"
        ],
        process: [
            { title: "Planning", desc: "Defining test cases and acceptance criteria." },
            { title: "Execution", desc: "Running automated and manual tests." },
            { title: "Reporting", desc: "Documenting bugs and performance issues." },
            { title: "Retesting", desc: "Verifying fixes before release." }
        ],
        technologies: ["Selenium", "Cypress", "Jest", "Appium", "JMeter", "Postman"],
        image: testingImg
    },
    'wd-09': {
        title: "Web Development",
        subtitle: "Captivating Websites that Drive Growth",
        description: "Your website is your digital storefront. We build stunning, responsive, and SEO-optimized websites that tell your brand story and convert visitors into loyal customers.",

        features: [
            "Corporate & Brand Website Development",
            "E-commerce Stores (Shopify, WooCommerce)",
            "CMS Development (WordPress, Strapi)",
            "Responsive & Mobile-First Design",
            "Web Accessibility (WCAG) Compliance",
            "Speed Optimization & Core Web Vitals"
        ],
        process: [
            { title: "Strategy", desc: "Defining site structure and content." },
            { title: "Design", desc: "Creating visual mockups and layouts." },
            { title: "Development", desc: "Coding the frontend and backend." },
            { title: "Launch", desc: "Live deployment and indexing." }
        ],
        technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Next.js", "HTML5", "CSS3"],
        image: webDevImg
    },
    'it-10': {
        title: "IT Support",
        subtitle: "24/7 Reliability for Your Business",
        description: "Downtime is not an option. Our managed IT support services ensure your systems are always operational, secure, and up-to-date, allowing you to focus on your core business.",
        features: [
            "24/7 Helpdesk & Remote Support",
            "Network Security & Management",
            "Data Backup & Disaster Recovery",
            "Hardware & Software Procurement",
            "Cybersecurity Monitoring",
            "Employee Onboarding & Access Management"
        ],
        process: [
            { title: "Audit", desc: "Checking current IT health." },
            { title: "Setup", desc: "Installing monitoring tools." },
            { title: "Support", desc: "Immediate response to tickets." },
            { title: "Maintenance", desc: "Regular patching and updates." }
        ],
        technologies: ["Jira Service Desk", "TeamViewer", "Active Directory", "Cisco", "Sophos", "Office 365"],
        image: itSupportImg
    },
    'dm-11': undefined, // Removed DM as it has its own page
    'security': {
        title: "Cyber Security Services",
        subtitle: "Protect Your Digital Assets 24/7",
        description: "In an era of increasing cyber threats, security is not an option—it's a necessity. We provide comprehensive cybersecurity solutions that protect your infrastructure, data, and users from evolving threats. From vulnerability assessments to real-time monitoring and incident response, we ensure your business remains resilient against attacks.",
        features: [
            "Vulnerability Assessment & Penetration Testing (VAPT)",
            "Security Operations Center (SOC) as a Service",
            "Identity & Access Management (IAM)",
            "Cloud Security Posture Management",
            "Endpoint Detection & Response (EDR)",
            "Compliance Audits (GDPR, ISO 27001)"
        ],
        process: [
            { title: "Assess", desc: "Identifying vulnerabilities and risks." },
            { title: "Protect", desc: "Implementing defense mechanisms." },
            { title: "Monitor", desc: "24/7 surveillance of network traffic." },
            { title: "Respond", desc: "Rapid action on detected threats." }
        ],
        technologies: ["Splunk", "CrowdStrike", "Wireshark", "Nessus", "Burp Suite", "AWS Security Hub"],
        image: cyberSecImg
    },
    'ecommerce': {
        title: "E-Commerce Development",
        subtitle: "Scalable Online Stores that Sell",
        description: "Transform your retail business with a powerful, custom-built e-commerce platform. Whether you prefer the flexibility of WooCommerce or the robustness of Shopify, we build online stores that are secure, fast, and optimized for conversions. From inventory management to payment gateway integration, we handle the technical complexity so you can focus on selling.",
        features: [
            "Custom Store Design & Development",
            "Shopify & WooCommerce Experts",
            "Payment Gateway Integration",
            "Inventory & Order Management",
            "Mobile-Responsive Shopping Experience",
            "SEO & Conversion Rate Optimization"
        ],
        process: [
            { title: "Plan", desc: "Defining product catalog & features." },
            { title: "Design", desc: "Creating a user-friendly storefront." },
            { title: "Develop", desc: "Setting up cart, checkout, and payments." },
            { title: "Launch", desc: "Testing and going live." }
        ],
        technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "React"],
        image: customWebImg
    },
    'cms': {
        title: "CMS Development",
        subtitle: "Manage Your Content with Ease",
        description: "Take control of your website with a robust Content Management System (CMS). We specialize in WordPress, Drupal, and modern headless CMS solutions like Strapi. Our CMS solutions are designed for non-technical users, allowing you to easily update text, images, and products without writing a single line of code.",
        features: [
            "Custom WordPress Theme Development",
            "Headless CMS Implementation",
            "Plugin & Module Development",
            "Content Migration Services",
            "Multi-language Support",
            "Role-Based Access Control"
        ],
        process: [
            { title: "Select", desc: "Choosing the right CMS platform." },
            { title: "Theme", desc: "Designing a custom look and feel." },
            { title: "Build", desc: "Developing templates and features." },
            { title: "Train", desc: "Teaching your team to update content." }
        ],
        technologies: ["WordPress", "Drupal", "Strapi", "Contentful", "PHP", "React"],
        image: webDevImg
    },
    'accounting-sales': {
        title: "Accounting & Sales Automation",
        subtitle: "Streamline Your Financials and Close Deals Faster",
        description: "Eliminate manual data entry and accelerate your sales cycle. We build and integrate custom accounting software and sales automation tools that talk to each other. From automated invoicing and expense tracking to intelligent CRM workflows that nurture leads, our solutions ensure your financial and sales data is accurate, accessible, and working for you.",
        features: [
            "Automated Invoicing & Billing",
            "Expense Tracking & Reporting",
            "Sales Pipeline Automation",
            "Lead Scoring & Routing",
            "Integration with QuickBooks/Xero",
            "Real-time Financial Dashboards"
        ],
        process: [
            { title: "Map", desc: "Analyzing current financial and sales flows." },
            { title: "Automate", desc: "Implementing scripts and workflows." },
            { title: "Integrate", desc: "Connecting CRM with Accounting tools." },
            { title: "Train", desc: "Empowering teams to use the new system." }
        ],
        technologies: ["QuickBooks API", "Xero", "Salesforce", "Zapier", "Python", "React"],
        image: erpImg
    },
    'lms': {
        title: "LMS Platforms",
        subtitle: "Empower Learning and Development at Scale",
        description: "Deliver impactful training experiences with our custom Learning Management Systems (LMS). Whether for employee onboarding, compliance training, or educational courses, we build intuitive platforms that support video lessons, quizzes, progress tracking, and certification, all accessible from any device.",
        features: [
            "Course Creation & Management",
            "User Progress Tracking",
            "Interactive Quizzes & Assessments",
            "Live Webinar Integration",
            "Certification & Badging",
            "Mobile Learning Support"
        ],
        process: [
            { title: "Structure", desc: "Defining course hierarchy and user roles." },
            { title: "Develop", desc: "Building the portal and player interface." },
            { title: "Content", desc: "Uploading and organizing learning materials." },
            { title: "Launch", desc: "Rolling out to learners." }
        ],
        technologies: ["Moodle", "LearnDash", "React", "Node.js", "AWS S3", "Vimeo API"],
        image: customWebImg
    },
    'hrm': {
        title: "HRM Systems",
        subtitle: "Optimize Your Most Valuable Asset: Your People",
        description: "Modernize your Human Resources with a comprehensive HRM system. We digitize the entire employee lifecycle, from recruitment and onboarding to payroll, attendance, and performance reviews. Our secure and compliant solutions reduce administrative burden and improve employee satisfaction.",
        features: [
            "Employee Database & Self-Service",
            "Payroll & Tax Automation",
            "Attendance & Leave Management",
            "Recruitment & Applicant Tracking (ATS)",
            "Performance Appraisal Modules",
            "Document Management"
        ],
        process: [
            { title: "Analyze", desc: "Understanding HR policies and workflows." },
            { title: "Digitize", desc: "Migrating employee data to the cloud." },
            { title: "Implement", desc: "Setting up payroll and rules." },
            { title: "Support", desc: "Ongoing maintenance and updates." }
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Python"],
        image: erpImg
    },
    'testing-automation': {
        title: "Manual & Automation Testing",
        subtitle: "Comprehensive QA for Flawless Software Delivery",
        description: "Quality is non-negotiable. Our hybrid testing approach combines the meticulous eye of manual testers with the speed and efficiency of automation. We cover everything from functional and UI testing to regression suites, ensuring your software is bug-free and release-ready.",
        features: [
            "Functional & Regression Testing",
            "Test Automation Framework Design",
            "Cross-Browser & Cross-Platform Testing",
            "Mobile App Testing (iOS/Android)",
            "Bug Tracking & Reporting",
            "User Acceptance Testing (UAT)"
        ],
        process: [
            { title: "Plan", desc: "Defining test strategy and scope." },
            { title: "Script", desc: "Writing automation scripts." },
            { title: "Execute", desc: "Running tests in CI/CD pipeline." },
            { title: "Report", desc: "Detailed bug analysis and metrics." }
        ],
        technologies: ["Selenium", "Appium", "Playwright", "Jira", "TestRail", "Java"],
        image: testingImg
    },
    'cicd-api': {
        title: "CI/CD & API Testing",
        subtitle: "Accelerate Delivery with Continuous Quality",
        description: "Speed up your release cycles without compromising quality. We implement robust CI/CD pipelines that automatically build, test, and deploy your code. Combined with rigorous API testing, we ensure your backend services are performant, secure, and reliable.",
        features: [
            "CI/CD Pipeline Setup (Jenkins, GitHub Actions)",
            "Automated API Functional Testing",
            "Load & Performance Testing",
            "Docker Containerization",
            "Infrastructure as Code",
            "Release Management"
        ],
        process: [
            { title: "Design", desc: "Architecting the delivery pipeline." },
            { title: "Automate", desc: "Scripting build and test stages." },
            { title: "Verify", desc: "Ensuring API contract compliance." },
            { title: "Deploy", desc: "Automated push to staging/production." }
        ],
        technologies: ["Jenkins", "Postman", "RestAssured", "Docker", "Kubernetes", "AWS CodePipeline"],
        image: cloudImg
    },
    'hosting-maintenance': {
        title: "Hosting & Maintenance",
        subtitle: "Secure Hosting and Proactive Care",
        description: "Keep your digital presence online and optimized. We provide managed hosting solutions ensuring high availability and speed. Our maintenance packages include regular updates, backups, and security patches so you never have to worry about downtime or data loss.",
        features: [
            "Managed Cloud Hosting (AWS/DigitalOcean)",
            "SSL Certificate Management",
            "Daily Off-site Backups",
            "Server Optimization & Caching",
            "CMS & Plugin Updates",
            "Uptime Monitoring"
        ],
        process: [
            { title: "Migrate", desc: "Moving site to optimized servers." },
            { title: "Secure", desc: "Hardening server security." },
            { title: "Monitor", desc: "24/7 uptime tracking." },
            { title: "Update", desc: "Routine patches and maintenance." }
        ],
        technologies: ["AWS", "DigitalOcean", "Cloudflare", "Nginx", "Linux", "cPanel"],
        image: itSupportImg
    },
    'devops': {
        title: "DevOps Services",
        subtitle: "Bridging Development and Operations",
        description: "Transform your software delivery with DevOps culture and tools. We help you break down silos between dev and ops teams, automating workflows to ship faster and more reliably. From infrastructure provisioning to monitoring, we handle the entire lifecycle.",
        features: [
            "Infrastructure as Code (Terraform/Ansible)",
            "Container Orchestration (Kubernetes)",
            "Monitoring & Logging Setup",
            "Cloud Cost Optimization",
            "Security Integration (DevSecOps)",
            "Incident Management"
        ],
        process: [
            { title: "Audit", desc: "Assessing current maturity." },
            { title: "Automate", desc: "Implementing toolchain." },
            { title: "Scale", desc: "Managing clusters and resources." },
            { title: "Improve", desc: "Continuous feedback loop." }
        ],
        technologies: ["Kubernetes", "Docker", "Terraform", "Prometheus", "Grafana", "AWS"],
        image: cloudImg
    },
    'monitoring-cloud': {
        title: "Monitoring & Cloud",
        subtitle: "Real-time Visibility and Cloud Excellence",
        description: "You can't manage what you don't measure. We implement comprehensive monitoring solutions that give you real-time visibility into your system's health. Combined with our cloud expertise, we ensure your infrastructure is scalable, resilient, and cost-efficient.",
        features: [
            "Application Performance Monitoring (APM)",
            "Log Aggregation & Analysis",
            "Server Health Metrics",
            "Cloud Architecture Review",
            "Disaster Recovery Planning",
            "Auto-scaling Configuration"
        ],
        process: [
            { title: "Instrument", desc: "Installing agents and tracers." },
            { title: "Visualize", desc: "Creating operational dashboards." },
            { title: "Alert", desc: "Setting up critical notifications." },
            { title: "Optimize", desc: "Tuning resources based on data." }
        ],
        technologies: ["Datadog", "New Relic", "ELK Stack", "AWS CloudWatch", "Nagios", "PagerDuty"],
        image: cloudImg
    },
    'it-support': {
        title: "IT Support Services",
        subtitle: "Expert Technical Assistance On-Demand",
        description: "Technology issues shouldn't stop your business. Our IT support team is on standby to resolve hardware, software, and network issues quickly. We act as your internal IT department, providing remote and on-site support to keep your workforce productive.",
        features: [
            "Remote Application Support",
            "Hardware Diagnosis & Repair",
            "Network Connectivity Troubleshooting",
            "Email & Office 365 Support",
            "Virus & Malware Removal",
            "User Training & Documentation"
        ],
        process: [
            { title: "Ticket", desc: "Logging the issue via portal." },
            { title: "Triage", desc: "Prioritizing based on severity." },
            { title: "Resolve", desc: "Fixing the root cause." },
            { title: "Verify", desc: "Confirming resolution with user." }
        ],
        technologies: ["TeamViewer", "AnyDesk", "ServiceNow", "Windows", "MacOS", "Office 365"],
        image: itSupportImg
    },
    'maintenance': {
        title: "Software Maintenance",
        subtitle: "Ensuring Longevity and Stability",
        description: "Software requires care to stay fast and secure. We provide ongoing corrective, adaptive, and perfective maintenance for your custom applications. Whether it's fixing bugs, upgrading libraries, or adapting to new OS versions, we keep your software in top shape.",
        features: [
            "Bug Fixes & Troubleshooting",
            "Performance Tuning",
            "Library & Framework Upgrades",
            "Database Optimization",
            "Code Refactoring",
            "Legacy System Support"
        ],
        process: [
            { title: "Monitor", desc: "Tracking application stability." },
            { title: "Patch", desc: "Applying security fixes." },
            { title: "Upgrade", desc: "Modernizing dependencies." },
            { title: "Test", desc: "Ensuring no regressions." }
        ],
        technologies: ["Git", "Jenkins", "Sentry", "SonarQube", "Docker", "Jira"],
        image: itSupportImg
    },
    'security-updates': {
        title: "System Security & Updates",
        subtitle: "Proactive Protection Against Threats",
        description: "Stay ahead of cyber threats with our proactive security services. We manage frequent security updates, conduct vulnerability scans, and ensure your compliance with industry standards. Your data's safety is our top priority.",
        features: [
            "Regular Security Patching",
            "Firewall Configuration & Management",
            "Antivirus & Anti-malware Updates",
            "Penetration Testing",
            "Compliance Audits",
            "Data Encryption Services"
        ],
        process: [
            { title: "Scan", desc: "Identifying outdated systems." },
            { title: "Update", desc: "Applying patches safely." },
            { title: "Harden", desc: "Strengthening configurations." },
            { title: "Audit", desc: "Verifying security posture." }
        ],
        technologies: ["Sophos", "Norton", "Kali Linux", "BitLocker", "OpenSSL", "Wireshark"],
        image: cyberSecImg
    },
    'web-app': {
        title: "Custom Web Application",
        subtitle: "Tailored Software for Business Critical Operations",
        description: "Off-the-shelf software often forces you to change your business processes to fit the tool. We build custom web applications that fit your business like a glove. From complex dashboards to customer-facing portals, we utilize modern full-stack technologies to create secure, scalable, and responsive web solutions.",
        features: ["SaaS Development", "Progressive Web Apps", "Secure Portals", "Real-time Dashboards", "API-First Architecture", "Cloud-Native Scalability"],
        process: [
            { title: "Define", desc: "Gathering requirements." },
            { title: "Architect", desc: "Designing system structure." },
            { title: "Build", desc: "Frontend and Backend coding." },
            { title: "Launch", desc: "Deployment and testing." }
        ],
        technologies: ["React", "Node.js", "MongoDB", "Next.js", "Docker", "AWS"],
        image: customWebImg
    },
    'saas': {
        title: "SaaS Platform Development",
        subtitle: "Scalable Software as a Service Solutions",
        description: "Turn your idea into a globally accessible software product. We specialize in building multi-tenant SaaS architectures that are secure, scalable, and subscription-ready. From user management and billing integration to data isolation and API exposure, we handle the complexities of SaaS engineering.",
        features: ["Multi-Tenant Architecture", "Subscription Billing Integration", "Role-Based Access Control", "Data Isolation & Security", "Public API Development", "Admin Dashboards"],
        process: [
            { title: "Prototype", desc: "MVP development." },
            { title: "Develop", desc: "Core feature implementation." },
            { title: "Scale", desc: "Infrastructure optimization." },
            { title: "Monetize", desc: "Payment gateway integration." }
        ],
        technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS Lambda", "Redis", "Auth0"],
        image: customWebImg
    },
    'ui-ux': {
        title: "UI/UX Design",
        subtitle: "Designing Experiences that Convert",
        description: "Great software starts with great design. We blend aesthetics with usability to create digital products that users love. Our design process focuses on empathy, clarity, and engagement, ensuring every interaction feels intuitive and every pixel serves a purpose.",
        features: ["User Research", "Wireframing & Prototyping", "UI Design Systems", "Usability Testing", "Interaction Design", "Mobile-First Design"],
        process: [
            { title: "Research", desc: "Understanding user needs." },
            { title: "Wireframe", desc: "Structural layout." },
            { title: "Design", desc: "Visual aesthetics." },
            { title: "Test", desc: "User feedback loop." }
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "Miro", "InVision"],
        image: uiuxImg
    },
    'erp': {
        title: "ERP Solutions",
        subtitle: "Integrated Management for Efficiency",
        description: "Streamline your business processes with our custom ERP integration services. We help you connect disjointed systems into a unified source of truth, improving data visibility and operational efficiency across finance, supply chain, and HR.",
        features: ["Custom ERP Modules", "System Integration", "Data Migration", "Workflow Automation", "Reporting & Analytics", "Legacy Modernization"],
        process: [
            { title: "Audit", desc: "Current system analysis." },
            { title: "Plan", desc: "Integration strategy." },
            { title: "Implement", desc: "Module development." },
            { title: "Deploy", desc: "Go-live and training." }
        ],
        technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Python", "Java"],
        image: erpImg
    },
    'crm': {
        title: "CRM Systems",
        subtitle: "Better Relationships, More Sales",
        description: "Manage your customer interactions effectively with our customized CRM solutions. Whether implementing Salesforce, HubSpot, or building a bespoke CRM, we ensure you have the tools to track leads, manage support tickets, and nurture customer relationships.",
        features: ["Sales Pipeline Management", "Customer Data Platform", "Marketing Automation", "Support Ticket System", "Email Integration", "Mobile CRM Access"],
        process: [
            { title: "Configure", desc: "Setting up the CRM." },
            { title: "Customize", desc: "Tailoring fields and flows." },
            { title: "Migrate", desc: "Importing customer data." },
            { title: "Train", desc: "User adoption workshops." }
        ],
        technologies: ["Salesforce", "HubSpot", "Zoho", "Custom Builds"],
        image: erpImg
    },
    'ai-automation': {
        title: "NLP & AI Automation",
        subtitle: "Automating Intelligence",
        description: "Leverage Natural Language Processing (NLP) to automate complex text-based tasks. From document processing and sentiment analysis to intelligent email routing, our AI solutions save time and reduce human error.",
        features: ["Document Parsing (OCR)", "Sentiment Analysis", "Text Classification", "Automated Summarization", "Intelligent Workflows", "Voice-to-Text Integration"],
        process: [
            { title: "Data Analysis", desc: "Understanding the text data." },
            { title: "Model Train", desc: "Fine-tuning NLP models." },
            { title: "Integrate", desc: "Connecting to workflows." },
            { title: "Monitor", desc: "Accuracy tracking." }
        ],
        technologies: ["Python", "Spacy", "Hugging Face", "OpenAI", "AWS Comprehend"],
        image: aiMlImg
    },
    'busi-intel': {
        title: "Predictive / Market Analytics",
        subtitle: "Forecasting the Future",
        description: "Use historical data to predict future trends. Our predictive analytics services help you anticipate market shifts, customer churn, and demand fluctuations, allowing you to make proactive rather than reactive decisions.",
        features: ["Trend Forecasting", "Churn Prediction", "Demand Planning", "Market Basket Analysis", "Risk Modeling", "Customer Segmentation"],
        process: [
            { title: "Gather", desc: "Collecting historical data." },
            { title: "Model", desc: "Building regression models." },
            { title: "Predict", desc: "Generating forecasts." },
            { title: "Act", desc: "Strategic implementation." }
        ],
        technologies: ["Python", "R", "Tableau", "Scikit-Learn", "Snowflake"],
        image: dataAnalyticsImg
    },
    'bi': {
        title: "Business Intelligence (BI)",
        subtitle: "Visualizing Success",
        description: "Transform raw data into meaningful insights. We build interactive BI dashboards that give you a real-time view of your KPIs, helping you identify opportunities and bottlenecks instantly.",
        features: ["Interactive Dashboards", "Real-time Reporting", "Data Visualization", "KPI Tracking", "Cross-Platform Access", "Data Storytelling"],
        process: [
            { title: "Connect", desc: "Linking data sources." },
            { title: "Design", desc: "Dashboard layout." },
            { title: "Build", desc: "Creating charts and graphs." },
            { title: "Deploy", desc: "Sharing with stakeholders." }
        ],
        technologies: ["PowerBI", "Tableau", "Looker", "Google Data Studio"],
        image: dataAnalyticsImg
    },
    'chatbots': {
        title: "Custom AI & Chatbots",
        subtitle: "24/7 Intelligent Support",
        description: "Enhance customer experience with intelligent conversational AI. Our chatbots go beyond simple scripts, understanding context and intent to provide helpful, human-like responses around the clock.",
        features: ["Conversational AI", "Multi-Channel Support", "Intent Recognition", "Order Status Automation", "FAQ Handling", "Live Agent Handoff"],
        process: [
            { title: "Design", desc: "Conversation flows." },
            { title: "Train", desc: "Teaching the AI intents." },
            { title: "Test", desc: "Simulating user queries." },
            { title: "Launch", desc: "Integration with chat widget." }
        ],
        technologies: ["Dialogflow", "Rasa", "Microsoft Bot Framework", "OpenAI"],
        image: aiMlImg
    }
};
