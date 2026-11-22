import React, { useState } from 'react';
import { Mail, FileText, Send, CheckCircle2, AlertCircle, Globe } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import resumePdf from '../../assets/img/Rishav_Singh_Resume.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

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
    setTimeout(() => {
      setSubmitting(false);
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#E7E2DA] dark:border-[#2A2724] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2">
            <Mail size={14} />
            Reach Out
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Get In Touch
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
            Open to AI/GenAI engineering, data analysis, and full-stack-with-AI internships and fresher roles (Graduating 2027).
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="lg:hidden mb-6">
          <div className="flex border border-[#E7E2DA] dark:border-[#2A2724] rounded-xl overflow-hidden">
            <button
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'contact'
                  ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950'
                  : 'bg-white dark:bg-[#151311] text-stone-600 dark:text-stone-300'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Info
            </button>
            <button
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'message'
                  ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950'
                  : 'bg-white dark:bg-[#151311] text-stone-600 dark:text-stone-300'
              }`}
              onClick={() => setActiveTab('message')}
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column (Direct Contacts) */}
          <div className={`${activeTab === 'contact' ? 'block' : 'hidden'} lg:block lg:col-span-5 space-y-6`}>
            <div className="bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 shadow-xs">
              <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-lg mb-1">
                Direct Contact
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-5">
                Drop an email directly or connect on professional platforms.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rishav4805@gmail.com"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#F4F0E8] dark:bg-[#181614] text-stone-600 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]">
                    <Mail size={16} />
                  </div>
                  <span>rishav4805@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/rishavsingh408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#F4F0E8] dark:bg-[#181614] text-stone-600 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]">
                    <Linkedin size={16} />
                  </div>
                  <span>linkedin.com/in/rishavsingh408</span>
                </a>

                <a
                  href="https://github.com/Rishav408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#F4F0E8] dark:bg-[#181614] text-stone-600 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]">
                    <Github size={16} />
                  </div>
                  <span>github.com/Rishav408</span>
                </a>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#F4F0E8] dark:bg-[#181614] text-stone-600 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]">
                    <FileText size={16} />
                  </div>
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="https://rishavsingh4805.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#F4F0E8] dark:bg-[#181614] text-stone-600 dark:text-stone-300 border border-[#E7E2DA] dark:border-[#2A2724]">
                    <Globe size={16} />
                  </div>
                  <span>rishavsingh4805.web.app</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F0E8]/70 dark:bg-[#181614]/80 border border-[#E7E2DA] dark:border-[#2A2724] text-xs text-stone-600 dark:text-stone-400">
              <span className="font-semibold block text-stone-800 dark:text-stone-200 mb-0.5">Availability Status</span>
              Actively interviewing for 2026/2027 internships &amp; fresher roles in AI / GenAI, Data Analytics, and Full-Stack development.
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className={`${activeTab === 'message' ? 'block' : 'hidden'} lg:block lg:col-span-7`}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#151311] border border-[#E7E2DA] dark:border-[#2A2724] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F0E8]/50 dark:bg-[#181614] border border-[#E7E2DA] dark:border-[#2A2724] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F0E8]/50 dark:bg-[#181614] border border-[#E7E2DA] dark:border-[#2A2724] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you building? Let's connect."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F0E8]/50 dark:bg-[#181614] border border-[#E7E2DA] dark:border-[#2A2724] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-500 resize-none"
                />
              </div>

              {status.message && (
                <div className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
                  status.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                    : 'bg-red-50 text-red-800 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-800'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-stone-950 font-semibold text-sm transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
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
