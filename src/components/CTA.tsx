import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, Loader2, Check } from 'lucide-react';

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();
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
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
      {/* QR Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />

      {/* Corner frames */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-white/20" />

      {/* Vertical data stream lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-white/20 hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Generating GS1-Ready Product URLs and QR/2D Codes
            </h2>
            <p className="text-lg text-brand-100 mb-8">
              Join brands already using BrandCodes to turn packaging into intelligent digital
              experiences. Request a personalized demo to learn more.
            </p>

            {/* Data points */}
            <div className="space-y-3">
              {['GS1 Digital Link compliant', 'AI-powered product pages', 'Real-time analytics'].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <span className="font-mono text-[10px] text-white">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-brand-100">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form with Corner Brackets */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-200" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-200" />

              <h3 className="text-xl font-bold text-navy-900 mb-2">Request a Demo</h3>
              <p className="text-cool-600 text-sm mb-6">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-100">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-mono text-[10px] text-cool-400 tracking-wider mb-2">REQUEST_SUBMITTED</p>
                  <h4 className="text-lg font-semibold text-navy-900 mb-2">Thank you!</h4>
                  <p className="text-cool-600">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="block text-sm font-medium text-cool-700 mb-1">
                        <span className="font-mono text-[10px] text-brand-400 mr-1">01</span>
                        Name
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200"
                        placeholder="John Doe"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="block text-sm font-medium text-cool-700 mb-1">
                        <span className="font-mono text-[10px] text-brand-400 mr-1">02</span>
                        Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200"
                        placeholder="john@company.com"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-company" className="block text-sm font-medium text-cool-700 mb-1">
                      <span className="font-mono text-[10px] text-brand-400 mr-1">03</span>
                      Company
                    </label>
                    <input
                      id="cta-company"
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200"
                      placeholder="Acme Inc."
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="block text-sm font-medium text-cool-700 mb-1">
                      <span className="font-mono text-[10px] text-brand-400 mr-1">04</span>
                      How can we help?
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-cool-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your use case..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-sm transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
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
                        Request Demo
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Bottom barcode accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
