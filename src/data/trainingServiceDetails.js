import { RiCodeBoxFill, RiBrainFill, RiCloudWindyFill, RiCheckboxCircleFill, RiMegaphoneFill, RiPaletteFill, RiBriefcase4Fill } from 'react-icons/ri';

export const trainingServiceDetails = {
    'full-stack': {
        title: "Full Stack Development",
        tagline: "Master Front-End & Back-End Technologies",
        description: "Become a proficient Full Stack Developer by mastering both client-side and server-side programming. Learn to build complete web applications from scratch using modern frameworks.",
        icon: RiCodeBoxFill,
        features: [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js & Redux",
            "Node.js & Express.js",
            "MongoDB & SQL Databases"
        ],
        deepDive: {
            title: "Comprehensive Curriculum",
            text: "Our Full Stack course is designed to take you from a beginner to a job-ready developer. You will work on real-world projects, learn deployment strategies, and understand the full software development lifecycle."
        },
        roadmap: [
            { title: "Foundation", desc: "Web basics, HTML, CSS, JS" },
            { title: "Frontend", desc: "React, State Management, UI Libraries" },
            { title: "Backend", desc: "Node.js, APIs, Authentication" },
            { title: "Database & DevOps", desc: "MongoDB, SQL, Git, Deployment" }
        ]
    },
    'python-ds': {
        title: "Python & Data Science",
        tagline: "Unlock the Power of Data",
        description: "Learn Python programming and dive into the world of Data Science. Master data analysis, visualization, and machine learning algorithms to solve complex problems.",
        icon: RiBrainFill,
        features: [
            "Python Programming Mastery",
            "Data Analysis with Pandas & NumPy",
            "Data Visualization with Matplotlib",
            "Machine Learning Basics"
        ],
        deepDive: {
            title: "Data-Driven Decision Making",
            text: "Data is the new oil. This course equips you with the tools to extract insights from data, build predictive models, and drive business decisions using Python and its powerful libraries."
        },
        roadmap: [
            { title: "Python Basics", desc: "Syntax, Loops, Functions" },
            { title: "Data Handling", desc: "NumPy, Pandas, Data Cleaning" },
            { title: "Visualization", desc: "Matplotlib, Seaborn" },
            { title: "ML Algorithms", desc: "Regression, Classification, Clustering" }
        ]
    },
    'cloud-devops': {
        title: "Cloud & DevOps (AWS)",
        tagline: "Master Cloud Infrastructure & Automation",
        description: "Get hands-on experience with AWS cloud services and DevOps practices. Learn to build, deploy, and manage scalable and secure infrastructure.",
        icon: RiCloudWindyFill,
        features: [
            "AWS Core Services (EC2, S3, RDS)",
            "CI/CD Pipelines",
            "Docker & Kubernetes",
            "Infrastructure as Code (Terraform)"
        ],
        deepDive: {
            title: "Scalable Infrastructure",
            text: "Learn how to architect and manage cloud solutions that are scalable, reliable, and secure. We cover the essential DevOps tools that interpret development and operations."
        },
        roadmap: [
            { title: "Cloud Basics", desc: "AWS Fundamentals, IAM, VPC" },
            { title: "Compute & Storage", desc: "EC2, S3, Lambda" },
            { title: "DevOps Tools", desc: "Git, Jenkins, Docker" },
            { title: "Orchestration", desc: "Kubernetes, Terraform" }
        ]
    },
    'testing': {
        title: "Software Testing",
        tagline: "Ensure Quality & Reliability",
        description: "Master the art of Software Testing. Learn manual testing methodologies and automation tools to deliver bug-free software applications.",
        icon: RiCheckboxCircleFill,
        features: [
            "Manual Testing Concepts",
            "Automation with Selenium",
            "API Testing",
            "JIRA & Bug Tracking"
        ],
        deepDive: {
            title: "Quality Assurance Expertise",
            text: "Quality is non-negotiable. This course covers the entire testing lifecycle, from test planning to execution and reporting, ensuring you can validate software against requirements effectively."
        },
        roadmap: [
            { title: "Fundamentals", desc: "SDLC, STLC, Test Cases" },
            { title: "Manual Testing", desc: "Types of Testing, Defect Life Cycle" },
            { title: "Automation", desc: "Java, Selenium WebDriver" },
            { title: "API & Frameworks", desc: "TestNG, Postman, Cucumber" }
        ]
    },
    'dm-course': {
        title: "Digital Marketing Course",
        tagline: "Master Online Marketing Strategies",
        description: "Learn to market products and services online. Master SEO, Social Media Marketing, PPC, and Content Marketing to drive traffic and sales.",
        icon: RiMegaphoneFill,
        features: [
            "SEO & SEM Mastery",
            "Social Media Strategy",
            "Google Ads & Analytics",
            "Content & Email Marketing"
        ],
        deepDive: {
            title: "360-Degree Marketing",
            text: "Digital marketing is a vast field. We cover all key channels and strategies, teaching you how to create integrated campaigns that reach the right audience and convert them into customers."
        },
        roadmap: [
            { title: "Basics & SEO", desc: "Keywords, On-page/Off-page SEO" },
            { title: "SMM", desc: "FB, Insta, LinkedIn Marketing" },
            { title: "Paid Ads", desc: "Google Ads, FB Ads Manager" },
            { title: "Analytics", desc: "Google Analytics, Reporting" }
        ]
    },
    'ui-ux': {
        title: "UI/UX Design",
        tagline: "Design Engaging User Experiences",
        description: "Learn to design intuitive and beautiful user interfaces. Master design thinking, wireframing, prototyping, and tools like Figma.",
        icon: RiPaletteFill,
        features: [
            "Design Thinking Process",
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Figma Mastery"
        ],
        deepDive: {
            title: "User-Centered Design",
            text: "Great design is about solving problems. This course teaches you how to understand user needs and translate them into visual designs that are both functional and aesthetically pleasing."
        },
        roadmap: [
            { title: "Fundamentals", desc: "Design Principles, Color, Typography" },
            { title: "UX Research", desc: "User Interviews, Journey Maps" },
            { title: "UI Design", desc: "Figma, Components, Systems" },
            { title: "Prototyping", desc: "Interaction Design, Usability Testing" }
        ]
    },
    'technical': {
        title: "Industry-Oriented Technical Training",
        tagline: "Bridging the Gap Between Campus & Corporate",
        description: "Our technical training programs are tailored for colleges to equip students with the latest industry skills. We cover full-stack development, cloud computing, data science, and more, ensuring students are project-ready from day one.",
        icon: RiCodeBoxFill,
        features: ["Hands-on Coding Workshops", "Real-world Project Implementation", "Latest Tech Stack Coverage", "Industry Expert Trainers"],
        deepDive: {
            title: "Practical Learning Approach",
            text: "We move beyond theory. Our curriculum involves hacking sessions, live coding, and mini-projects that simulate real-world development environments."
        },
        roadmap: [
            { title: "Basics", desc: "Core programming fundamentals." },
            { title: "Advanced", desc: "Frameworks and modern tools." },
            { title: "Projects", desc: "Building deployable applications." },
            { title: "Review", desc: "Code reviews and optimization." }
        ]
    },
    'placement-readiness': {
        title: "Placement Readiness Programs",
        tagline: "Your Gateway to Top Corporates",
        description: "A comprehensive training module designed to crack placement drives. From technical rounds to HR interviews, we prepare students for every stage of the recruitment process.",
        icon: RiBriefcase4Fill,
        features: ["Mock Technical Interviews", "HR Interview Simulations", "Company-Specific Preparation", "Group Discussion Practice"],
        deepDive: {
            title: "Targeted Preparation",
            text: "We analyze the recruitment patterns of top tier companies and curate our training to match their specific requirements, increasing selection ratios significantly."
        },
        roadmap: [
            { title: "Assess", desc: "Diagnostic tests to identify gaps." },
            { title: "Train", desc: "Intensive preparation modules." },
            { title: "Practice", desc: "Unlimited mock drives." },
            { title: "Succeed", desc: "Final placement support." }
        ]
    },
    'soft-skills': {
        title: "Soft Skills & Communication",
        tagline: " Communicate with Confidence",
        description: "Technical skills get you the interview, soft skills get you the job. We focus on business communication, email etiquette, presentation skills, and personality development.",
        icon: RiCheckboxCircleFill,
        features: ["Business English", "Public Speaking", "Email Etiquette", "Personality Development"],
        deepDive: {
            title: "Holistic Development",
            text: "We build confidence and professional demeanor, ensuring students can articulate their ideas clearly and work effectively in diverse teams."
        },
        roadmap: [
            { title: "Speak", desc: "Fluency and articulation drills." },
            { title: "Write", desc: "Professional writing skills." },
            { title: "Present", desc: "Body language and delivery." },
            { title: "Interact", desc: "Team dynamics and etiquette." }
        ]
    },
    'aptitude': {
        title: "Aptitude & Logical Reasoning",
        tagline: "Master the First Round",
        description: "Crack the elimination round with ease. Our rigorous aptitude training covers quantitative ability, logical reasoning, and verbal ability, teaching shortcuts and time management techniques.",
        icon: RiBrainFill,
        features: ["Quantitative Analysis", "Logical Reasoning", "Verbal Ability", "Speed Math Techniques"],
        deepDive: {
            title: "Problem Solving Speed",
            text: "Success in aptitude tests is about speed and accuracy. We teach mental math and logical shortcuts that cut down solving time by half."
        },
        roadmap: [
            { title: "Quant", desc: "Numbers, Arithmetic, Algebra." },
            { title: "Login", desc: "Puzzles, Series, Deduction." },
            { title: "Verbal", desc: "Grammar, Comprehension." },
            { title: "Test", desc: "Timed mock exams." }
        ]
    },
    'pre-placement': {
        title: "Pre-Placement Training",
        tagline: "The Final Polish",
        description: "An intensive crash course right before campus drives. We revise key concepts, run marathon coding sessions, and conduct last-minute mock interviews to boost confidence.",
        icon: RiCheckboxCircleFill,
        features: ["Quick Revision Modules", "Company-Specific Pattern Training", "Stress Interviews", "Resume Verification"],
        deepDive: {
            title: "Just-in-Time preparation",
            text: "Designed for the final weeks before recruitment season, this high-intensity program ensures everything students have learned is fresh and ready to be applied."
        },
        roadmap: [
            { title: "Revise", desc: "Fast-track concept review." },
            { title: "Mock", desc: "Simulated drive conditions." },
            { title: "Feedback", desc: "Instant corrective measures." },
            { title: "Ready", desc: "Go for the kill." }
        ]
    },
    'skill-upgrade': {
        title: "Skill Upgrade Programs",
        tagline: "Stay Relevant, Stay Ahead",
        description: "For working professionals and graduates looking to switch domains or update their tech stack. Learn trending technologies like AI, Blockchain, DevOps, or React to boost your career graph.",
        icon: RiCloudWindyFill,
        features: ["Weekend & Flexible Batches", "Industry Case Studies", "Certification Support", "Peer Networking"],
        deepDive: {
            title: "Continuous Learning",
            text: "Technology evolves rapidly. Our upgrade programs are concise, high-impact courses designed to add a new, high-value skill to your profile without disrupting your job."
        },
        roadmap: [
            { title: "Select", desc: "Choose your specialization." },
            { title: "Learn", desc: "Deep dive into concepts." },
            { title: "Apply", desc: "Build a capstone project." },
            { title: "Grow", desc: "Apply for senior roles." }
        ]
    },
    'career-guidance': {
        title: "Career Guidance & Mentorship",
        tagline: "Navigate Your Professional Journey",
        description: "Confused about your next step? Get 1-on-1 mentorship from industry veterans. We help you identify your strengths, choose the right path, and plan your career trajectory.",
        icon: RiMegaphoneFill, // Reusing existing icon
        features: ["1-on-1 Mentoring Sessions", "Profile Building Review", "Career Path Mapping", "Higher Education Counseling"],
        deepDive: {
            title: "Personalized Roadmap",
            text: "Every career is unique. We don't offer generic advice. We analyze your background and aspirations to create a custom roadmap for your success."
        },
        roadmap: [
            { title: "Assess", desc: "Understanding your profile." },
            { title: "Plan", desc: "Setting short & long term goals." },
            { title: "Action", desc: "Steps to achieve goals." },
            { title: "Review", desc: "Quarterly progress check." }
        ]
    },
    'resume-interview': {
        title: "Resume & Interview Training",
        tagline: "Make Your First Impression Count",
        description: "Your resume is your ticket to the interview. We help you craft ATS-friendly resumes and train you to answer tough behavioural questions using the STAR method.",
        icon: RiPaletteFill, // Reusing existing icon
        features: ["ATS Resume Writing", "LinkedIn Profile Optimization", "Mock Personal Interviews", "Salary Negotiation Tips"],
        deepDive: {
            title: "Personal Branding",
            text: "We treat you as a brand. From your CV design to your LinkedIn headline and interview introduction, we ensure you project a professional and high-value image."
        },
        roadmap: [
            { title: "Audit", desc: "Reviewing current resume." },
            { title: "Craft", desc: "Writing powerful content." },
            { title: "Train", desc: "Mock interview practice." },
            { title: "Optimize", desc: "LinkedIn & Portfolio setup." }
        ]
    },
    'job-oriented': {
        title: "Job-Oriented Courses",
        tagline: "Skills That Employers Demand",
        description: "Short-term, high-impact courses focused purely on employability. Learn specific skills that companies are hiring for right now, such as Full Stack Java, Data Analytics, or Digital Marketing.",
        icon: RiCodeBoxFill,
        features: ["Curriculum aligned with Job Descriptions", "Real-time Internships", "Soft Skills Integration", "Job Application Support"],
        deepDive: {
            title: "Employment First",
            text: "The sole goal of this course is to get you hired. maximize practical exposure and minimize theory to get you job-ready in the shortest time possible."
        },
        roadmap: [
            { title: "Train", desc: "Rigorous technical training." },
            { title: "Build", desc: "Project portfolio creation." },
            { title: "Apply", desc: "Strategic job applications." },
            { title: "Work", desc: "Start your new career." }
        ]
    },
    'placement-linked': {
        title: "Placement-Linked Training",
        tagline: "Training with a Safety Net",
        description: "Enroll in our specialized batches where training comes with assured placement opportunities. We partner with companies to train you specifically for their open roles.",
        icon: RiBriefcase4Fill,
        features: ["Guaranteed Interview Opportunities", "Pay After Placement Options", "Corporate Partner Network", "End-to-End Recruitment Management"],
        deepDive: {
            title: "Direct Corporate Connection",
            text: "We have tied up with multiple hiring partners. You are trained on their specific syllabus and interviewed strictly for their openings, drastically increasing success rates."
        },
        roadmap: [
            { title: "Screen", desc: "Entrance test & selection." },
            { title: "Train", desc: "Company-specific modules." },
            { title: "Assess", desc: "Final qualifier test." },
            { title: "Place", desc: "Direct interviews & offer." }
        ]
    }
};
