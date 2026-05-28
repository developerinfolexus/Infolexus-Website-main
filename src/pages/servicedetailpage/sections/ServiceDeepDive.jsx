import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Shield, BarChart, Mail, ClipboardCheck, Calendar } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import { Leaf } from "lucide-react";



import { FaAws, FaJava, FaWindows, FaBook, FaCogs, FaServer, FaRobot, FaChartBar, FaFileExcel, FaLink, FaChartLine, FaChartArea, FaPlayCircle, FaFlask, FaLock, FaApple, FaDesktop, FaStar } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { RiTwitterXFill } from 'react-icons/ri';
import { Video } from 'lucide-react'; // Import Video icon for fallbacks

const techMap = {
    // Mobile
    "Flutter": { icon: SiIcons.SiFlutter, color: "text-[#02569B]" },
    "React Native": { icon: SiIcons.SiReact, color: "text-[#61DAFB]" },
    "Swift": { icon: SiIcons.SiSwift, color: "text-[#F05138]" },
    "Kotlin": { icon: SiIcons.SiKotlin, color: "text-[#7F52FF]" },
    "Firebase": { icon: SiIcons.SiFirebase, color: "text-[#FFCA28]" },
    "Node.js": { icon: SiIcons.SiNodedotjs, color: "text-[#339933]" },
    "GraphQL": { icon: SiIcons.SiGraphql, color: "text-[#E10098]" },
    "SQLite": { icon: SiIcons.SiSqlite, color: "text-[#003B57]" },

    // Web
    "React": { icon: SiIcons.SiReact, color: "text-[#61DAFB]" },
    "Express": { icon: SiIcons.SiExpress, color: "text-[#000000]" },
    "MongoDB": { icon: SiIcons.SiMongodb, color: "text-[#47A248]" },
    "Redux": { icon: SiIcons.SiRedux, color: "text-[#764ABC]" },
    "Next.js": { icon: SiIcons.SiNextdotjs, color: "text-[#000000]" },
    "Redis": { icon: SiIcons.SiRedis, color: "text-[#DC382D]" },
    "Docker": { icon: SiIcons.SiDocker, color: "text-[#2496ED]" },
    "HTML5": { icon: SiIcons.SiHtml5, color: "text-[#E34F26]" },
    "CSS3": { icon: SiIcons.SiCss3, color: "text-[#1572B6]" },
    "JavaScript": { icon: SiIcons.SiJavascript, color: "text-[#F7DF1E]" },
    "WordPress": { icon: SiIcons.SiWordpress, color: "text-[#21759B]" },
    "Shopify": { icon: SiIcons.SiShopify, color: "text-[#7AB55C]" },
    "WooCommerce": { icon: SiIcons.SiWoocommerce, color: "text-[#96588A]" },
    "Magento": { icon: SiIcons.SiMagento, color: "text-[#EE672F]" },
    "Stripe": { icon: SiIcons.SiStripe, color: "text-[#008CDD]" },
    "PayPal": { icon: SiIcons.SiPaypal, color: "text-[#003087]" },
    "PostgreSQL": { icon: SiIcons.SiPostgresql, color: "text-[#336791]" },

    // Enterprise
    "SAP": { icon: SiIcons.SiSap, color: "text-[#0FAAFF]" },
    "Oracle": { icon: SiIcons.SiOracle, color: "text-[#F80000]" },
    "Microsoft Dynamics": { icon: FaWindows, color: "text-[#0078D4]" },
    "Java": { icon: FaJava, color: "text-[#007396]" },
    ".NET": { icon: SiIcons.SiDotnet, color: "text-[#512BD4]" },
    "Python": { icon: SiIcons.SiPython, color: "text-[#3776AB]" },

    // AI
    "TensorFlow": { icon: SiIcons.SiTensorflow, color: "text-[#FF6F00]" },
    "PyTorch": { icon: SiIcons.SiPytorch, color: "text-[#EE4C2C]" },
    "OpenAI API": { icon: SiIcons.SiOpenai, color: "text-[#412991]" },
    "OpenAI": { icon: SiIcons.SiOpenai, color: "text-[#412991]" },
    "Scikit-learn": { icon: SiIcons.SiScikitlearn, color: "text-[#F7931E]" },
    "Scikit-Learn": { icon: SiIcons.SiScikitlearn, color: "text-[#F7931E]" }, // Alias for case sensitivity
    "Hugging Face": { icon: SiIcons.SiHuggingface, color: "text-[#FFD21E]" },
    "Spacy": { icon: SiIcons.SiSpacy, color: "text-[#09A3D5]" },
    "AWS Comprehend": { icon: FaAws, color: "text-[#FF9900]" },

    // Design
    "Figma": { icon: SiIcons.SiFigma, color: "text-[#F24E1E]" },
    "Adobe XD": { icon: SiIcons.SiAdobexd, color: "text-[#FF26BE]" },
    "Sketch": { icon: SiIcons.SiSketch, color: "text-[#F7B500]" },
    "Protopie": { icon: FaPlayCircle, color: "text-[#FF4A3D]" },
    "After Effects": { icon: SiIcons.SiAdobeaftereffects, color: "text-[#9999FF]" },
    "Miro": { icon: SiIcons.SiMiro, color: "text-[#050038]" },
    "Photoshop": { icon: SiIcons.SiAdobephotoshop, color: "text-[#31A8FF]" },
    "Illustrator": { icon: SiIcons.SiAdobeillustrator, color: "text-[#FF9A00]" },

    // Data
    "Tableau": { icon: SiIcons.SiTableau, color: "text-[#E97627]" },
    "PowerBI": { icon: FaChartBar, color: "text-[#F2C811]" },
    "Looker": { icon: SiIcons.SiLooker, color: "text-[#4285F4]" },
    "Apache Spark": { icon: SiIcons.SiApachespark, color: "text-[#E25A1C]" },
    "Snowflake": { icon: SiIcons.SiSnowflake, color: "text-[#29B5E8]" },
    "Python (Pandas)": { icon: SiIcons.SiPandas, color: "text-[#150458]" },
    "R": { icon: SiIcons.SiR, color: "text-[#276DC3]" },
    "Google Data Studio": { icon: SiIcons.SiLooker, color: "text-[#4285F4]" },
    "Google Looker Studio": { icon: SiIcons.SiLooker, color: "text-[#4285F4]" },
    "Databox": { icon: BarChart, color: "text-[#00BFA5]" },

    // Cloud
    "AWS": { icon: FaAws, color: "text-[#FF9900]" },
    "Azure": { icon: VscAzure, color: "text-[#0078D4]" },
    "Google Cloud": { icon: SiIcons.SiGooglecloud, color: "text-[#4285F4]" },
    "Kubernetes": { icon: SiIcons.SiKubernetes, color: "text-[#326CE5]" },
    "Terraform": { icon: SiIcons.SiTerraform, color: "text-[#7B42BC]" },
    "DigitalOcean": { icon: SiIcons.SiDigitalocean, color: "text-[#0080FF]" },
    "Cloudflare": { icon: SiIcons.SiCloudflare, color: "text-[#F38020]" },
    "Nginx": { icon: SiIcons.SiNginx, color: "text-[#009639]" },
    "Linux": { icon: SiIcons.SiLinux, color: "text-[#FCC624]" },
    "cPanel": { icon: SiIcons.SiCpanel, color: "text-[#FF6C2C]" },
    "Prometheus": { icon: SiIcons.SiPrometheus, color: "text-[#E6522C]" },
    "Grafana": { icon: SiIcons.SiGrafana, color: "text-[#F46800]" },
    "AWS Lambda": { icon: SiIcons.SiAwslambda, color: "text-[#FF9900]" },
    "Auth0": { icon: SiIcons.SiAuth0, color: "text-[#EB5424]" },
    "AWS CloudWatch": { icon: FaAws, color: "text-[#FF9900]" },

    // Accounting Tools
    "QuickBooks API": { icon: SiIcons.SiQuickbooks, color: "text-[#2CA01C]" },
    "Xero": { icon: SiIcons.SiXero, color: "text-[#13B5EA]" },
    "Zoho": { icon: SiIcons.SiZoho, color: "text-[#0066CC]" },
    "Custom Builds": { icon: FaCogs, color: "text-[#4B5563]" },

    // Monitoring Tools
    "Datadog": { icon: SiIcons.SiDatadog, color: "text-[#632CA6]" },
    "New Relic": { icon: SiIcons.SiNewrelic, color: "text-[#1CE783]" },
    "ELK Stack": { icon: SiIcons.SiElastic, color: "text-[#005571]" },
    "Nagios": { icon: FaServer, color: "text-[#000000]" }, // Fallback to generic server icon
    "PagerDuty": { icon: SiIcons.SiPagerduty, color: "text-[#06AC38]" },

    // Chatbots
    "Dialogflow": { icon: SiIcons.SiDialogflow, color: "text-[#FF9800]" },
    "Rasa": { icon: SiIcons.SiRasa, color: "text-[#5A2497]" },
    "Microsoft Bot Framework": { icon: FaWindows, color: "text-[#0078D4]" },

    // QA
    "Selenium": { icon: SiIcons.SiSelenium, color: "text-[#43B02A]" },
    "Cypress": { icon: SiIcons.SiCypress, color: "text-[#17202C]" },
    "Jest": { icon: SiIcons.SiJest, color: "text-[#C21325]" },
    "Appium": { icon: SiIcons.SiSelenium, color: "text-[#41BDF5]" }, // Fallback to Selenium to prevent error
    "JMeter": { icon: SiIcons.SiApachejmeter, color: "text-[#D22128]" },
    "Postman": { icon: SiIcons.SiPostman, color: "text-[#FF6C37]" },

    // IT
    "Jira Service Desk": { icon: SiIcons.SiJira, color: "text-[#0052CC]" },
    "TeamViewer": { icon: Globe, color: "text-[#0E80C8]" }, // Fallback to Globe to prevent error
    "Active Directory": { icon: FaWindows, color: "text-[#0078D4]" },
    "Cisco": { icon: SiIcons.SiCisco, color: "text-[#1BA0D7]" },
    "Sophos": { icon: Shield, color: "text-[#0078D4]" }, // Lucide fallback
    "Office 365": { icon: FaWindows, color: "text-[#D83B01]" },
    "AnyDesk": { icon: SiIcons.SiAnydesk, color: "text-[#EF443B]" },
    "ServiceNow": { icon: FaDesktop, color: "text-[#62D84E]" },
    "Windows": { icon: FaWindows, color: "text-[#0078D6]" },
    "MacOS": { icon: FaApple, color: "text-[#000000]" },

    // Marketing
    "Google Analytics": { icon: SiIcons.SiGoogleanalytics, color: "text-[#E37400]" },
    "SEMrush": { icon: SiIcons.SiSemrush, color: "text-[#EC6613]" },
    "HubSpot": { icon: SiIcons.SiHubspot, color: "text-[#FF7A59]" },
    "Meta Ads": { icon: SiIcons.SiMeta, color: "text-[#0668E1]" },
    "Google Ads": { icon: SiIcons.SiGoogleads, color: "text-[#4285F4]" },
    "Mailchimp": { icon: SiIcons.SiMailchimp, color: "text-[#FFE01B]" },

    // Security (Added)
    "Splunk": { icon: SiIcons.SiSplunk, color: "text-[#000000]" },
    "CrowdStrike": { icon: Shield, color: "text-[#FC0000]" }, // Fallback to Shield
    "Wireshark": { icon: SiIcons.SiWireshark, color: "text-[#1679A7]" },
    "Nessus": { icon: Shield, color: "text-[#0078D4]" }, // Using Shield as generic secure icon
    "Burp Suite": { icon: SiIcons.SiBurpsuite, color: "text-[#FF6633]" },
    "AWS Security Hub": { icon: FaAws, color: "text-[#FF9900]" },
    "Norton": { icon: SiIcons.SiNorton, color: "text-[#FFD200]" },
    "Kali Linux": { icon: SiIcons.SiKalilinux, color: "text-[#557C94]" },
    "BitLocker": { icon: FaLock, color: "text-[#0078D4]" },
    "OpenSSL": { icon: SiIcons.SiOpenssl, color: "text-[#721412]" },

    // HR Tech
    "LinkedIn": { icon: SiIcons.SiLinkedin, color: "text-[#0A66C2]", size: 48 },
    "Zoom": { icon: SiIcons.SiZoom, color: "text-[#2D8CFF]" },
    "Slack": { icon: SiIcons.SiSlack, color: "text-[#4A154B]" },
    "Trello": { icon: SiIcons.SiTrello, color: "text-[#0052CC]" },
    "Microsoft Teams": { icon: FaWindows, color: "text-[#6264A7]" },
    "Asana": { icon: SiIcons.SiAsana, color: "text-[#F06A6A]" },
    "Monday.com": { icon: SiIcons.SiTrello, color: "text-[#FF3D57]" },
    "GitHub": { icon: SiIcons.SiGithub, color: "text-[#181717]" },
    "Jira": { icon: SiIcons.SiJira, color: "text-[#0052CC]" },
    "Canva": { icon: SiIcons.SiCanva, color: "text-[#00C4CC]" },
    "Salesforce": { icon: SiIcons.SiSalesforce, color: "text-[#00A1E0]" },

    // DM Specific
    "Search Console": { icon: SiIcons.SiGoogleanalytics, color: "text-[#E37400]" },
    "Google Search Console": { icon: SiIcons.SiGoogleanalytics, color: "text-[#E37400]" },
    "Tag Manager": { icon: SiIcons.SiGoogleanalytics, color: "text-[#4285F4]" },

    "Pixel Helper": { icon: SiIcons.SiMeta, color: "text-[#0668E1]" },
    "Meta Pixel": { icon: SiIcons.SiMeta, color: "text-[#0668E1]" },
    "Meta Business Suite": { icon: SiIcons.SiMeta, color: "text-[#0668E1]" },
    "CapCut": { icon: SiIcons.SiTiktok, color: "text-[#000000]" },
    "Buffer": { icon: SiIcons.SiBuffer, color: "text-[#231F20]" },
    "Hootsuite": { icon: SiIcons.SiHootsuite, color: "text-[#000000]" },
    "Later": { icon: Calendar, color: "text-[#6C5CE7]" },
"Sprout Social": { icon: Leaf, color: "text-[#2DCC70]" },
    "Hotjar": { icon: SiIcons.SiHotjar, color: "text-[#FD3A5C]" },
    "Adobe Premiere": { icon: SiIcons.SiAdobepremierepro, color: "text-[#9999FF]" },
    "Premiere Pro": { icon: SiIcons.SiAdobepremierepro, color: "text-[#9999FF]" },

    "DaVinci Resolve": { icon: SiIcons.SiYoutube, color: "text-[#000000]" },
    "DaVinci": { icon: SiIcons.SiYoutube, color: "text-[#000000]" },
    "YouTube": { icon: SiIcons.SiYoutube, color: "text-[#FF0000]" },
    "TikTok": { icon: SiIcons.SiTiktok, color: "text-[#000000]" },
    "Cinema 4D": { icon: SiIcons.SiYoutube, color: "text-[#004BB0]" },
    "Sony Alpha": { icon: Video, color: "text-[#000000]" },
    "Discord": { icon: SiIcons.SiDiscord, color: "text-[#5865F2]" },
    "Circle": { icon: SiIcons.SiDiscord, color: "text-[#5865F2]" },
    "Facebook Groups": { icon: SiIcons.SiFacebook, color: "text-[#1877F2]" },
    "Twitter Ads": { icon: RiTwitterXFill, color: "text-[#000000]" },
    "X Ads": { icon: RiTwitterXFill, color: "text-[#000000]" },
    "LinkedIn Campaign Manager": { icon: SiIcons.SiLinkedin, color: "text-[#0A66C2]" },
    "Sales Navigator": { icon: SiIcons.SiLinkedin, color: "text-[#0A66C2]" },
    "Yoast SEO": { icon: SiIcons.SiYoast, color: "text-[#A03593]" },
    "RankMath": { icon: FaStar, color: "text-[#F40056]" },
    "Ahrefs": { icon: FaLink, color: "text-[#0060FF]" },
    "Moz": { icon: FaChartLine, color: "text-[#8A2432]" },
    "BuzzSumo": { icon: FaChartArea, color: "text-[#000000]" },
    "Screaming Frog": { icon: SiIcons.SiSemrush, color: "text-[#32CD32]" },
    "PageSpeed Insights": { icon: SiIcons.SiGoogleanalytics, color: "text-[#4285F4]" },
    "Lighthouse": { icon: SiIcons.SiGoogleanalytics, color: "text-[#F03C02]" },
    "GTmetrix": { icon: SiIcons.SiGoogleanalytics, color: "text-[#005E98]" },
    "ClickCease": { icon: SiIcons.SiGoogleads, color: "text-[#000000]" },
    "Bing Ads": { icon: SiIcons.SiGoogleads, color: "text-[#008080]" },
    "WhatsApp Business API": { icon: SiIcons.SiFacebook, color: "text-[#25D366]" },
    "Twilio": { icon: SiIcons.SiFacebook, color: "text-[#F22F46]" },
    "Klaviyo": { icon: Mail, color: "text-[#FFB4A2]" },
    "Litmus": { icon: ClipboardCheck, color: "text-[#4A4A4A]" },
    "Excel": { icon: FaFileExcel, color: "text-[#217346]" },
    "Google Sheets": { icon: SiIcons.SiGooglesheets, color: "text-[#34A853]" },
    "Supermetrics": { icon: BarChart, color: "text-[#0072C6]" },
    "ProfitWell": { icon: BarChart, color: "text-[#232F3E]" },

    // New Content & Automation Tools
    "Google Docs": { icon: SiIcons.SiGoogledocs, color: "text-[#4285F4]" },
    "Grammarly": { icon: SiIcons.SiGrammarly, color: "text-[#15C39A]" },
    "Hemingway App": { icon: SiIcons.SiGoogledocs, color: "text-[#000000]" },
    "Zapier": { icon: SiIcons.SiZapier, color: "text-[#FF4A00]" },
    "Make": { icon: SiIcons.SiZapier, color: "text-[#6F3BF5]" },
    "ActiveCampaign": { icon: SiIcons.SiHubspot, color: "text-[#004CFF]" },

    // CMS & LMS & Others
    "Drupal": { icon: SiIcons.SiDrupal, color: "text-[#0678BE]" },
    "Strapi": { icon: SiIcons.SiStrapi, color: "text-[#2F2E8F]" },
    "Contentful": { icon: SiIcons.SiContentful, color: "text-[#247FBF]" },
    "PHP": { icon: SiIcons.SiPhp, color: "text-[#777BB4]" },
    "Moodle": { icon: SiIcons.SiMoodle, color: "text-[#F98012]" },
    "LearnDash": { icon: FaBook, color: "text-[#1E1E1E]" }, // Generic LMS icon
    "Vimeo API": { icon: SiIcons.SiVimeo, color: "text-[#1AB7EA]" },
    "Playwright": { icon: Shield, color: "text-[#2EAD33]" }, // Using Shield as fallback
    "TestRail": { icon: SiIcons.SiJira, color: "text-[#5D5D5D]" }, // Fallback
    "RestAssured": { icon: FaFlask, color: "text-[#FF6C37]" },
    "AWS CodePipeline": { icon: FaAws, color: "text-[#FF9900]" },
    "AWS S3": { icon: FaAws, color: "text-[#FF9900]" },
    "Jenkins": { icon: SiIcons.SiJenkins, color: "text-[#D24939]" },
    "Git": { icon: SiIcons.SiGit, color: "text-[#F05032]" },
    "Sentry": { icon: SiIcons.SiSentry, color: "text-[#362D59]" },
    "SonarQube": { icon: SiIcons.SiSonarqube, color: "text-[#4E9BCD]" }
};

