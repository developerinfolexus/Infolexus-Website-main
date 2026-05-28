import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiTypescript, SiKotlin, SiPython, SiSwift,
    SiSpring, SiFlask, SiDjango, SiScala,
    SiReact, SiRedux, SiAndroid, SiApple,
    SiGooglecloud, SiTerraform, SiDocker, SiKubernetes,
    SiGitlab, SiGithub, SiJenkins,
    SiTensorflow, SiKeras, SiPytorch, SiOpencv, SiSpacy,
    SiApachespark, SiApachehadoop, SiTalend,
    SiPostgresql, SiMysql, SiMongodb, SiApachesolr, SiAmazonredshift, SiRedis
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const categories = [
    {
        title: "Artificial Intelligence",
        desc: "Advanced machine learning and computer vision solutions.",
        color: "from-violet-600 to-purple-600",
        techs: [
            { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
            { name: "Keras", icon: SiKeras, color: "text-[#D00000]" },
            { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
            { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
            { name: "spaCy", icon: SiSpacy, color: "text-[#09A3D5]" },
        ]
    },
    {
        title: "Cloud",
        desc: "Scalable cloud infrastructure.",
        color: "from-blue-600 to-indigo-600",
        techs: [
            { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
            { name: "Microsoft Azure", icon: VscAzure, color: "text-[#0078D4]" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "text-[#4285F4]" },
            { name: "AWS CDK", icon: FaAws, color: "text-[#FF9900]" },
            { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
            { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
            { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
        ]
    },
    {
        title: "Big Data & Analytics",
        desc: "Processing and analyzing massive datasets.",
        color: "from-teal-500 to-emerald-500",
        techs: [
            { name: "Apache Spark", icon: SiApachespark, color: "text-[#E25A1C]" },
            { name: "Hadoop", icon: SiApachehadoop, color: "text-[#66CCFF]" },
            { name: "Talend", icon: SiTalend, color: "text-[#FF6D70]" },
        ]
    },
    {
        title: "Programming Language",
        desc: "Core languages powering our solutions.",
        color: "from-yellow-400 to-orange-500",
        techs: [
            { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
            { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
            { name: "Kotlin", icon: SiKotlin, color: "text-[#7F52FF]" },
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "Swift", icon: SiSwift, color: "text-[#F05138]" },
        ]
    },
    {
        title: "Backend",
        desc: "Robust server-side architectures.",
        color: "from-green-500 to-emerald-500",
        techs: [
            { name: "Spring", icon: SiSpring, color: "text-[#6DB33F]" },
            { name: "Spring Cloud", icon: SiSpring, color: "text-[#6DB33F]" },
            { name: "Flask", icon: SiFlask, color: "text-[#000000]" },
            { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
            { name: "Scala", icon: SiScala, color: "text-[#DC322F]" },
        ]
    },
    {
        title: "Frontend",
        desc: "Interactive web and mobile interfaces.",
        color: "from-blue-400 to-cyan-400",
        techs: [
            { name: "React JS", icon: SiReact, color: "text-[#61DAFB]" },
            { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
            { name: "Android SDK", icon: SiAndroid, color: "text-[#3DDC84]" },
            { name: "iOS SDK", icon: SiApple, color: "text-[#000000]" },
        ]
    },
    {
        title: "Database Management",
        desc: "Secure and scalable data storage solutions.",
        color: "from-slate-600 to-stone-600",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
            { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
            { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
            { name: "Apache Solr", icon: SiApachesolr, color: "text-[#D9411E]" },
            { name: "Amazon Redshift", icon: SiAmazonredshift, color: "text-[#232F3E]" },
            { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
        ]
    },
    {
        title: "CI Tools",
        desc: "Continuous integration and deployment.",
        color: "from-orange-500 to-red-500",
        techs: [
            { name: "GitLab CI/CD", icon: SiGitlab, color: "text-[#FC6D26]" },
            { name: "GitHub CI/CD", icon: SiGithub, color: "text-[#181717]" },
            { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
            { name: "AWS CodeDeploy", icon: FaAws, color: "text-[#FF9900]" },
            { name: "AWS CodePipeline", icon: FaAws, color: "text-[#FF9900]" },
        ]
    },

];

const TechCategories = () => {
    return (
        <section id="tech-stack" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-12">
                    {categories.map((category, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="md:w-1/3">
                                    <h2 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.color} mb-4`}>
                                        {category.title}
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        {category.desc}
                                    </p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                                    {category.techs.map((tech, techIdx) => (
                                        <motion.div
                                            key={techIdx}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all cursor-default group"
                                        >
                                            <tech.icon size={40} className={`${tech.color} mb-3`} />
                                            <span className="font-semibold text-slate-700">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechCategories;
