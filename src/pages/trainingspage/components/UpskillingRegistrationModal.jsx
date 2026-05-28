import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';

import { API_BASE_URL } from '../../../lib/api';

const UpskillingRegistrationModal = ({ isOpen, onClose, initialCourse = '' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        location: '',
        collegeName: '',
        degree: '',
        passingYear: '',
        interestedCourse: '',
        learningMode: 'Online',
        currentStatus: 'Fresher',
        experience: '',
        preferredContactTime: '',
        source: ''
    });

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                interestedCourse: initialCourse || prev.interestedCourse
            }));
            setSubmitStatus(null);
        }
    }, [isOpen, initialCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const endpoint = `${API_BASE_URL}/send-application`; // Use our own backend

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.fullName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.mobile);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('position', `Upskilling Registration - ${formData.interestedCourse}`);
            formDataToSend.append('recipientType', 'support'); // Route to support@infolexus.com

            // Field mapping
            formDataToSend.append('College', formData.collegeName);
            formDataToSend.append('Degree', formData.degree);
            formDataToSend.append('PassingYear', formData.passingYear);
            formDataToSend.append('InterestedCourse', formData.interestedCourse);
            formDataToSend.append('LearningMode', formData.learningMode);
            formDataToSend.append('CurrentStatus', formData.currentStatus);
            formDataToSend.append('Experience', formData.experience);
            formDataToSend.append('PreferredContactTime', formData.preferredContactTime);
            formDataToSend.append('Source', formData.source);

            // Message field is required by backend, so we create a composite one
            const message = `Registration for ${formData.interestedCourse}. Mode: ${formData.learningMode}. Status: ${formData.currentStatus}.`;
            formDataToSend.append('message', message);

            const response = await fetch(endpoint, {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                setSubmitStatus('success');
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                    // Reset form
                    setFormData({
                        fullName: '',
                        mobile: '',
                        email: '',
                        location: '',
                        collegeName: '',
                        degree: '',
                        passingYear: '',
                        interestedCourse: '',
                        learningMode: 'Online',
                        currentStatus: 'Fresher',
                        experience: '',
                        preferredContactTime: '',
                        source: ''
                    });
                }, 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
            setSubmitStatus('error');
        } finally {
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-[#081A4A] text-white relative shrink-0">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-2xl font-bold mb-1">Enquire Now</h2>
                            <p className="text-cyan-200 text-sm">
                                Register for our industry-leading upskilling courses.
                            </p>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {submitStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-green-600">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                                    <p className="text-slate-500">We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* 1. Full Name */}
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* 2. Mobile Number */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                required
                                                pattern="[0-9]{10}"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="10-digit mobile number"
                                            />
                                        </div>

                                        {/* 3. Email ID */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email ID</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        {/* 3b. Location */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                required
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="City, State"
                                            />
                                        </div>

                                        {/* 4. College Name */}
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">College Name</label>
                                            <input
                                                type="text"
                                                name="collegeName"
                                                required
                                                value={formData.collegeName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="Enter your college name"
                                            />
                                        </div>

                                        {/* 5. Degree */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Degree</label>
                                            <select
                                                name="degree"
                                                required
                                                value={formData.degree}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                            >
                                                <option value="">Select Degree</option>
                                                <option value="BE / BTech">BE / BTech</option>
                                                <option value="BSc">BSc</option>
                                                <option value="BCA">BCA</option>
                                                <option value="MCA">MCA</option>
                                                <option value="MSc">MSc</option>
                                                <option value="MBA">MBA</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        {/* 6. Year of Passing */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Year of Passing</label>
                                            <select
                                                name="passingYear"
                                                required
                                                value={formData.passingYear}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                            >
                                                <option value="">Select Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                            </select>
                                        </div>

                                        {/* 7. Interested Course / Domain */}
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Interested Course / Domain</label>
                                            <select
                                                name="interestedCourse"
                                                required
                                                value={formData.interestedCourse}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                            >
                                                <option value="">Select Course</option>
                                                <option value="Full Stack Development">Full Stack Development</option>
                                                <option value="Python">Python</option>
                                                <option value="Java">Java</option>
                                                <option value="Frontend (React)">Frontend (React)</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="AI / Machine Learning">AI / Machine Learning</option>
                                                <option value="Cloud / DevOps">Cloud / DevOps</option>
                                            </select>
                                        </div>

                                        {/* 8. Learning Mode */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Learning Mode</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="learningMode"
                                                        value="Online"
                                                        checked={formData.learningMode === 'Online'}
                                                        onChange={handleChange}
                                                        className="accent-blue-600 w-4 h-4"
                                                    />
                                                    Online
                                                </label>
                                                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="learningMode"
                                                        value="Offline"
                                                        checked={formData.learningMode === 'Offline'}
                                                        onChange={handleChange}
                                                        className="accent-blue-600 w-4 h-4"
                                                    />
                                                    Offline
                                                </label>
                                            </div>
                                        </div>

                                        {/* 9. Current Status */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Current Status</label>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="currentStatus"
                                                        value="Fresher"
                                                        checked={formData.currentStatus === 'Fresher'}
                                                        onChange={handleChange}
                                                        className="accent-blue-600 w-4 h-4"
                                                    />
                                                    Fresher
                                                </label>
                                                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="currentStatus"
                                                        value="Job Seeker"
                                                        checked={formData.currentStatus === 'Job Seeker'}
                                                        onChange={handleChange}
                                                        className="accent-blue-600 w-4 h-4"
                                                    />
                                                    Job Seeker
                                                </label>
                                                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="currentStatus"
                                                        value="Working Professional"
                                                        checked={formData.currentStatus === 'Working Professional'}
                                                        onChange={handleChange}
                                                        className="accent-blue-600 w-4 h-4"
                                                    />
                                                    Working
                                                </label>
                                            </div>
                                        </div>

                                        {/* 10. Any Experience or Project? (Optional) */}
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Any Experience or Project? <span className="text-slate-400 font-normal normal-case">(Optional)</span></label>
                                            <textarea
                                                name="experience"
                                                rows="2"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                                placeholder="Briefly describe any relevant experience or projects"
                                            ></textarea>
                                        </div>

                                        {/* 11. Preferred Contact Time */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Contact Time</label>
                                            <select
                                                name="preferredContactTime"
                                                required
                                                value={formData.preferredContactTime}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                            >
                                                <option value="">Select Time</option>
                                                <option value="Morning">Morning</option>
                                                <option value="Afternoon">Afternoon</option>
                                                <option value="Evening">Evening</option>
                                            </select>
                                        </div>

                                        {/* 12. How did you hear about us? */}
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">How did you hear about us?</label>
                                            <select
                                                name="source"
                                                required
                                                value={formData.source}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Friend">Friend</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="College">College</option>
                                                <option value="Website">Website</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 mt-4"
                                    >
                                        {isSubmitting ? (
                                            <>Registering... <Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <>Register <Send size={18} /></>
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

export default UpskillingRegistrationModal;
