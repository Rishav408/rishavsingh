import React, { useState } from 'react';
import { Mail, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../ui/Icons';
import resumePdf from '../../assets/img/Rishav Singh - Resume.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setSubmitting(true);
    // Simulate or integrate submission
    setTimeout(() => {
      setSubmitting(false);
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
            <Mail size={14} />
            Reach Out
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Get In Touch
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
            Open to AI/GenAI engineering, data analysis, and full-stack-with-AI internships and fresher roles (Graduating 2027).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column (Direct Contacts) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs">
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-1">
                Direct Contact
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-5">
                Drop an email directly or connect on professional platforms.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rishav4805@gmail.com"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    <Mail size={16} />
                  </div>
                  <span>rishav4805@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/rishavsingh408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    <Linkedin size={16} />
                  </div>
                  <span>linkedin.com/in/rishavsingh408</span>
                </a>

                <a
                  href="https://github.com/Rishav408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    <Github size={16} />
                  </div>
                  <span>github.com/Rishav408</span>
                </a>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    <FileText size={16} />
                  </div>
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
              <span className="font-semibold block text-stone-800 dark:text-stone-200 mb-0.5">Availability Status</span>
              Actively interviewing for 2026/2027 internships &amp; fresher roles in AI / GenAI, Data Analytics, and Full-Stack development.
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you building? Let's connect."
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {status.message && (
                <div className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
                  status.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400' 
                    : 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
              >
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
