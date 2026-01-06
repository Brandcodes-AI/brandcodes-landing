import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import QRCore from './ui/QRCore';
import PersonaSwitcher from './ui/PersonaSwitcher';
import { duration, easing, transition } from '../lib/motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-electric-blue-50 to-off-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-deep-navy-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center lg:text-left"
          >
            {/* GS1 Badge - small, visible, not dominant */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, delay: 0.1, ease: easing.default }}
              className="inline-flex items-center px-3 py-1.5 bg-deep-navy text-white rounded-full text-xs font-medium mb-6 gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neon-green">
                <rect x="2" y="2" width="4" height="4" fill="currentColor" />
                <rect x="10" y="2" width="4" height="4" fill="currentColor" />
                <rect x="2" y="10" width="4" height="4" fill="currentColor" />
                <rect x="6" y="6" width="4" height="4" fill="currentColor" opacity="0.6" />
              </svg>
              GS1 Digital Link Compliant
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy tracking-tight leading-tight mb-6">
              Scan the future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue-600">
                your packaging
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-deep-navy-300 mb-8 max-w-xl mx-auto lg:mx-0">
              One GS1-compliant code. Dynamic destinations for consumers, retailers, and service teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-electric-blue-600 shadow-lg shadow-electric-blue/30 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={transition.fast}
              >
                See how it works
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-deep-navy-200 text-deep-navy font-semibold rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={transition.fast}
              >
                Talk to us
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 pt-8 border-t border-deep-navy-100">
              <p className="text-sm text-deep-navy-300 mb-4">Platform capabilities</p>
              <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
                <span className="text-deep-navy-400 font-medium text-sm flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" fill="#0055CC" />
                  </svg>
                  GS1 Compliant
                </span>
                <span className="text-deep-navy-400 font-medium text-sm flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#0055CC" strokeWidth="2" fill="none" />
                    <path d="M5 8L7 10L11 6" stroke="#0055CC" strokeWidth="2" fill="none" />
                  </svg>
                  Context-based Routing
                </span>
                <span className="text-deep-navy-400 font-medium text-sm flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#0055CC" strokeWidth="2" fill="none" />
                    <path d="M4 7H12M4 10H8" stroke="#0055CC" strokeWidth="1.5" />
                  </svg>
                  Analytics Built-in
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - QR-centric Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, delay: 0.1, ease: easing.default }}
            className="relative flex flex-col items-center"
          >
            {/* Main QR with persona interaction */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-blue-400 rounded-2xl blur-3xl opacity-20 scale-110" />

              {/* Central QR Code */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <QRCore
                  variant="branded"
                  size={240}
                  showPulse={true}
                  interactive={true}
                />

                {/* Persona switcher overlay */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <PersonaSwitcher size="md" showIcon={true} />
                </div>
              </div>
            </div>

            {/* Floating context badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.normal, delay: 0.2, ease: easing.default }}
              className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-xl p-3 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-electric-blue-50 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" stroke="#0055CC" strokeWidth="1.5" fill="none" />
                    <circle cx="8" cy="8" r="2" fill="#0055CC" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-deep-navy">Dynamic routing</p>
                  <p className="text-[10px] text-deep-navy-300">Context-aware destinations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.normal, delay: 0.25, ease: easing.default }}
              className="absolute -right-4 top-1/2 bg-white rounded-lg shadow-xl p-3 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-neon-green-50 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M8 2V14" stroke="#00FF88" strokeWidth="2" />
                    <circle cx="8" cy="8" r="6" stroke="#00FF88" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-deep-navy">One code</p>
                  <p className="text-[10px] text-deep-navy-300">Multiple experiences</p>
                </div>
              </div>
            </motion.div>

            {/* Microcopy below QR */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: duration.normal, delay: 0.3, ease: easing.default }}
              className="mt-12 text-sm text-deep-navy-300 text-center"
            >
              Move your mouse over the QR to see different personas
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
