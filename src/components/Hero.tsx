import { Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-accent-400 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse" />
              GS1 Sunrise 2027 Ready
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight leading-tight mb-6">
              Your packaging is becoming your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                digital product
              </span>
              . BrandCodes makes it automatic.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-cool-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Generate product-specific URLs, GS1 2D / QR codes, and AI-powered product pages —
              all automatically from your product data.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <a
                href="http://localhost:3000/"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition group"
              >
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a> */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
              >
                <Play size={20} className="mr-2" />
                Book a Demo
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 pt-8 border-t border-cool-200">
              <p className="text-sm text-cool-500 mb-4">Trusted by forward-thinking brands</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <span className="text-cool-600 font-medium">GS1 Compliant</span>
                <span className="text-cool-600 font-medium">SOC 2</span>
                <span className="text-cool-600 font-medium">GDPR Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            className="relative lg:ml-12 flex justify-center"
          >
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-2xl opacity-20" />

              {/* Main image */}
              <img
                src="/hero2.png"
                alt="BrandCodes - Product package with QR code scanning to mobile phone showing AI product page"
                className="relative rounded-2xl shadow-2xl w-full"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
              className="absolute -left-16 top-3/11 bg-white rounded-lg shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Auto-generated</p>
                  <p className="text-xs text-cool-500">product-specific pages</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
              className="absolute -right-8 bottom-3/7 bg-white rounded-lg shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 text-xl">AI</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">AI Assistant</p>
                  <p className="text-xs text-cool-500">Per product</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
