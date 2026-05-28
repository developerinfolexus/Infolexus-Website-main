import seoImg from '../assets/digital marketing/seo.jpeg';
import googleAdsImg from '../assets/digital marketing/google ads.jpeg';
import metaAdsImg from '../assets/digital marketing/meta ads .jpeg';
import socialImg from '../assets/digital marketing/socialmedia.jpeg';
import contentImg from '../assets/digital marketing/content marketing.jpeg';
import emailImg from '../assets/digital marketing/emailmarketing.jpeg';
import webOptImg from '../assets/digital marketing/weboptimazation.jpeg';
import analyticsImg from '../assets/digital marketing/analatics.jpeg';
import videoImg from '../assets/digital marketing/videoshooting .jpeg';

export const dmServiceDetails = {
    'seo': {
        title: "Search Engine Optimization (SEO)",
        subtitle: "Rank Higher on Google and Drive Sustainable Organic Traffic.",
        description: "Visibility is the key to online success. We go beyond basic keywords, performing deep technical audits and extensive research to understand your customers. By optimizing on-page content and building quality backlinks, we help you climb rankings and drive steady, organic traffic, reducing reliance on paid ads.",
        features: [
            "Comprehensive Website Audit",
            "Keyword Research & Strategy",
            "On-Page Optimization (Meta tags, Headers, Content)",
            "Technical SEO (Site Speed, Mobile-Friendliness)",
            "Link Building & Off-Page Strategy",
            "Local SEO for Geographic Targeting"
        ],
        image: seoImg,
        benefits: [
            "Increase organic visibility and brand awareness",
            "Drive high-quality, targeted traffic",
            "Cost-effective long-term marketing strategy"
        ],
        process: [
            { title: "Audit", desc: "Analyzing your current site health and competitors." },
            { title: "Strategy", desc: "Identifying high-value keywords and content gaps." },
            { title: "Optimization", desc: "Implementing technical and content fixes." },
            { title: "Growth", desc: "Building authority through backlinks and content." }
        ],
        technologies: ["Google Analytics", "SEMrush", "WordPress", "Search Console"]
    },
    'google-ads': {
        title: "Google Ads (PPC)",
        subtitle: "Capture High-Intent Leads When It Matters Most.",
        description: "Be there exactly when customers are searching for you. We manage high-performance Google Ads campaigns that target users with high intent. By optimizing keywords and bidding strategies, we drive immediate traffic and lower your cost-per-acquisition, ensuring you get the most out of every ad spend.",
        features: [
            "Search Network Campaigns",
            "Display & Video Advertising",
            "Shopping Ads for E-commerce",
            "Keyword Research & Bidding",
            "Negative Keyword Optimization",
            "Conversion Tracking Setup"
        ],
        image: googleAdsImg,
        benefits: [
            "Immediate visibility on search engines",
            "Targets users ready to buy",
            "Pay only for clicks, not impressions"
        ],
        process: [
            { title: "Research", desc: "Identifying high-value keywords." },
            { title: "Setup", desc: "Structuring ad groups and campaigns." },
            { title: "Optimize", desc: "Refining bids and negative keywords." },
            { title: "Scale", desc: "Increasing budget on winning ads." }
        ],
        technologies: ["Google Ads", "Google Analytics", "Looker", "Tag Manager"]
    },
    'meta-ads': {
        title: "Meta Ads (Facebook & Instagram)",
        subtitle: "Target Audiences with Precision and Visual Impact.",
        description: "Reach your ideal customers where they spend their time. We specialize in visually engaging Meta Ads that target users based on demographics, interests, and behaviors. Through rigorous A/B testing of creatives, we build brand awareness and drive conversions on Facebook and Instagram.",
        features: [
            "Audience Segmentation & Targeting",
            "Creative A/B Testing",
            "Retargeting Campaigns",
            "Instagram Reels & Story Ads",
            "Catalog Sales & Dynamic Ads",
            "Lead Gen Forms Integration"
        ],
        image: metaAdsImg,
        benefits: [
            "Highly visual brand storytelling",
            "Precise demographic targeting",
            "Effective for retargeting past visitors"
        ],
        process: [
            { title: "Targeting", desc: "Defining ideal customer personas." },
            { title: "Creative", desc: "Designing scroll-stopping visuals." },
            { title: "Launch", desc: "Deploying campaigns across placements." },
            { title: "Refine", desc: "Optimizing for highest ROAS." }
        ],
        technologies: ["Meta Ads", "Canva", "Pixel Helper", "CapCut"]
    },
    'smm': {
        title: "Social Media Marketing",
        subtitle: "Connect, Engage, and Grow Your Brand Audience.",
        description: "Your social media presence is often your first impression. We build strategies tailored to your goals, from stunning graphics to engaging captions across all major platforms. By managing communities and fostering genuine connections, we turn casual followers into loyal brand advocates.",
        features: [
            "Social Media Strategy Development",
            "Content Calendar Creation & Publishing",
            "Community Management & Engagement",
            "Paid Social Advertising (Meta, LinkedIn)",
            "Influencer Marketing Collaboration",
            "Brand Reputation Management"
        ],
        image: socialImg,
        benefits: [
            "Direct engagement with customers",
            "Increased brand loyalty and trust",
            "Viral potential for content"
        ],
        process: [
            { title: "Plan", desc: "Defining voice, tone, and platforms." },
            { title: "Create", desc: "Designing visuals and writing captions." },
            { title: "Engage", desc: "Responding to comments and messages." },
            { title: "Grow", desc: "Analyzing metrics to improve reach." }
        ],
        technologies: ["Meta Ads", "LinkedIn", "Canva", "Buffer"]
    },
    'content': {
        title: "Content Marketing",
        subtitle: "Valuable Content that Educates, Engages, and Converts.",
        description: "Content is the strategic foundation of your digital identity. We create high-value blogs, articles, and copy that solve audience problems. consistently delivering quality information establishes your brand as a thought leader, builds trust, and supports SEO by guiding visitors naturally through the sales funnel.",
        features: [
            "Blog Post Writing & Management",
            "Whitepapers & E-books",
            "Video Scripting & Production",
            "Infographics & Visual Content",
            "Case Studies & Success Stories",
            "Content Distribution Strategy"
        ],
        image: contentImg,
        benefits: [
            "Builds authority and credibility",
            "Supports SEO efforts",
            "Nurtures leads through the funnel"
        ],
        process: [
            { title: "Research", desc: "Understanding audience interests." },
            { title: "Draft", desc: "Creating compelling narratives." },
            { title: "Edit", desc: "Refining for clarity and SEO." },
            { title: "Publish", desc: "Distributing across channels." }
        ],
        technologies: ["WordPress", "HubSpot", "Google Analytics", "Canva"]
    },
    'email': {
        title: "Email Marketing",
        subtitle: "Personalized Automation to Nurture Leads and Retain Customers.",
        description: "Email remains the highest ROI channel. We replace generic blasts with segmented, personalized campaigns and automated flows. By analyzing engagement and refining strategies, we ensure your messages are read and acted upon, driving repeat business and customer loyalty.",
        features: [
            "List Building & Segmentation",
            "Newsletter Design & Creation",
            "Automated Drip Campaigns",
            "Cart Abandonment Flows",
            "Personalization & Dynamic Content",
            "A/B Testing Subject Lines"
        ],
        image: emailImg,
        benefits: [
            "High ROI compared to other channels",
            "Direct communication line to customers",
            "Automated customer lifecycle management"
        ],
        process: [
            { title: "Segment", desc: "Categorizing subscribers by behavior." },
            { title: "Design", desc: "Creating responsive email templates." },
            { title: "Send", desc: "Scheduling campaigns for optimal times." },
            { title: "Analyze", desc: "Tracking open and click-through rates." }
        ],
        technologies: ["Mailchimp", "HubSpot", "Salesforce", "Canva"]
    },
    'web-optimization': {
        title: "Web Optimization",
        subtitle: "Faster Performance for a Seamless and Superior User Experience.",
        description: "A slow website drives customers away. We optimize your site's technical performance, ensuring lightning-fast load speeds. Beyond speed, we enhance User Experience (UX) and focus on Conversion Rate Optimization (CRO) to provide visitors a frictionless path to becoming paying customers.",
        features: [
            "Site Speed Optimization (Core Web Vitals)",
            "Mobile Responsiveness & UX Tuning",
            "Accessibility Compliance (WCAG)",
            "Technical Debt Reduction",
            "Caching & CDN Configuration",
            "Database Optimization"
        ],
        image: webOptImg,
        benefits: [
            "Lower bounce rates",
            "Better search engine rankings",
            "Improved user satisfaction"
        ],
        process: [
            { title: "Audit", desc: "Measuring baseline performance metrics." },
            { title: "Fix", desc: "Addressing critical technical issues." },
            { title: "Enhance", desc: "Improving visual stability and interactivity." },
            { title: "Monitor", desc: "Continuous performance tracking." }
        ],
        technologies: ["Lighthouse", "GTmetrix", "React", "Next.js"]
    },
    'analytics': {
        title: "Analytics & Reporting",
        subtitle: "Actionable Insights and Transparent Data for Smarter Decisions.",
        description: "Marketing without data is guessing. We set up advanced tracking with tools like GA4 to monitor every interaction. Instead of confusing numbers, we provide clear reports and actionable insights, allowing us to pivot strategies and ensure your budget is used effectively.",
        features: [
            "Google Analytics 4 (GA4) Setup",
            "Conversion Funnel Analysis",
            "Heatmap & User Behavior Tracking",
            "A/B Testing Landing Pages",
            "Custom Reporting Dashboards",
            "ROI Attribution Modeling"
        ],
        image: analyticsImg,
        benefits: [
            "Clear visibility into marketing performance",
            "Improved website conversion rates",
            "Data-driven budget allocation"
        ],
        process: [
            { title: "Track", desc: "Implementing tags and events." },
            { title: "Analyze", desc: "Identifying drop-off points." },
            { title: "Test", desc: "Running experiments to improve UX." },
            { title: "Optimize", desc: "Implementing winning variations." }
        ],
        technologies: ["Google Analytics", "Looker", "Tableau", "Hotjar"]
    },
    'video': {
        title: "Video Shoots & Editing",
        subtitle: "Dynamic Visual Storytelling for the Modern Digital Era.",
        description: "Video is the only medium that consistently stops the scroll. We handle end-to-end production, from concept to editing. Our team uses professional equipment and sharp editing techniques to create visually compelling stories that evoke emotion and communicate your brand message clearly.",
        features: [
            "Concept Development & Scriptwriting",
            "Professional Video Shooting (4K)",
            "Post-Production Editing & VFX",
            "Motion Graphics & Animation",
            "Sound Design & Colour Grading",
            "Social Media Shorts & Reels"
        ],
        image: videoImg,
        benefits: [
            "Highest engagement rate of any media",
            "Complex ideas explained simply",
            "Stronger emotional connection with brand"
        ],
        process: [
            { title: "Concept", desc: "Brainstorming and storyboarding." },
            { title: "Shoot", desc: "Capturing high-quality footage." },
            { title: "Edit", desc: "Assembling the story with professional cuts." },
            { title: "Deliver", desc: "Formatting for various platforms." }
        ],
        technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Cinema 4D"]
    },
    'community': {
        title: "Community Engagement",
        subtitle: "Building Loyalty Through Active Conversations.",
        description: "Brands that listen, grow. We help you build and manage thriving online communities where your customers feel heard and valued. By fostering genuine interactions and moderating discussions, we turn passive followers into active brand advocates who champion your products.",
        features: [
            "Community Moderation",
            "Engagement Strategy",
            "Event Management",
            "Brand Advocacy Programs"
        ],
        image: socialImg,
        benefits: ["Higher customer retention", "Valuable product feedback", "Organic advocacy"],
        process: [
            { title: "Listen", desc: "Monitoring conversations." },
            { title: "Engage", desc: "Participating in discussions." },
            { title: "Nurture", desc: "Rewarding top contributors." },
            { title: "Grow", desc: "Expanding the community." }
        ],
        technologies: ["Discord", "Facebook Groups", "Slack", "Circle"]
    },
    'social-ads': {
        title: "LinkedIn & Twitter Ads",
        subtitle: "Professional Targeting for B2B Success.",
        description: "Reach decision-makers where they do business. Our specialized B2B ad strategies on LinkedIn and Twitter/X ensure your message reaches professionals, executives, and industry leaders. We craft high-value content ads that generate qualified leads for your enterprise solutions.",
        features: [
            "Account-Based Marketing (ABM)",
            "Lead Gen Forms",
            "Sponsored Content",
            "Executive Targeting"
        ],
        image: metaAdsImg,
        benefits: ["High-quality B2B leads", "Precise professional targeting", "Enhanced brand authority"],
        process: [
            { title: "Target", desc: "Identifying key accounts." },
            { title: "Create", desc: "Designing  professional ads." },
            { title: "Launch", desc: "Starting the campaign." },
            { title: "Optimize", desc: "Refining for CPL." }
        ],
        technologies: ["LinkedIn Campaign Manager", "Twitter Ads", "Sales Navigator"]
    },
    'creative': {
        title: "Creative Writing",
        subtitle: "Words That Captivate and Convert.",
        description: "Your brand's voice matters. Our creative writing services go beyond basic copy—we craft compelling narratives that resonate with your audience's emotions. From catchy slogans to immersive brand stories, we ensure every word aligns with your identity and drives action.",
        features: [
            "Brand Storytelling",
            "Ad Copywriting",
            "Slogans & Taglines",
            "Scriptwriting"
        ],
        image: contentImg,
        benefits: ["Stronger brand identity", "Higher emotional connection", "Improved ad performance"],
        process: [
            { title: "Discovery", desc: "Finding your brand voice." },
            { title: "Drafting", desc: "Writing creative concepts." },
            { title: "Refining", desc: "Polishing for impact." },
            { title: "Finalize", desc: "delivering ready-to-use copy." }
        ],
        technologies: ["Google Docs", "Grammarly", "Hemingway App"]
    },
    'automation': {
        title: "Marketing Automation",
        subtitle: "Streamline Your Growth on Autopilot.",
        description: "Scale your marketing without scaling your workload. We implement robust automation workflows that nurture leads 24/7. From welcome sequences to complex behavioral triggers, we ensure the right message reaches the right person at the perfect time, automatically.",
        features: [
            "Workflow Design",
            "CRM Integration",
            "Behavioral Triggers",
            "Lead Scoring"
        ],
        image: emailImg,
        benefits: ["Time savings", "Consistent follow-ups", "Higher conversion rates"],
        process: [
            { title: "Map", desc: "Designing the customer journey." },
            { title: "Build", desc: "Setting up automation rules." },
            { title: "Integrate", desc: "Connecting with CRM." },
            { title: "Monitor", desc: "Optimizing flow performance." }
        ],
        technologies: ["HubSpot", "Zapier", "ActiveCampaign", "Make"]
    },
    'ppc': {
        title: "Pay Per Click (PPC) Management",
        subtitle: "Maximize ROI with Data-Driven Search Campaigns.",
        description: "Don't just spend budget; invest it. Our PPC experts manage your campaigns across search engines to ensure every click counts. From keyword selection to bid optimization and landing page analysis, we handle the technicalities so you see measurable returns.",
        features: [
            "Performance Campaign Management",
            "Search Advertisements",
            "Analytics & Optimization",
            "Keyword Bid Strategy",
            "Competitor Analysis",
            "Landing Page CRO"
        ],
        image: googleAdsImg,
        benefits: ["Immediate traffic boost", "Control over ad spend", "Highly trackable results"],
        process: [
            { title: "Plan", desc: "Setting goals and budget." },
            { title: "Launch", desc: "Going live with targeted ads." },
            { title: "Monitor", desc: "Tracking clicks and conversions." },
            { title: "Refine", desc: "Optimizing for lower CPA." }
        ],
        technologies: ["Google Ads", "Bing Ads", "Google Analytics", "Looker"]
    },
    'performance': {
        title: "Performance Marketing",
        subtitle: "Omnichannel Advertising for Real Business Growth.",
        description: "We bring together the power of Google, Meta, LinkedIn, and more under one roof. Our performance marketing strategy focuses on one thing: Results. Whether it's leads, sales, or app installs, we optimize across all channels to find your audience where they are most active.",
        features: [
            "Google Ads Campaigns",
            "Meta Ads (Facebook & Instagram)",
            "YouTube Video Ads",
            "LinkedIn B2B Advertising",
            "Twitter/X Ads",
            "Cross-Channel Retargeting"
        ],
        image: metaAdsImg,
        benefits: ["Holistic view of marketing", "Diversified traffic sources", "Scalable growth engine"],
        process: [
            { title: "Strategy", desc: "Channel selection based on audience." },
            { title: "Creative", desc: "Adapting assets for each platform." },
            { title: "Execute", desc: "Launching synchronized campaigns." },
            { title: "Scale", desc: "Saturating winning channels." }
        ],
        technologies: ["Meta Ads", "Google Ads", "LinkedIn Campaign Manager", "Twitter Ads"]
    },
    'reach': {
        title: "Reach Campaigns",
        subtitle: "Direct Engagement to Nurture and Convert.",
        description: "Stay top-of-mind with your audience. Our Reach Campaigns utilize direct channels like Email and WhatsApp to deliver personalized messages. Combined with intelligent automation, we ensure leads are nurtured effectively from the first touchpoint to the final sale.",
        features: [
            "Email Marketing Campaigns",
            "WhatsApp Business API Campaigns",
            "Marketing Automation Flows",
            "Broadcast Messaging",
            "Subscriber Segmentation",
            "Drip Sequences"
        ],
        image: emailImg,
        benefits: ["High open and read rates", "Personalized customer touchpoints", "Efficient lead nurturing"],
        process: [
            { title: "Build", desc: "Growing subscriber lists." },
            { title: "Segment", desc: "Grouping audiences by interest." },
            { title: "Blast", desc: "Sending coordinated campaigns." },
            { title: "Automate", desc: "Setting up trigger-based responses." }
        ],
        technologies: ["Mailchimp", "WhatsApp Business API", "HubSpot", "Twilio"]
    },
    // --- SEO Specifics ---
    'on-page-seo': {
        title: "On-Page SEO",
        subtitle: "Content and Structure Perfection.",
        description: "Optimizing individual web pages to rank higher and earn more relevant traffic. We focus on content quality, keyword placement, header tags, and internal linking structure to ensure search engines understand your value.",
        features: ["Keyword Optimization", "Meta Tags & Descriptions", "Header Strategy (H1, H2)", "Image Optimization", "Internal Linking", "Content Freshness"],
        process: [{ title: "Audit", desc: "Checking current page health." }, { title: "Optimize", desc: "updating tags and content." }, { title: "Review", desc: "Checking keyword density." }],
        technologies: ["Yoast SEO", "RankMath", "Google Search Console"],
        image: seoImg
    },
    'off-page-seo': {
        title: "Off-Page SEO",
        subtitle: "Building Authority and Trust.",
        description: "Your site's reputation is built outside of it. We execute ethical link-building strategies, guest posting, and social signaling to demonstrate your authority to search engines.",
        features: ["Backlink Building", "Guest Blogging", "Social Signals", "Brand Mentions", "Influencer Outreach"],
        process: [{ title: "Research", desc: "Finding authority sites." }, { title: "Outreach", desc: "Pitching content." }, { title: "Link", desc: "Securing backlinks." }, { title: "Monitor", desc: "Tracking backlink health." }],
        technologies: ["Ahrefs", "Moz", "BuzzSumo"],
        image: seoImg
    },
    'technical-seo': {
        title: "Technical SEO",
        subtitle: "A Solid Foundation for Search.",
        description: "Ensuring your website meets the technical requirements of modern search engines. We fix crawl errors, optimize site speed, ensure mobile-friendliness, and implement structured data.",
        features: ["Site Speed Optimization", "XML Sitemaps", "Robots.txt Configuration", "Schema Markup", "Canonical Tags", "HTTPS Security"],
        process: [{ title: "Crawl", desc: "identifying technical errors." }, { title: "Fix", desc: "Resolving code issues." }, { title: "Verify", desc: "Resubmitting to Google." }],
        technologies: ["Screaming Frog", "PageSpeed Insights", "Lighthouse"],
        image: webOptImg
    },

    // --- SMM Specifics ---
    'social-media-management': {
        title: "Social Media Management",
        subtitle: "Consistent Brand Presence.",
        description: "We handle the day-to-day management of your social profiles. From scheduling posts to curating feeds, we ensure your brand stays active and relevant without you lifting a finger.",
        features: ["Profile Optimization", "Content Scheduling", "Hashtag Strategy", "Trend Monitoring"],
        process: [{ title: "Schedule", desc: "Planning the month." }, { title: "Post", desc: "Publishing content." }, { title: "Monitor", desc: "Watching engagement." }],
        technologies: ["Buffer", "Hootsuite", "Later"],
        image: socialImg
    },
    'content-creation': {
        title: "Social Content Creation",
        subtitle: "Visuals That Stop the Scroll.",
        description: "Designing high-quality graphics, carousels, and stories that capture attention. Our creative team ensures every asset aligns with your brand identity.",
        features: ["Graphic Design", "Carousel Posts", "Story Highlights", "Meme Marketing"],
        process: [{ title: "Concept", desc: "Ideating visuals." }, { title: "Design", desc: "Creating assets." }, { title: "Approve", desc: "Client review." }],
        technologies: ["Canva", "Photoshop", "Illustrator"],
        image: contentImg
    },
    'video-production': {
        title: "Video Production",
        subtitle: "Cinematic Quality for Digital.",
        description: "Full-service video production for your brand. We handle scripting, shooting, and editing to produce professional reels, ads, and corporate videos.",
        features: ["4K Shooting", "Drone Footage", "Professional Audio", "Scripting"],
        process: [{ title: "Storyboard", desc: "Visualizing the shot." }, { title: "Shoot", desc: "On-location filming." }, { title: "Edit", desc: "Post-production magic." }],
        technologies: ["Premiere Pro", "Sony Alpha", "DaVinci"],
        image: videoImg
    },
    'community-engagement': {
        title: "Community Engagement",
        subtitle: "Nurturing Your Tribe.",
        description: "Active community management to foster loyalty. We reply to comments, manage DMs, and facilitate discussions to keep your audience connected.",
        features: ["Comment Moderation", "DM Management", "Q&A Sessions", "Polls & Surveys"],
        technologies: ["Sprout Social", "Meta Business Suite"],
        image: socialImg
    },

    // --- PPC Specifics ---
    'performance-campaigns': {
        title: "Performance Campaigns",
        subtitle: "Results-Oriented Advertising.",
        description: "Campaigns designed purely for conversions. We focus on CPA, ROAS, and lead quality to ensure your ad spend generates tangible revenue.",
        features: ["Conversion Optimization", "Landing Page Testing", "Pixel Tracking"],
        technologies: ["Google Ads", "Meta Pixel"],
        image: googleAdsImg
    },
    'search-ads': {
        title: "Search Advertisements",
        subtitle: "Capturing Intent.",
        description: "Dominating the search results page. We create compelling text ads that appear exactly when potential customers are looking for your services.",
        features: ["Keyword Bidding", "Ad Copywriting", "Extension Setup"],
        technologies: ["Google Ads", "Bing Ads"],
        image: googleAdsImg
    },
    'ppc-analytics': {
        title: "PPC Analytics",
        subtitle: "Data-Driven Ad Refinement.",
        description: "Deep dive into ad performance. We analyze which keywords, creatives, and times of day yield the best results to continuously improve campaign efficiency.",
        features: ["ROAS Analysis", "Click Fraud Protection", "Attribution Modeling"],
        technologies: ["ClickCease", "Google Analytics"],
        image: analyticsImg
    },
    'linkedin-twitter-ads': {
        title: "LinkedIn & Twitter Ads",
        subtitle: "B2B and Real-Time Targeting.",
        description: "Reach professionals on LinkedIn and join trending conversations on Twitter. Perfect for B2B brands looking for decision-makers.",
        features: ["Job Title Targeting", "Company Size Filtering", "Conversation Targeting"],
        technologies: ["LinkedIn Campaign Manager", "X Ads"],
        image: metaAdsImg
    },

    // --- Content & Reach ---
    'blog-writing': {
        title: "Blog & Article Writing",
        subtitle: "SEO-Rich Long Form Content.",
        description: "Detailed articles that answer your customers' questions. Great for building authority and ranking for long-tail keywords.",
        features: ["Keyword Integration", "Topic Research", "Evergreen Content"],
        technologies: ["WordPress", "Google Docs", "Grammarly", "Yoast SEO"],
        image: contentImg
    },
    'video-marketing': {
        title: "Video Marketing Strategy",
        subtitle: "Promoting Your Visual Story.",
        description: "It's not enough to make a video; you have to distribute it. We plan how to seed your video content across platforms for maximum views.",
        features: ["YouTube Optimization", "Video SEO", "Distribution Planning"],
        technologies: ["YouTube", "TikTok", "Meta Ads", "Google Analytics"],
        image: videoImg
    },
    'creative-writing': {
        title: "Creative Writing",
        subtitle: "Brand Voice Development.",
        description: "Establishing a unique tone of voice. From punchy taglines to emotional brand manifestos.",
        image: contentImg,
        features: ["Brand Voice Strategy", "Web Copywriting", "SEO Articles", "Ad Copy", "Email Scripts", "Product Descriptions"],
        technologies: ["Google Docs", "Grammarly", "Yoast SEO", "Hemingway App"]
    },
    'email-marketing': {
        title: "Email Marketing",
        subtitle: "Direct to Inbox.",
        description: "Newsletters and promos that get opened.",
        image: emailImg,
        features: ["Campaign Strategy", "Newsletter Design", "List Segmentation", "Automated Flows", "A/B Testing", "Analytics"],
        technologies: ["Mailchimp", "Klaviyo", "HubSpot", "Litmus"],
        process: [
            { title: "Audit", desc: "Reviewing current list health." },
            { title: "Design", desc: "Creating mobile-friendly templates." },
            { title: "Deploy", desc: "Scheduling segmented campaigns." },
            { title: "Analyze", desc: "Reviewing open and click rates." }
        ]
    },
    'whatsapp-marketing': {
        title: "WhatsApp Marketing",
        subtitle: "Instant Customer Connection.",
        description: "Using the WhatsApp Business API for broadcast messages and automated support.",
        features: ["Broadcast Lists", "Chatbots", "Catalog Sharing", "Automated Replies", "Message Templates", "Click-to-Chat Ads"],
        technologies: ["WhatsApp Business API", "Twilio", "Wati", "Interakt"],
        image: emailImg
    },
    'marketing-automation': {
        title: "Marketing Automation",
        subtitle: "Set It and Forget It.",
        description: "Building workflows that nurture leads automatically based on their behavior.",
        features: ["Email Sequences", "Lead Scoring", "CRM Sync", "Behavioral Triggers", "Dynamic Content", "Auto-responders"],
        technologies: ["HubSpot", "ActiveCampaign", "Marketo", "Zapier"],
        image: emailImg
    },
    'performance-tracking': {
        title: "Performance Tracking",
        subtitle: "Live Metric Monitoring.",
        description: "Dashboards that show you exactly how your marketing is performing in real-time.",
        image: analyticsImg,
        features: ["Real-time Dashboards", "KPI Monitoring", "Custom Reports", "Goal Tracking", "Funnel Visualization", "Attribution Modeling"],
        technologies: ["Google Looker Studio", "Tableau", "Databox", "PowerBI"],
        process: [
            { title: "Setup", desc: "Connecting data sources." },
            { title: "Monitor", desc: "Tracking live metrics." },
            { title: "Report", desc: "Generating weekly insights." },
            { title: "Optimize", desc: "Refining KPIs." }
        ]
    },
    'roi-analysis': {
        title: "ROI Analysis",
        subtitle: "The Bottom Line.",
        description: "Calculating the exact return on every marketing dollar spent.",
        image: analyticsImg,
        features: ["Cost Analysis", "Revenue Attribution", "Campaign ROI", "Forecasting", "Budget Optimization", "Trend Analysis"],
        technologies: ["Excel", "Google Sheets", "Supermetrics", "ProfitWell"]
    }
};
