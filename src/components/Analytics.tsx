import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Shield, GitBranch, HelpCircle } from 'lucide-react';
import QRFramedCard from './ui/QRFramedCard';
import AnimatedCounter from './ui/AnimatedCounter';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * Analytics - Metrics & trust (restrained, real)
 *
 * Design Rules:
 * - Animated counters in QR-framed cards (trigger once on scroll)
 * - Metrics: Countries supported, Standards compliant, Routing contexts supported
 * - GS1/2D badges with tooltip
 * - Background: deep-navy
 */

const metrics = [
  {
    icon: Globe,
    value: 45,
    suffix: '+',
    label: 'Countries Supported',
    description: 'Global GS1 Digital Link coverage',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Standards Compliant',
    description: 'Full GS1 Digital Link compliance',
  },
  {
    icon: GitBranch,
    value: 12,
    suffix: '',
    label: 'Routing Contexts',
    description: 'Consumer, retail, service, and more',
  },
];

export default function Analytics() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: duration.normal, ease: easing.default }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for scale and compliance
          </h2>
          <p className="text-lg text-deep-navy-200 max-w-2xl mx-auto">
            Enterprise-ready infrastructure that meets the highest standards.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: index * 0.05, duration: duration.normal, ease: easing.default }}
              >
                <QRFramedCard variant="dark" cornerSize={20}>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-electric-blue" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </div>
                    <div className="text-white font-medium mb-1">{metric.label}</div>
                    <div className="text-deep-navy-300 text-sm">{metric.description}</div>
                  </div>
                </QRFramedCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: duration.normal, ease: easing.default }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* GS1 Badge */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center gap-3 px-5 py-3 bg-deep-navy-500 rounded-xl border border-deep-navy-400 hover:border-electric-blue transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neon-green">
                <rect x="3" y="3" width="6" height="6" fill="currentColor" />
                <rect x="15" y="3" width="6" height="6" fill="currentColor" />
                <rect x="3" y="15" width="6" height="6" fill="currentColor" />
                <rect x="9" y="9" width="6" height="6" fill="currentColor" opacity="0.6" />
              </svg>
              <span className="text-white font-medium">GS1 Digital Link</span>
              <HelpCircle size={16} className="text-deep-navy-300" />
            </button>

            {/* Tooltip */}
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: duration.fast, ease: easing.default }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-4 bg-white rounded-xl shadow-xl z-10"
              >
                <h4 className="text-deep-navy font-semibold mb-2">What is GS1 2D?</h4>
                <p className="text-deep-navy-400 text-sm">
                  BrandCodes follows GS1 Digital Link standards and best practices and is building toward official GS1 solution partnership.
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
              </motion.div>
            )}
          </div>

          {/* 2D Barcode Badge */}
          <div className="flex items-center gap-3 px-5 py-3 bg-deep-navy-500 rounded-xl border border-deep-navy-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-electric-blue">
              <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="6" y="6" width="4" height="4" fill="currentColor" />
              <rect x="14" y="6" width="4" height="4" fill="currentColor" />
              <rect x="6" y="14" width="4" height="4" fill="currentColor" />
              <rect x="10" y="10" width="4" height="4" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-white font-medium">2D Barcode Ready</span>
          </div>

          {/* SOC2 Badge */}
          <div className="flex items-center gap-3 px-5 py-3 bg-deep-navy-500 rounded-xl border border-deep-navy-400">
            <Shield size={20} className="text-electric-blue" />
            <span className="text-white font-medium">Enterprise Security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
