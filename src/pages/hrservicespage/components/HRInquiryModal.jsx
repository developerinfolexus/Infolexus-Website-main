import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

import { API_BASE_URL } from '../../../lib/api';

const HRInquiryModal = ({ isOpen, onClose, initialCategory = 'Job Seeker', initialSubject = '' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [resumeFile, setResumeFile] = useState(null);
    const [fileName, setFileName] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'Job Seeker', // Job Seeker, Company, College
        organization: '', // For Company/College
        experience: '', // For Job Seeker
        qualification: '', // For Job Seeker

        message: '',
        location: ''
    });

    // Update category if initial prop changes
    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                category: initialCategory,
                location: '',
                organization: '',
                experience: '',
                qualification: '',
                message: initialSubject ? `Inquiry regarding: ${initialSubject}` : ''
            }));
            setSubmitStatus(null);
            setResumeFile(null);
            setFileName('');
        }
    }, [isOpen, initialCategory, initialSubject]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const endpoint = `${API_BASE_URL}/send-application`; // Use our own backend

        try {
            // Create FormData object to support file uploads
            const formDataToSend = new FormData();

            // Add form fields
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('category', formData.category);
            // Determine recipient based on category
            const recipient = formData.category === 'Job Seeker' ? 'mani' : 'support';
            formDataToSend.append('recipientType', recipient);

            // Add category-specific fields
            if (formData.category === 'Job Seeker') {
                if (formData.qualification) formDataToSend.append('qualification', formData.qualification);
                if (formData.experience) formDataToSend.append('experience', formData.experience);
                formDataToSend.append('position', 'HR Inquiry - Job Seeker');
            } else {
                if (formData.organization) formDataToSend.append('organization', formData.organization);
                formDataToSend.append('position', `HR Inquiry - ${formData.category}`);
            }

            formDataToSend.append('message', formData.message);

            // Add the resume file if present
            if (resumeFile) {
                formDataToSend.append('attachment', resumeFile);
            }

            const response = await fetch(endpoint, {
                method: "POST",
                body: formDataToSend // Content-Type is set automatically by fetch for FormData
            });

            if (response.ok) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-indigo-900 text-white relative shrink-0">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-2xl font-bold mb-1">
                                {formData.category === 'Job Seeker' ? 'Apply Now' : 'Enquire Now'}
                            </h2>
                            <p className="text-blue-100 text-sm">
                                {formData.category === 'Job Seeker'
                                    ? 'Take the next step in your career.'
                                    : 'Let us help you find the best solutions.'}
                            </p>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {submitStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-green-600">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Request Sent!</h3>
                                    <p className="text-slate-500">We&apos;ll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Category Selector (Visual only in title, but user can change if logic permits - here fixed by prop usually) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">I am a</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 font-medium"
                                            >
                                                <option value="Job Seeker">Job Seeker</option>
                                                <option value="Company">Company / Employer</option>
                                                <option value="College">College / Institution</option>
                                            </select>
                                        </div>

                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                required
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                placeholder="City, State"
                                            />
                                        </div>
                                    </div>

                                    {/* Dynamic Fields based on Category */}
                                    {formData.category === 'Job Seeker' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div className="col-span-1">
                                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Qualification</label>
                                                <input
                                                    type="text"
                                                    name="qualification"
                                                    value={formData.qualification}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                    placeholder="e.g. B.Tech, MBA"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Experience</label>
                                                <select
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 font-medium"
                                                >
                                                    <option value="">Select Level</option>
                                                    <option value="Fresher">Fresher (0-1 yrs)</option>
                                                    <option value="Junior">Junior (1-3 yrs)</option>
                                                    <option value="Mid-Level">Mid-Level (3-5 yrs)</option>
                                                    <option value="Senior">Senior (5+ yrs)</option>
                                                </select>
                                            </div>
                                            <div className="col-span-1 md:col-span-2">
                                                <div className="p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 text-center relative group hover:border-blue-400 transition-colors">
                                                    <p className="text-xs text-slate-500 mb-1">Resume Upload (PDF/Doc)</p>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <Upload size={14} className={`text-slate-400 ${fileName ? 'text-blue-500' : ''}`} />
                                                        {fileName ? (
                                                            <span className="text-xs font-bold text-blue-600 truncate max-w-[200px]">{fileName}</span>
                                                        ) : (
                                                            <span className="text-slate-400 text-[10px] font-medium">Click to upload</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {(formData.category === 'Company' || formData.category === 'College') && (
                                        <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                                                    {formData.category === 'Company' ? 'Company Name' : 'Institution Name'}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="organization"
                                                    required
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                                    placeholder="Enter organization name"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Requirement</label>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-slate-900 placeholder:text-slate-400"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>Processing... <Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <>Submit {formData.category === 'Job Seeker' ? 'Application' : 'Inquiry'} <Send size={18} /></>
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

export default HRInquiryModal;
