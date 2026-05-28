
// Importing images
import staffImg from '../assets/hrservice/Staffing and solution.jpeg';
import consultImg from '../assets/hrservice/hr consultating.jpeg';
import jobSeekersImg from '../assets/hrservice/job seekers.jpeg';
import onboardingImg from '../assets/hrservice/on boarding suport.jpeg';
import payrollImg from '../assets/hrservice/payroll.jpeg';
import performanceImg from '../assets/hrservice/perfomance.jpeg';
import requirementsImg from '../assets/hrservice/requirements and talent.jpeg';
import trainingImg from '../assets/hrservice/traning and skills.jpeg';

export const hrServiceDetails = {
    // 4. End-to-End Placement Assistance (100% Support)
    'job-seeker': {
        title: "End-to-End Placement Assistance (100% Support)",
        subtitle: "100% Support Ecosystem from Inception to Offer",
        description: "We provide complete end-to-end placement support, including career guidance, ATS-friendly resume optimization, interview preparation, job referrals, and interview coordination. Our team actively supports candidates until they secure a job in IT or Non-IT roles, ensuring continuous assistance throughout the entire placement journey.",
        image: jobSeekersImg,
        benefits: ["Full-Lifecycle Support", "Resume-to-Offer Guidance", "Continuous Engagement"],
        features: [
            "Full-Lifecycle Support",
            "Resume-to-Offer Guidance",
            "Continuous Candidate Engagement",
            "Post-Interview Analysis",
            "Negotiation Assistance",
            "360-Degree Mentorship"
        ],
        process: [
            { title: "Assess", desc: "Initial capability calibration." },
            { title: "Optimize", desc: "Profile and skill enhancement." },
            { title: "Connect", desc: "Strategic interview alignment." },
            { title: "Secure", desc: "Finalizing employment offers." }
        ],
        technologies: ["LinkedIn", "Zoom", "Microsoft Teams"]
    },

    // 2. Fresher & Experienced Placement Support
    'resume-optimization': {
        title: "For Fresher & Experienced Placement Support",
        subtitle: "Tailored Pathways for Freshers and Experienced Professionals",
        description: "We offer tailored placement support for both freshers beginning their careers and experienced professionals seeking new or better opportunities. Our guidance, resume optimization, and interview preparation are customized based on individual experience levels, ensuring each candidate is positioned correctly for relevant roles and hiring expectations.",
        image: requirementsImg, // talent/requirements
        benefits: ["Experience-Level Customization", "Competency Mapping", "Role-Specific Strategies"],
        features: [
            "Experience-Level Customization",
            "Competency Mapping",
            "Role-Specific Resume Architecture",
            "Seniority-Based Interview Prep",
            "Fresher Career Launchpads",
            "Lateral Growth Strategies"
        ],
        process: [
            { title: "Segregate", desc: "Identifying experience level." },
            { title: "Calibrate", desc: "Aligning strategy with seniority." },
            { title: "Prepare", desc: "Targeted interview coaching." },
            { title: "Position", desc: "Matching with relevant roles." }
        ],
        technologies: ["LinkedIn", "Canva", "Office 365"]
    },

    // 3. Placement-Focused Approach
    'interview-prep': {
        title: "Placement-Focused Approach",
        subtitle: "Aligning Preparation with Real-World Hiring Outcomes",
        description: "Our services are designed with a single objective — successful placement. Every step, from career guidance and resume building to interview preparation, is aligned with real-world hiring requirements. We focus on practical outcomes rather than theory, ensuring candidates are fully prepared for actual interview scenarios and job roles.",
        image: trainingImg, // training
        benefits: ["Outcome-Based Prep", "Real-World Scenarios", "Zero-Theory Approach"],
        features: [
            "Outcome-Based Preparation",
            "Real-World Scenario Simulations",
            "Hiring Requirement Alignment",
            "Practical Skill Application",
            "Interview Lifecycle Optimization",
            "Deployment-Ready Training"
        ],
        process: [
            { title: "Audit", desc: "Analyzing current readiness." },
            { title: "Simulate", desc: "Real-world mock scenarios." },
            { title: "Refine", desc: "Feedback-driven improvement." },
            { title: "Validate", desc: "Confirming interview readiness." }
        ],
        technologies: ["Zoom", "Microsoft Teams", "Slack"]
    },

    // 1. For Career Gap Candidates
    'career-guidance': {
        title: "For Career Gap Candidates",
        subtitle: "Transforming Career Breaks into Professional Advantages",
        description: "We specialize in supporting candidates with career gaps, helping them confidently restart their careers in IT and Non-IT domains. Our process focuses on understanding the reason for the gap, rebuilding professional profiles, preparing candidates to address the gap effectively during interviews, and aligning them with suitable job opportunities. Career gaps are not treated as limitations but are handled strategically to improve employability. We help with resume optimization, interview preparation, job referrals, and interview coordination. Our team actively supports candidates until they secure a job in IT or Non-IT roles, ensuring continuous assistance throughout the entire placement journey.",
        image: consultImg, // consulting
        benefits: ["Gap Analysis", "Profile Reconstruction", "Strategic Positioning"],
        features: [
            "Root Cause Gap Analysis",
            "Professional Profile Reconstruction",
            "Strategic Interview Positioning",
            "Employability Enhancement",
            "Gap-to-Job Transition",
            "Continuous Placement Support"
        ],
        process: [
            { title: "Analyze", desc: "Root cause evaluation." },
            { title: "Rebuild", desc: "Professional narrative reconstruction." },
            { title: "Align", desc: "Mapping to market demands." },
            { title: "Launch", desc: "Restarting the career trajectory." }
        ],
        technologies: ["LinkedIn", "Zoom", "Trello"]
    },

    // 5. Fresher Hiring & Entry-Level Programs
    'fresher-hiring': {
        title: "Fresher Hiring & Entry-Level Programs",
        subtitle: "Launching Careers with Structured Opportunities",
        description: "Infolexus is dedicated to supporting graduates through exclusive fresher jobs and internship programs. We facilitate the campus-to-corporate transition by working with companies to create structured hiring processes. Our training-linked placement initiatives ensure that freshers gain valuable industry exposure and practical skills while meeting the specific talent needs of modern organizations.",
        image: staffImg, // Staffing
        benefits: ["Access to Exclusive Jobs", "Industry Exposure", "Structured Placement"],
        features: [
            "Exclusive Fresher Jobs",
            "Internship Programs",
            "Campus-to-Corporate Transition",
            "Structured Hiring Processes",
            "Training-Linked Placement",
            "Industry Exposure"
        ],
        process: [
            { title: "Connect", desc: "Linking graduates with companies." },
            { title: "Train", desc: "Skill development programs." },
            { title: "Intern", desc: "Practical industry experience." },
            { title: "Hire", desc: "Placement in permanent roles." }
        ],
        technologies: ["LinkedIn", "GitHub", "Salesforce"]
    },

    // 6. Campus Recruitment & Training Support
    'campus-recruitment': {
        title: "Campus Recruitment & Training Support",
        subtitle: "Bridging the Gap Between Academia and Industry",
        description: "We partner with colleges and universities to organize successful campus placement drives and recruitment activities. Our services extend to pre-placement training, where we focus on aptitude test preparation and soft skills development. This comprehensive approach enables educational institutions to improve their placement records while providing employers with a ready pool of trained, high-quality talent.",
        image: onboardingImg, // Onboarding/Support
        benefits: ["Improved Placement Records", "Student Readiness", "Efficient Drives"],
        features: [
            "Campus Placement Drives",
            "Recruitment Activities",
            "Pre-Placement Training",
            "Aptitude Test Prep",
            "Soft Skills Development",
            "Placement Record Improvement"
        ],
        process: [
            { title: "Organize", desc: "Setting up drives and events." },
            { title: "Prepare", desc: "Training students for success." },
            { title: "Conduct", desc: "Managing recruitment activities." },
            { title: "Recruit", desc: "Facilitating hiring of talent." }
        ],
        technologies: ["Zoom", "Microsoft Teams", "Google Analytics"]
    },

    // 7. Contract-to-Hire Solutions
    'contract-hiring': {
        title: "Contract-to-Hire Solutions",
        subtitle: "Flexible Staffing with Long-Term Potential",
        description: "Our contract-to-hire staffing model offers organizations flexible hiring solutions to onboard professionals for specific projects before offering permanent roles. This serves as an effective bridge, allowing businesses to assess candidate performance and cultural fit in real-time. It reduces hiring risks while providing candidates with a clear pathway from temporary staffing to long-term career growth.",
        image: payrollImg, // Payroll/Contract
        benefits: ["Flexible Staffing", "Performance Assessment", "Reduced Hiring Risks"],
        features: [
            "Flexible Hiring Solutions",
            "Project-Based Onboarding",
            "Real-Time Performance Assessment",
            "Cultural Fit Evaluation",
            "Reduced Hiring Risks",
            "Temporary to Permanent Pathway"
        ],
        process: [
            { title: "Onboard", desc: "Contractual hiring for projects." },
            { title: "Assess", desc: "Evaluating performance on the job." },
            { title: "Review", desc: "Determination of long-term fit." },
            { title: "Convert", desc: "Offering permanent employment." }
        ],
        technologies: ["SAP", "Oracle", "Salesforce"]
    },

    // 8. Employee Engagement & Retention Management
    'employee-retention': {
        title: "Employee Engagement & Retention Management",
        subtitle: "Fostering a Productive and Committed Workforce",
        description: "We help organizations build a stable workforce through proven employee retention strategies and workforce engagement initiatives. Our HR consulting services focus on performance evaluation systems and constructive feedback mechanisms. By enhancing overall workplace satisfaction and motivation, we support businesses in reducing attrition and maintaining a productive, committed team.",
        image: performanceImg, // Performance
        benefits: ["Lower Attrition", "Higher Engagement", "Better Performance"],
        features: [
            "Retention Strategies",
            "Workforce Engagement",
            "Performance Evaluation Systems",
            "Feedback Mechanisms",
            "Workplace Satisfaction",
            "Attrition Reduction"
        ],
        process: [
            { title: "Evaluate", desc: "Assessing current engagement." },
            { title: "Plan", desc: "Designing retention strategies." },
            { title: "Implement", desc: "Rolling out engagement initiatives." },
            { title: "Sustain", desc: "Monitoring and adjusting for stability." }
        ],
        technologies: ["Slack", "Microsoft Teams", "Asana"]
    },
    'permanent-hiring': {
        title: "Permanent Recruitment",
        subtitle: "Building the Foundation of Your Organization",
        description: "Finding the right permanent employees is crucial for long-term business success. We specialize in identifying candidates who not only possess the required technical skills but also align with your company culture and values. Our rigorous screening process ensures that you build a stable, high-performing team committed to your organization's vision.",
        image: staffImg,
        benefits: ["Long-term Team Stability", "Cultural Alignment", "Reduced Hiring Costs Over Time"],
        features: [
            "Executive Search",
            "Cultural Fit Assessment",
            "Technical Screening",
            "Reference Checks"
        ],
        process: [
            { title: "Understand", desc: "Defining role requirements." },
            { title: "Source", desc: "Headhunting top talent." },
            { title: "Vet", desc: "Conducting thorough interviews." },
            { title: "Close", desc: "Negotiating offers." }
        ],
        technologies: ["LinkedIn", "Salesforce", "HubSpot"]
    },
    'in-house': {
        title: "In-House Developer Support",
        subtitle: "Dedicated Developers Integrated into Your Workflow",
        description: "Scale your development team instantly without the overhead of traditional hiring. We provide skilled developers who work exclusively for you, integrating seamlessly into your existing workflows and communication channels. Whether you need frontend wizards or backend architects, our in-house support acts as a natural extension of your team.",
        image: requirementsImg,
        benefits: ["Immediate Scalability", "Seamless Integration", "No Overhead Costs"],
        features: [
            "Dedicated Developers",
            "Seamless Integration",
            "Flexible Scaling",
            "Complete Management Support"
        ],
        process: [
            { title: "Requirement", desc: "Identifying tech stack needs." },
            { title: "Select", desc: "Choosing from pre-vetted devs." },
            { title: "Onboard", desc: "Integrating into your tools." },
            { title: "Manage", desc: "Ongoing performance tracking." }
        ],
        technologies: ["Jira", "Slack", "GitHub", "Trello"]
    },
    'staffing': {
        title: "IT & Non-IT Staffing",
        subtitle: "Comprehensive Staffing Across All Sectors",
        description: "Diverse business needs require diverse talent. We offer comprehensive staffing solutions for both IT technical roles and Non-IT operational positions. From software engineers to administrative staff, we leverage our vast network to find the right people for every department, ensuring your entire organization runs smoothly.",
        image: jobSeekersImg,
        benefits: ["One-Stop Staffing Solution", "Diverse Talent Pool", "Rapid Turnaround"],
        features: [
            "IT Technical Staffing",
            "Administrative & Ops Staffing",
            "Bulk Hiring",
            "Cross-Industry Expertise"
        ],
        process: [
            { title: "Scope", desc: "Analyzing cross-dept needs." },
            { title: "Source", desc: "Leveraging diverse networks." },
            { title: "Screen", desc: "Role-specific evaluations." },
            { title: "Deploy", desc: "Placing candidates rapidly." }
        ],
        technologies: ["LinkedIn", "HubSpot", "Salesforce"]
    }
};
