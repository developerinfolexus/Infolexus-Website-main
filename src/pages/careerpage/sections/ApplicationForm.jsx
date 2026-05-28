import React, { useState, useRef } from 'react';
import { Send, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

import { API_BASE_URL } from '../../../lib/api';

const ApplicationForm = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [resumeFile, setResumeFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        location: '',
        message: '',
        experienceLevel: 'Fresher',
        yearsOfExperience: '',
        isCustomPosition: false
    });

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

        // Point to local backend (proxied by Vite)
        // Use environmental variable for API base URL
        const endpoint = `${API_BASE_URL}/send-application`;

        try {
            const formDataToSend = new FormData();

            // Append basic fields
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('experienceLevel', formData.experienceLevel);
            if (formData.yearsOfExperience) formDataToSend.append('yearsOfExperience', formData.yearsOfExperience);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('recipientType', 'mani'); // Route to mani@infolexus.com

            // Append File
            if (resumeFile) {
                formDataToSend.append('attachment', resumeFile);
            }

            const response = await fetch(endpoint, {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        position: '',
                        message: '',
                        location: '',
                        experienceLevel: 'Fresher',
                        yearsOfExperience: '',
                        isCustomPosition: false
                    });
                    setResumeFile(null);
                    setFileName('');
                    // Reset file input manually
                    if (e.target) e.target.reset();

                    setTimeout(() => setSubmitStatus(null), 5000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Server error');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
            <h3 className="text-3xl font-black text-slate-900 mb-2 text-center">Apply Now</h3>
            <p className="text-slate-500 mb-8 text-center font-medium">Join our team of innovators.</p>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                    <CheckCircle size={20} />
                    <div>
                        <p className="font-bold">Application Sent!</p>
                        <p className="text-sm">We've received your details and will contact you soon.</p>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
                    <AlertCircle size={20} />
                    <div>
                        <p className="font-bold">Submission Failed</p>
                        <p className="text-sm">Please check your configuration or try again later.</p>
                    </div>
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current Location</label>
                    <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="City, State"
                    />
                </div>

                {/* Experience Level */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Experience Level</label>
                        <select
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    experienceLevel: e.target.value,
                                    yearsOfExperience: e.target.value === 'Fresher' ? '' : prev.yearsOfExperience
                                }));
                            }}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        >
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>

                    {formData.experienceLevel === 'Experienced' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Years of Exp</label>
                            <input
                                type="number"
                                name="yearsOfExperience"
                                placeholder="e.g. 2.5"
                                value={formData.yearsOfExperience}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                            />
                        </div>
                    )}
                </div>

                {/* Position */}
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Position Applied For</label>
                    {formData.isCustomPosition ? (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="position"
                                required
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                                placeholder="Type your position..."
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, isCustomPosition: false, position: '' })}
                                className="px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-slate-600 font-bold text-xs"
                            >
                                Back
                            </button>
                        </div>
                    ) : (
                        <select
                            name="position"
                            required
                            value={formData.position}
                            onChange={(e) => {
                                if (e.target.value === 'Other') {
                                    setFormData({ ...formData, isCustomPosition: true, position: '' });
                                } else {
                                    handleChange(e);
                                }
                            }}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        >
                            <option value="">Select a Role</option>
                            <option value="Digital Marketing Executive">Digital Marketing Executive</option>
                            <option value="HR Recruiter">HR Recruiter</option>
                            <option value="Placement Coordinator">Placement Coordinator</option>
                            <option value="Business Development Executive">Business Development Executive</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Python Developer">Python Developer</option>
                            <option value="Other">Other (Type Manually)</option>
                        </select>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brief Introduction</label>
                    <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="Tell us a bit about yourself..."
                    ></textarea>
                </div>

                <div className="p-4 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center relative group hover:border-blue-400 transition-colors">
                    <p className="text-xs text-slate-500 mb-2">Resume Upload (PDF)</p>
                    <input
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Upload size={16} className={`text-slate-400 ${fileName ? 'text-blue-500' : ''}`} />
                        {fileName ? (
                            <span className="text-xs font-bold text-blue-600 truncate max-w-[200px]">{fileName}</span>
                        ) : (
                            <span className="text-slate-400 text-xs font-medium">Click or drag file to upload</span>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                        <>Submit Application <Send size={18} /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;