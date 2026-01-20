import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, Loader2, Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwvoqaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Contact Form: Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or email us directly at info@brandcodes.io');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email us directly at info@brandcodes.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 lg:pt-40 lg:pb-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              We're open to any queries, partnerships, or just a friendly chat. Drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-center"
              aria-label="Contact information"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Email Us</h3>
              <p className="text-cool-600 text-sm">info@brandcodes.io</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Quick Response</h3>
              <p className="text-cool-600 text-sm">Usually within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">Location</h3>
              <p className="text-cool-600 text-sm">Singapore (NUS)</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="bg-cool-50 rounded-2xl p-8 border border-cool-200"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                <p className="text-cool-600">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-cool-700 mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-cool-700 mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200"
                      placeholder="you@example.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-cool-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="How can we help you?"
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
