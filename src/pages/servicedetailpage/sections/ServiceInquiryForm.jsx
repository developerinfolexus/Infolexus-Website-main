import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { API_BASE_URL } from '../../../lib/api';

const ServiceInquiryForm = ({ id, variant = 'default' }) => {
    const location = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Determine service type based on URL
    const isDigitalMarketing = location.pathname.includes('/dm-services');
    const isITServices = location.pathname.includes('/services') && !location.pathname.includes('/dm-services');

    // User type for upskilling form (job-seeker variant)
    const [userType, setUserType] = useState('job-seeker'); // job-seeker | college | company

    const [formData, setFormData] = useState({
        // Common fields
        name: '',
        email: '',
        phone: '',

        // Job Seeker specific
        interestedCourse: '',
        learningMode: '',
        message: '',

        // College specific
        instituteName: '',
        studentCount: '',
        trainingDomain: '',

        // Company specific
        companyName: '',
        employeeCount: '',
        trainingType: '',

        // Keep existing fields for default/other forms
        location: '',
        company: '',
        role: '',
        orgType: '',
        assistance: '',
        orgTypeOther: '',
        assistanceOther: '',
        howDidYouHear: '',
        howDidYouHearOther: '',
        collegeName: '',
        degree: '',
        yearOfPassing: '',
        interest: '',
        currentStatus: '',
        experienceDetails: '',
        preferredTime: '',
        programType: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using our backend endpoint
        const endpoint = `${API_BASE_URL}/send-application`;

        // Construct Subject and position based on variant and userType
        let position = 'Service Inquiry';
        if (variant === 'job-seeker') {
            if (userType === 'job-seeker') position = `Training Inquiry - Job Seeker: ${formData.name}`;
            else if (userType === 'college') position = `Training Inquiry - College: ${formData.instituteName}`;
            else if (userType === 'company') position = `Training Inquiry - Company: ${formData.companyName}`;
        }
        else if (variant === 'college') position = `College Partnership Inquiry: ${formData.instituteName}`;
        else position = `Service Inquiry: ${formData.company}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('position', position);
            // Default is support, but making it explicit for clarity
            if (variant !== 'job-seeker' && variant !== 'college') {
                formDataToSend.append('recipientType', 'support');
            } else {
                // Even job-seeker/college variants for ServiceInquiry go to support as per logic 
                // (only ApplicationForm goes to Mani)
                formDataToSend.append('recipientType', 'support');
            }

            // Add userType for job-seeker variant
            if (variant === 'job-seeker') {
                formDataToSend.append('userType', userType);
            }

            // Add all other fields
            Object.entries(formData).forEach(([key, value]) => {
                if (!['name', 'email', 'phone'].includes(key) && value) {
                    // Handle 'Other' fields logic
                    if (key === 'orgType' && value === 'Other') {
                        formDataToSend.append('orgType', formData.orgTypeOther || value);
                    } else if (key === 'howDidYouHear' && value === 'Other') {
                        formDataToSend.append('howDidYouHear', formData.howDidYouHearOther || value);
                    } else if (key === 'assistance' && value === 'Other') {
                        formDataToSend.append('assistance', formData.assistanceOther || value);
                    } else if (!['orgTypeOther', 'howDidYouHearOther', 'assistanceOther'].includes(key)) {
                        formDataToSend.append(key, value);
                    }
                }
            });

            const response = await fetch(endpoint, {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    // Reset form to MVP structure
                    setFormData({
                        name: '', email: '', phone: '',
                        interestedCourse: '', learningMode: '', message: '',
                        instituteName: '', studentCount: '', trainingDomain: '',
                        companyName: '', employeeCount: '', trainingType: '',
                        // Keep legacy fields for other forms
                        location: '', company: '', role: '', orgType: '', assistance: '',
                        orgTypeOther: '', assistanceOther: '', howDidYouHear: '', howDidYouHearOther: '',
                        collegeName: '', degree: '', yearOfPassing: '', interest: '',
                        currentStatus: '', experienceDetails: '', preferredTime: '', programType: ''
                    });
                    setTimeout(() => setSubmitStatus(null), 5000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    // --- RENDER CONTENT BASED ON VARIANT ---
    const renderHeading = () => {
        if (variant === 'job-seeker') return { title: "Register for Upskilling Course", subtitle: "Take the first step towards your dream career." };
        if (variant === 'college') return { title: "Empower Your Institution", subtitle: "Partner with us for industry-leading campus training and placement solutions." };
        return { title: "Start Your Digital Transformation", subtitle: "Follow us on social media for latest updates." };
    };

    const { title, subtitle } = renderHeading();

    return (
        <section id={id} className="py-20 bg-[#081A4A] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">{title}</h2>
                    <p className="text-slate-300 text-lg">{subtitle}</p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold border border-green-200">
                            Registration Successful! We&apos;ll contact you shortly.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold border border-red-200">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={variant === 'job-seeker' ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"}>

                        {/* ================= DYNAMIC MVP UPSKILLING FORM ================= */}
                        {variant === 'job-seeker' && (
                            <>
                                {/* User Type Selector - Always First */}
                                <div className="md:col-span-2 mb-4">
                                    <label className="block text-sm font-bold text-slate-700 mb-1">I AM A <span className="text-red-500">*</span></label>
                                    <select
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value)}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none"
                                        required
                                    >
                                        <option value="job-seeker">Job Seeker</option>
                                        <option value="college">College / Institution</option>
                                        <option value="company">Company / Employee</option>
                                    </select>
                                </div>

                                {/* JOB SEEKER FIELDS */}
                                {userType === 'job-seeker' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                                <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                            <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Current Location <span className="text-red-500">*</span></label>
                                            <input type="text" name="location" required placeholder="City, State" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Interested Course <span className="text-red-500">*</span></label>
                                            <select name="interestedCourse" required value={formData.interestedCourse} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                                <option value="">- Select Course -</option>
                                                <option value="Full Stack Development">Full Stack Development</option>
                                                <option value="Python Programming">Python Programming</option>
                                                <option value="Java Programming">Java Programming</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="AI & Machine Learning">AI & Machine Learning</option>
                                                <option value="Cloud Computing">Cloud Computing</option>
                                                <option value="Mobile Development">Mobile Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Learning Mode <span className="text-red-500">*</span></label>
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                                    <input type="radio" name="learningMode" value="Online" checked={formData.learningMode === 'Online'} onChange={handleChange} className="w-4 h-4 text-blue-600" required /> Online
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                                    <input type="radio" name="learningMode" value="Offline" checked={formData.learningMode === 'Offline'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Offline
                                                </label>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Message / Requirements <span className="text-slate-400 text-xs">(Optional)</span></label>
                                            <textarea name="message" placeholder="Tell us about your learning goals..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none resize-none h-24"></textarea>
                                        </div>
                                    </>
                                )}

                                {/* COLLEGE FIELDS */}
                                {userType === 'college' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="name" required placeholder="Contact person name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                                <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                            <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Institution Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="instituteName" required placeholder="College or institution name" value={formData.instituteName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Student Count <span className="text-red-500">*</span></label>
                                            <select name="studentCount" required value={formData.studentCount} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                                <option value="">- Select Count -</option>
                                                <option value="10-30">10-30 students</option>
                                                <option value="30-50">30-50 students</option>
                                                <option value="50-100">50-100 students</option>
                                                <option value="100-200">100-200 students</option>
                                                <option value="200+">200+ students</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Training Domain <span className="text-red-500">*</span></label>
                                            <select name="trainingDomain" required value={formData.trainingDomain} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                                <option value="">- Select Domain -</option>
                                                <option value="Full Stack Development">Full Stack Development</option>
                                                <option value="Python Programming">Python Programming</option>
                                                <option value="Java Programming">Java Programming</option>
                                                <option value="Data Science & AI">Data Science & AI</option>
                                                <option value="Soft Skills Training">Soft Skills Training</option>
                                                <option value="Placement Training">Placement Training</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Message / Requirements <span className="text-slate-400 text-xs">(Optional)</span></label>
                                            <textarea name="message" placeholder="Any specific requirements or goals..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none resize-none h-24"></textarea>
                                        </div>
                                    </>
                                )}

                                {/* COMPANY FIELDS */}
                                {userType === 'company' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="name" required placeholder="Contact person name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                                            <div className="flex">
                                                <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                                <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                            <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="companyName" required placeholder="Your company name" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Employee Count <span className="text-red-500">*</span></label>
                                            <select name="employeeCount" required value={formData.employeeCount} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                                <option value="">- Select Count -</option>
                                                <option value="1-10">1-10 employees</option>
                                                <option value="10-25">10-25 employees</option>
                                                <option value="25-50">25-50 employees</option>
                                                <option value="50-100">50-100 employees</option>
                                                <option value="100+">100+ employees</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Training Type <span className="text-red-500">*</span></label>
                                            <select name="trainingType" required value={formData.trainingType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                                <option value="">- Select Type -</option>
                                                <option value="Technical Upskilling">Technical Upskilling</option>
                                                <option value="Soft Skills & Leadership">Soft Skills & Leadership</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Cyber Security">Cyber Security</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Message / Requirements <span className="text-slate-400 text-xs">(Optional)</span></label>
                                            <textarea name="message" placeholder="Tell us about your training objectives..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none resize-none h-24"></textarea>
                                        </div>
                                    </>
                                )}
                            </>
                        )}


                        {/* ================= COLLEGE FORM ================= */}
                        {variant === 'college' && (
                            <>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Institute Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="instituteName" required placeholder="Name of College/Institute" value={formData.instituteName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Person Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" required placeholder="Enter Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                            <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Designation <span className="text-red-500">*</span></label>
                                        <input type="text" name="role" required placeholder="e.g. Placement Officer, HOD" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Requirement Type <span className="text-red-500">*</span></label>
                                        <select name="programType" required value={formData.programType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Technical Training">Technical Training (Workshops/Bootcamps)</option>
                                            <option value="Placement Drive">Campus Placement Drive</option>
                                            <option value="Soft Skills">Soft Skills & Aptitude</option>
                                            <option value="Faculty Development">Faculty Development Program</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Location <span className="text-red-500">*</span></label>
                                        <input type="text" name="location" required placeholder="City/State" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ================= DEFAULT FORM (B2B) ================= */}
                        {variant === 'default' && (
                            <>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" required placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                            <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Choose your organization type <span className="text-red-500">*</span></label>
                                        <select name="orgType" required value={formData.orgType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Startup">Startup</option>
                                            <option value="SME">SME</option>
                                            <option value="Enterprise">Enterprise</option>
                                            <option value="Non-Profit">Non-Profit</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
                                        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="company" required placeholder="Company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Role <span className="text-red-500">*</span></label>
                                            <input type="text" name="role" required placeholder="Designation" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Assistance required for <span className="text-red-500">*</span></label>
                                        <select name="assistance" required value={formData.assistance} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select Service -</option>

                                            {isITServices && (
                                                <>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Mobile App Development">Mobile App Development</option>
                                                    <option value="Enterprise Solutions">Enterprise Solutions</option>
                                                    <option value="Cloud Services">Cloud Services</option>
                                                    <option value="Cyber Security">UI & UX Design</option>
                                                </>
                                            )}

                                            {isDigitalMarketing && (
                                                <>
                                                    <option value="SEO (Search Engine Optimization)">SEO (Search Engine Optimization)</option>
                                                    <option value="SMM (Social Media Marketing)">SMM (Social Media Marketing)</option>
                                                    <option value="PPC (Pay-Per-Click)">PPC (Pay-Per-Click)</option>
                                                    <option value="Content Marketing">Content Marketing</option>
                                                    <option value="Email Marketing">Email Marketing</option>
                                                    <option value="Brand Strategy">Brand Strategy</option>
                                                </>
                                            )}

                                            {!isITServices && !isDigitalMarketing && (
                                                <>
                                                    <optgroup label="IT Services">
                                                        <option value="Web Development">Web Development</option>
                                                        <option value="Mobile App Development">Mobile App Development</option>
                                                        <option value="Enterprise Solutions">Enterprise Solutions</option>
                                                        <option value="Cloud Services">Cloud Services</option>
                                                        <option value="Cyber Security">Cyber Security</option>
                                                        <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                                                    </optgroup>

                                                    <optgroup label="Digital Marketing">
                                                        <option value="SEO (Search Engine Optimization)">SEO (Search Engine Optimization)</option>
                                                        <option value="SMM (Social Media Marketing)">SMM (Social Media Marketing)</option>
                                                        <option value="PPC (Pay-Per-Click)">PPC (Pay-Per-Click)</option>
                                                        <option value="Content Marketing">Content Marketing</option>
                                                        <option value="Email Marketing">Email Marketing</option>
                                                        <option value="Brand Strategy">Brand Strategy</option>
                                                    </optgroup>

                                                    <optgroup label="HR Services">
                                                        <option value="Recruitment & Staffing">Recruitment & Staffing</option>
                                                        <option value="Training & Development">Training & Development</option>
                                                    </optgroup>
                                                </>
                                            )}

                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Location <span className="text-red-500">*</span></label>
                                        <input type="text" name="location" required placeholder="City/State" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                            </>
                        )}


                        <div className="md:col-span-2 pt-6 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 text-lg disabled:opacity-75 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>Processing... <Loader2 className="animate-spin" /></>
                                ) : (
                                    <>
                                        {variant === 'job-seeker' ? 'Register' : variant === 'college' ? 'Request Proposal' : 'Request Consultation'}
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </section >
    );
};

export default ServiceInquiryForm;
