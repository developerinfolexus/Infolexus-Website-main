import React, { useEffect, useState } from 'react';
import { Download, FileText, Search, RefreshCw, Calendar, User, Briefcase, Mail, Phone, Clock, AlertTriangle } from 'lucide-react';

import { API_BASE_URL } from '../../lib/api';

const AdminApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchApplications = async () => {
        setLoading(true);
        setError(null);
        try {
            // Use env variable
            const response = await fetch(`${API_BASE_URL}/applications`);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setApplications(data);
        } catch (err) {
            console.error(err);
            setError('Could not load applications. Make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const filteredApps = applications.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

    // Helper to format date
    const formatDate = (isoString) => {
        if (!isoString) return 'N/A';
        return new Date(isoString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Applications</h1>
                        <p className="text-slate-500 mt-1">Manage and view received resumes.</p>
                    </div>
                    <button
                        onClick={fetchApplications}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm font-medium"
                    >
                        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                        Refresh
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition-all"
                        placeholder="Search by name, position, or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Content */}
                {error ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center text-red-700 flex flex-col items-center gap-2">
                        <AlertTriangle size={32} />
                        <span className="font-semibold">{error}</span>
                    </div>
                ) : loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : filteredApps.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <FileText className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">No applications found</h3>
                        <p className="text-slate-500 mt-1">Wait for candidates to apply.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {filteredApps.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Avatar / Initials */}
                                <div className="flex-shrink-0">
                                    <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-black text-slate-400 uppercase">
                                        {app.name ? app.name.charAt(0) : '?'}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-grow space-y-3">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                {app.name}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-1">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase size={14} />
                                                    {app.position}
                                                </span>
                                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {app.experienceLevel} {app.yearsOfExperience && `(${app.yearsOfExperience} yrs)`}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 whitespace-nowrap">
                                            {formatDate(app.date)}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                                        <a href={`mailto:${app.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                                            <Mail size={15} />
                                            {app.email}
                                        </a>
                                        <a href={`tel:${app.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                                            <Phone size={15} />
                                            {app.phone}
                                        </a>
                                    </div>

                                    {/* Message Preview */}
                                    {app.message && (
                                        <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 italic border border-slate-100/50 mt-2">
                                            "{app.message}"
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex-shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                                    {app.resumePath ? (
                                        <a
                                            href={`${import.meta.env.VITE_API_BASE_URL}${app.resumePath}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-3 rounded-xl hover:bg-indigo-100 transition-colors font-bold text-sm"
                                        >
                                            <Download size={18} />
                                            Download Resume
                                        </a>
                                    ) : (
                                        <span className="text-slate-400 text-sm font-medium flex items-center gap-2">
                                            <AlertTriangle size={16} /> No Resume
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminApplications;
