import { Play, QrCode, Cpu, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      {/* QR Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.03]" />

        {/* Corner targeting frames */}
        <div className="absolute top-24 left-8 lg:left-16 w-12 h-12 border-t-2 border-l-2 border-brand-300 opacity-40" />
        <div className="absolute top-24 right-8 lg:right-16 w-12 h-12 border-t-2 border-r-2 border-brand-300 opacity-40" />
        <div className="absolute bottom-8 left-8 lg:left-16 w-12 h-12 border-b-2 border-l-2 border-brand-300 opacity-40" />
        <div className="absolute bottom-8 right-8 lg:right-16 w-12 h-12 border-b-2 border-r-2 border-brand-300 opacity-40" />

        {/* Subtle barcode accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-40" />
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
            <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6 border border-brand-200">
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
              >
                <Play size={20} className="mr-2" />
                Book a Demo
              </a>
            </div>

            {/* Trust signals - Structured data style */}
            <div className="mt-10 pt-8 border-t border-cool-200">
              <p className="text-sm text-cool-500 mb-4 font-mono tracking-wide uppercase">
                Compliance Status
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                {['GS1 Compliant', 'SOC 2', 'GDPR Ready'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-1.5 bg-cool-50 rounded border border-cool-200"
                  >
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-cool-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image with Scanner Frame */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            className="relative lg:ml-12 flex justify-center"
          >
            <div className="relative max-w-md mx-auto">
              {/* Scanner frame with gradient glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-3xl" />
              <div className="absolute -inset-2 border border-brand-200 rounded-2xl" />

              {/* Corner brackets for scanner aesthetic */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-400" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-brand-400" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-brand-400" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-400" />

              {/* Main image */}
              <img
                src="/hero2.png"
                alt="BrandCodes - Product package with QR code scanning to mobile phone showing AI product page"
                className="relative rounded-2xl shadow-2xl w-full"
                loading="eager"
                fetchPriority="high"
              />

              {/* Animated scanline overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent animate-scanline-slow opacity-60" />
              </div>
            </div>

            {/* Floating badge - Scan Result Card (Left) */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
              className="absolute -left-12 top-1/4 bg-white rounded-lg shadow-xl p-4 hidden lg:block border-l-4 border-brand-500"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-50 rounded flex items-center justify-center border border-brand-100">
                  <QrCode className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-cool-400 tracking-wider">GTIN DETECTED</p>
                  <p className="text-sm font-semibold text-navy-900">Auto-generated</p>
                  <p className="text-xs text-cool-500">product-specific pages</p>
                </div>
              </div>
              {/* Scanline accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-pulse" />
            </motion.div>

            {/* Floating badge - AI Status Card (Right) */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
              className="absolute -right-8 bottom-1/3 bg-white rounded-lg shadow-xl p-4 hidden lg:block border-l-4 border-accent-500"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/10 rounded flex items-center justify-center border border-accent-200">
                  <Cpu className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-cool-400 tracking-wider">AI ASSISTANT</p>
                  <p className="text-sm font-semibold text-navy-900">Per Product</p>
                  <p className="text-xs text-cool-500">Multilingual support</p>
                </div>
              </div>
              {/* Live indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
