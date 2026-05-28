import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Globe, AlertCircle } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 md:p-6 overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 bg-slate-50 border-b border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                <FileText size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Terms of Service</h1>
                                <p className="text-slate-500 text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content Scroll Area */}
                    <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar space-y-8 text-slate-600 leading-relaxed">

                        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 mb-8">
                            <h2 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <Globe size={18} /> Welcome to Infolexus
                            </h2>
                            <p className="text-blue-800/80 text-sm">
                                Welcome to Infolexus (“we”, “us”, “our”). These Terms of Service (“Terms”) govern your access to and use of this website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, do not use the Website.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">1</span>
                                Acceptance of Terms
                            </h3>
                            <p>
                                By using our Website, you confirm that you are at least the age of majority in your jurisdiction and have the legal capacity to accept these Terms.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">2</span>
                                Use of the Website
                            </h3>
                            <p>
                                You agree to use the Website only for lawful purposes and in accordance with these Terms. You must not use the Website in a way that violates any applicable laws or regulations.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">3</span>
                                Content
                            </h3>
                            <p>
                                All content provided on the Website is for informational purposes only. We reserve the right to modify, suspend, or discontinue any part of the Website at any time without notice.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">4</span>
                                Intellectual Property
                            </h3>
                            <p>
                                All text, graphics, logos, and other materials on this Website are our property or used with permission, and are protected by intellectual property laws. You may not reproduce or use them without our written consent.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">5</span>
                                User Conduct
                            </h3>
                            <p>
                                You agree not to upload or transmit any material that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">6</span>
                                Links to Third-Party Sites
                            </h3>
                            <p>
                                The Website may contain links to third-party websites. We are not responsible for the content or practices of those sites.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">7</span>
                                Disclaimer of Warranties
                            </h3>
                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-900/80 text-sm flex gap-3">
                                <AlertCircle size={20} className="shrink-0 text-amber-500" />
                                <p>The Website is provided “as is” and “as available.” We make no warranties of any kind regarding the operation of the Website, content, or accuracy of information.</p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">8</span>
                                Limitation of Liability
                            </h3>
                            <p>
                                To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the Website.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">9</span>
                                Changes to Terms
                            </h3>
                            <p>
                                We may modify these Terms at any time. We will post updated Terms on this page with a new “Last Updated” date. Your continued use of the Website constitutes acceptance of the updated Terms.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="pt-6 border-t border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">10</span>
                                Contact Us
                            </h3>
                            <p className="mb-4">If you have questions about these Terms, contact us at:</p>
                            <a href="mailto:support@infolexus.com" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold transition-colors">
                                <Globe size={18} /> support@infolexus.com
                            </a>
                        </section>

                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                        >
                            I Understand
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TermsModal;
