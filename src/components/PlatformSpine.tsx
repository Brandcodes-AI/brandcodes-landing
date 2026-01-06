import { motion } from 'framer-motion';
import { QrCode, Server, GitBranch, Layout, BarChart3 } from 'lucide-react';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * PlatformSpine - "How it actually works" (credibility anchor)
 *
 * Design Rules:
 * - This section grounds the entire page
 * - Simple diagram: Code → Resolver → Routing rules → Destination pages → Analytics
 * - No animation except subtle fade-in (technical calm zone)
 * - GS1 Digital Link compliant badge
 */

const steps = [
  {
    id: 'code',
    icon: QrCode,
    label: 'Code',
    description: 'GS1 Digital Link QR',
  },
  {
    id: 'resolver',
    icon: Server,
    label: 'Resolution',
    description: 'URL resolver service',
  },
  {
    id: 'routing',
    icon: GitBranch,
    label: 'Routing Rules',
    description: 'Context-based routing',
  },
  {
    id: 'pages',
    icon: Layout,
    label: 'Destinations',
    description: 'Content management',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    description: 'Analytics & governance',
  },
];

export default function PlatformSpine() {
  return (
    <section id="platform" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
            How it actually works
          </h2>
          <p className="text-lg text-deep-navy-300 max-w-2xl mx-auto">
            A complete platform for GS1 Digital Link compliance, from code generation to analytics.
          </p>
        </motion.div>

        {/* Platform diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="relative"
        >
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue-100 via-electric-blue-200 to-electric-blue-100 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-deep-navy-100 w-full">
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-electric-blue-50 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-electric-blue" />
                    </div>

                    {/* Label */}
                    <h3 className="text-base font-semibold text-deep-navy mb-1">
                      {step.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-deep-navy-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (between cards on mobile/tablet) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-electric-blue-200 rotate-90 sm:rotate-0">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* Arrow connector (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-electric-blue">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* GS1 Compliance badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, delay: 0.1, ease: easing.default }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-deep-navy rounded-full">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neon-green">
              <rect x="2" y="2" width="6" height="6" fill="currentColor" />
              <rect x="12" y="2" width="6" height="6" fill="currentColor" />
              <rect x="2" y="12" width="6" height="6" fill="currentColor" />
              <rect x="8" y="8" width="4" height="4" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="text-white font-medium text-sm">
              GS1 Digital Link Compliant
            </span>
            <div className="w-px h-4 bg-deep-navy-400" />
            <span className="text-deep-navy-300 text-sm">
              Built to GS1 standards
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
