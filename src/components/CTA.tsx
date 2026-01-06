import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, ArrowRight } from 'lucide-react';
import { ScanLineContainer } from './ui/ScanLine';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * CTA - Scan glow, disciplined
 *
 * Design Rules:
 * - Primary CTA: "Talk to us"
 * - Single neon scan line sweep on hover (no pulsing, no looping)
 * - Preserve form functionality (Formspree)
 */

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xpwvoqaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Demo Request from ${formData.name} at ${formData.company}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or email us directly at 77jack0105@gmail.com');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email us directly at 77jack0105@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-electric-blue via-electric-blue-600 to-electric-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to transform your packaging?
            </h2>
            <p className="text-lg text-electric-blue-100 mb-8">
              Join brands already using BrandCodes to create intelligent digital experiences
              from every product scan.
            </p>

            {/* Visual QR element */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                  <rect x="4" y="4" width="12" height="12" fill="currentColor" />
                  <rect x="32" y="4" width="12" height="12" fill="currentColor" />
                  <rect x="4" y="32" width="12" height="12" fill="currentColor" />
                  <rect x="8" y="8" width="4" height="4" fill="#0055CC" />
                  <rect x="36" y="8" width="4" height="4" fill="#0055CC" />
                  <rect x="8" y="36" width="4" height="4" fill="#0055CC" />
                  <rect x="18" y="18" width="12" height="12" fill="currentColor" opacity="0.6" />
                </svg>
                <div>
                  <p className="font-semibold">One code, endless possibilities</p>
                  <p className="text-sm text-electric-blue-100">GS1 Digital Link compliant</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, delay: 0.1, ease: easing.default }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-deep-navy mb-2">Talk to us</h3>
              <p className="text-deep-navy-300 text-sm mb-6">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-deep-navy mb-2">Thank you!</h4>
                  <p className="text-deep-navy-300">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-navy mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-deep-navy-100 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-navy mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-deep-navy-100 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-1">Company</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-deep-navy-100 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-1">
                      How can we help?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-deep-navy-100 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue resize-none transition-colors"
                      placeholder="Tell us about your use case..."
                    />
                  </div>

                  {/* Submit button with scan line effect */}
                  <ScanLineContainer className="rounded-lg">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-electric-blue-600 shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Talk to us
                          <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </>
                      )}
                    </button>
                  </ScanLineContainer>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
