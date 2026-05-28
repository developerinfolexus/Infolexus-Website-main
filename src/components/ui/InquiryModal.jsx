import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../../lib/api';

const InquiryModal = ({ isOpen, onClose, type = 'placement' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [resumeFile, setResumeFile] = useState(null);

    const [formData, setFormData] = useState({
        // Common
        name: '',
        mobile: '',
        email: '',
        location: '',


        // Placement Specific
        college: '',
        degree: '',
        customDegree: '',
        year: '',
        customYear: '',
        course: '',
        customCourse: '',
        currentStatus: 'Fresher', // Default
        yearsOfExperience: '',
        skills: '',

        // Recruitment Specific
        companyName: '',
        requirementType: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            if (type === 'placement') {
                const formDataToSend = new FormData();
                formDataToSend.append('name', formData.name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('location', formData.location);
                formDataToSend.append('phone', formData.mobile);
                formDataToSend.append('position', 'Placement Candidate');

                // Add specific fields
                formDataToSend.append('College', formData.college);
                formDataToSend.append('Degree', formData.degree === 'Others' ? formData.customDegree : formData.degree);
                formDataToSend.append('PassingYear', formData.year === 'Others' ? formData.customYear : formData.year);
                formDataToSend.append('InterestedDomain', formData.course === 'Others' ? formData.customCourse : formData.course);
                formDataToSend.append('CurrentStatus', formData.currentStatus);
                if (formData.currentStatus === 'Experienced' && formData.yearsOfExperience) {
                    formDataToSend.append('YearsOfExperience', formData.yearsOfExperience);
                }
                if (formData.skills) {
                    formDataToSend.append('Skills', formData.skills);
                }
                formDataToSend.append('recipientType', 'mani'); // Route to mani@infolexus.com

                if (resumeFile) {
                    formDataToSend.append('attachment', resumeFile);
                }

                // Use the proxied endpoint
                const response = await fetch(`${API_BASE_URL}/send-application`, {
                    method: 'POST',
                    body: formDataToSend
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        setSubmitStatus('success');
                        setTimeout(() => {
                            closeAndReset();
                        }, 2000);
                    } else {
                        throw new Error(result.message);
                    }
                } else {
                    throw new Error('Server error');
                }

            } else {
                // Recruitment - use our backend
                const formDataToSend = new FormData();
                formDataToSend.append('name', formData.name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('location', formData.location);
                formDataToSend.append('phone', formData.mobile);
                formDataToSend.append('position', 'Recruitment Inquiry');
                formDataToSend.append('CompanyName', formData.companyName);
                formDataToSend.append('RequirementType', formData.requirementType);
                formDataToSend.append('message', formData.message);
                formDataToSend.append('recipientType', 'support'); // Route to support@infolexus.com

                const response = await fetch(`${API_BASE_URL}/send-application`, {
                    method: 'POST',
                    body: formDataToSend
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        setSubmitStatus('success');
                        setTimeout(() => {
                            closeAndReset();
                        }, 2000);
                    } else {
                        throw new Error(result.message);
                    }
                } else {
                    throw new Error('Server error');
                }
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeAndReset = () => {
        onClose();
        setSubmitStatus(null);
        setResumeFile(null);
        setFormData({
            name: '', mobile: '', email: '', location: '', college: '', degree: '', customDegree: '',
            year: '', customYear: '', course: '', customCourse: '',
            currentStatus: 'Fresher', yearsOfExperience: '', skills: '',
            companyName: '', requirementType: '', message: ''
        });
    };

    // Options
    const degrees = ['BE/B.Tech', 'ME/M.Tech', 'BCA/MCA', 'B.Sc/M.Sc', 'Arts & Science', 'Others'];
    const years = ['2026', '2025', '2024', '2023', '2022', '2021', 'Others'];
    const courses = ['Full Stack Development', 'Data Science & AI', 'Software Testing', 'Cloud Computing', 'Digital Marketing', 'Others'];
    const requirementTypes = ['Permanent Recruitment', 'Contract Staffing', 'Contract-to-Hire', 'In-House Developer', 'Others'];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="bg-[#081A4A] px-6 py-4 flex justify-between items-center shrink-0">
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    {type === 'placement' ? 'Apply Now' : 'Enquire Now'}
                                </h3>
                                <p className="text-blue-200 text-sm">
                                    {type === 'placement'
                                        ? "Start your career journey with us."
                                        : "Let us help you build your dream team."}
                                </p>
                            </div>
                            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors bg-white/10 p-1.5 rounded-full hover:bg-white/20">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Form Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {submitStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-green-600">
                                    <CheckCircle size={48} className="mb-4" />
                                    <h4 className="text-xl font-bold">Successfully Submitted!</h4>
                                    <p className="text-slate-600 mt-2">We will review your application and contact you.</p>
                                </div>
                            ) : submitStatus === 'error' ? (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center gap-3">
                                    <AlertCircle size={20} />
                                    <p>Something went wrong. Please try again.</p>
                                </div>
                            ) : null}

                            {!submitStatus && (
                                <form onSubmit={handleSubmit} className="space-y-4" encType={type === 'placement' ? "multipart/form-data" : ""}>
                                    {/* Common Fields */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                                        <input
                                            name="name" required value={formData.name} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number</label>
                                            <input
                                                name="mobile" required value={formData.mobile} onChange={handleChange} type="tel"
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                placeholder="10-digit mobile number"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email ID</label>
                                            <input
                                                name="email" required value={formData.email} onChange={handleChange} type="email"
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="space-y-1 sm:col-span-2">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Current Location</label>
                                            <input
                                                name="location" required value={formData.location} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                placeholder="City, State"
                                            />
                                        </div>
                                    </div>

                                    {/* Placement Support Specifics */}
                                    {type === 'placement' && (
                                        <>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">College Name</label>
                                                <input
                                                    name="college" required value={formData.college} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                    placeholder="Enter your college name"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Degree</label>
                                                    <select
                                                        name="degree" required value={formData.degree} onChange={handleChange}
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm bg-white"
                                                    >
                                                        <option value="">Select Degree</option>
                                                        {degrees.map(d => <option key={d} value={d}>{d}</option>)}
                                                    </select>
                                                    {formData.degree === 'Others' && (
                                                        <input
                                                            name="customDegree" value={formData.customDegree} onChange={handleChange}
                                                            placeholder="Specify Degree" className="mt-2 w-full px-4 py-2 rounded-lg border text-sm"
                                                        />
                                                    )}
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Year of Passing</label>
                                                    <select
                                                        name="year" required value={formData.year} onChange={handleChange}
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm bg-white"
                                                    >
                                                        <option value="">Select Year</option>
                                                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                    </select>
                                                    {formData.year === 'Others' && (
                                                        <input
                                                            name="customYear" value={formData.customYear} onChange={handleChange}
                                                            placeholder="Specify Year" className="mt-2 w-full px-4 py-2 rounded-lg border text-sm"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Interested Domain</label>
                                                <select
                                                    name="course" required value={formData.course} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm bg-white"
                                                >
                                                    <option value="">Select Domain</option>
                                                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                                {formData.course === 'Others' && (
                                                    <input
                                                        name="customCourse" value={formData.customCourse} onChange={handleChange}
                                                        placeholder="Specify Domain" className="mt-2 w-full px-4 py-2 rounded-lg border text-sm"
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Current Status</label>
                                                <div className="flex gap-4">
                                                    {['Fresher', 'Experienced'].map(status => (
                                                        <label key={status} className="flex items-center gap-2 text-sm cursor-pointer">
                                                            <input type="radio" name="currentStatus" value={status} checked={formData.currentStatus === status} onChange={handleChange} className="text-blue-600" />
                                                            {status}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Conditional Years of Experience */}
                                            {formData.currentStatus === 'Experienced' && (
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Years of Experience</label>
                                                    <input
                                                        type="number"
                                                        name="yearsOfExperience"
                                                        value={formData.yearsOfExperience}
                                                        onChange={handleChange}
                                                        placeholder="e.g., 2"
                                                        min="0"
                                                        step="0.5"
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                    />
                                                </div>
                                            )}

                                            {/* Resume Upload - Only for Placement */}
                                            <div className="space-y-2 border-t border-dashed pt-4 mt-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Resume Upload (PDF/DOC)</label>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-xs file:font-semibold
                                                        file:bg-indigo-50 file:text-indigo-700
                                                        hover:file:bg-indigo-100
                                                    "
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Skills <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
                                                <textarea
                                                    name="skills" value={formData.skills} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm resize-none h-20"
                                                    placeholder="e.g., Python, React, Communication, Problem-solving"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {/* Recruitment Specifics */}
                                    {type === 'recruitment' && (
                                        <>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                                                <input
                                                    name="companyName" required value={formData.companyName} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                                                    placeholder="Your Company Pvt Ltd"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Requirement Type</label>
                                                <select
                                                    name="requirementType" required value={formData.requirementType} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm bg-white"
                                                >
                                                    <option value="">Select Requirement Type</option>
                                                    {requirementTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                                {formData.requirementType === 'Others' && (
                                                    <input
                                                        name="customRequirement" placeholder="Specify Requirement"
                                                        className="mt-2 w-full px-4 py-2 rounded-lg border text-sm"
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Requirements & Details</label>
                                                <textarea
                                                    name="message" required value={formData.message} onChange={handleChange}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm resize-none h-24"
                                                    placeholder="Describe your hiring needs, roles, and headcount..."
                                                />
                                            </div>
                                        </>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#081A4A] text-white font-bold py-3.5 rounded-xl hover:bg-[#0d2a75] transition-all flex items-center justify-center gap-2 mt-6 shadow-lg shadow-indigo-900/10"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Processing...</span>
                                        ) : (
                                            <span className="flex items-center gap-2">{type === 'placement' ? 'Submit Application' : 'Submit Inquiry'} <Send size={18} /></span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default InquiryModal;