const themes = {
    it: {
        iconBg: "bg-violet-600",
        valueTitle: "Business Value",
        valueDot: "bg-violet-500",
        checkColor: "text-violet-500",
        stackTitle: "Technology Stack",
        stackBorder: "border-slate-200"
    },
    dm: {
        iconBg: "bg-gradient-to-r from-orange-500 to-pink-500",
        valueTitle: "Growth Impact",
        valueDot: "bg-orange-500",
        checkColor: "text-orange-500",
        stackTitle: "Tools & Platforms",
        stackBorder: "border-orange-200"
    },
    hr: {
        iconBg: "bg-emerald-600",
        valueTitle: "People Advantage",
        valueDot: "bg-emerald-500",
        checkColor: "text-emerald-600",
        stackTitle: "Key Competencies",
        stackBorder: "border-emerald-200"
    },
    training: {
        iconBg: "bg-blue-600",
        valueTitle: "Career Impact",
        valueDot: "bg-blue-500",
        checkColor: "text-blue-600",
        stackTitle: "Curriculum Focus",
        stackBorder: "border-blue-200"
    }
};

const ServiceDeepDive = ({ service, variant = 'it' }) => {

    if (!service) return null;
    const theme = themes[variant] || themes.it;

    return (
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
                <h2 className="text-4xl font-black mb-8 text-slate-900 flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${theme.iconBg}`}><Cpu size={24} /></span>
                    Strategic Overview
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    {service.description}
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${theme.valueDot}`}></span> {theme.valueTitle}
                    </h4>
                    <ul className="space-y-3">
                        {service.benefits && service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                <CheckCircle2 size={16} className={`${theme.checkColor} mt-0.5 shrink-0`} />
                                {benefit}
                            </li>
                        ))}
                        {/* Fallbacks if no benefits array */}
                        {!service.benefits && (
                            <>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className={theme.checkColor} /> scalable architecture for future growth</li>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className={theme.checkColor} /> Enhanced user engagement and retention</li>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className={theme.checkColor} /> Streamlined operational efficiency</li>
                            </>
                        )}
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
                <h3 className={`text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-b pb-2 inline-block ${theme.stackBorder}`}>{theme.stackTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.technologies && service.technologies.map((tech, index) => {
                        const techData = techMap[tech];
                        const Icon = techData ? techData.icon : null;

                        // Dynamic icon color adjustment could go here, but keeping default brand colors is usually better for logos.
                        // However, we can style the box.
                        const boxClass = variant === 'dm'
                            ? "hover:border-orange-200 hover:shadow-orange-100"
                            : variant === 'hr' ? "rounded-full aspect-square" : "rounded-xl";

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                className={`flex flex-col items-center justify-center p-6 bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md ${boxClass} ${variant === 'hr' ? 'h-auto py-8' : 'min-h-[7rem] h-full'}`}
                            >
                                {Icon ? (
                                    <Icon size={techData.size || 32} className={`mb-3 ${techData.color || 'text-slate-600'}`} />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-slate-100 mb-3 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                                    </div>
                                )}
                                <span className="font-bold text-slate-700 text-sm text-center">{tech}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};
export default ServiceDeepDive;
