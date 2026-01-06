import { motion } from 'framer-motion';
import { FileText, HelpCircle, Shield, BarChart3, Bot } from 'lucide-react';
import QRCore from './ui/QRCore';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * ProductPreview - Before/After comparison
 *
 * Design Rules:
 * - Left: Gray static QR, Generic homepage, Minimal icons
 * - Right: Branded QR, Product-specific AI page, Icons (Manuals, Warranty, FAQs, Analytics)
 * - Caption (right): "Powered by dynamic GS1 Digital Links"
 */

const beforeFeatures = [
  'Generic homepage URL',
  'No product context',
  'Same page for all scans',
];

const afterFeatures = [
  { icon: FileText, label: 'Manuals & guides' },
  { icon: Shield, label: 'Warranty registration' },
  { icon: HelpCircle, label: 'Product FAQs' },
  { icon: BarChart3, label: 'Scan analytics' },
  { icon: Bot, label: 'AI assistant' },
];

export default function ProductPreview() {
  return (
    <section id="preview" className="py-16 lg:py-24 bg-electric-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: duration.normal, ease: easing.default }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
            What your code does today vs. what it could do
          </h2>
          <p className="text-lg text-deep-navy-300 max-w-3xl mx-auto">
            Transform static QR codes into dynamic, product-specific experiences.
          </p>
        </motion.div>

        {/* Before/After comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-deep-navy-100 h-full">
              {/* Label */}
              <div className="inline-flex items-center px-3 py-1 bg-deep-navy-100 text-deep-navy-400 rounded-full text-sm font-medium mb-6">
                Today
              </div>

              <div className="flex flex-col items-center">
                {/* Static gray QR */}
                <div className="bg-deep-navy-50 rounded-xl p-6 mb-6">
                  <div className="w-40 h-40 relative">
                    {/* Simple gray QR representation */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect width="100" height="100" fill="#E8EBF0" rx="4" />
                      <rect x="10" y="10" width="25" height="25" fill="#8B9BB3" />
                      <rect x="65" y="10" width="25" height="25" fill="#8B9BB3" />
                      <rect x="10" y="65" width="25" height="25" fill="#8B9BB3" />
                      <rect x="15" y="15" width="15" height="15" fill="#E8EBF0" />
                      <rect x="70" y="15" width="15" height="15" fill="#E8EBF0" />
                      <rect x="15" y="70" width="15" height="15" fill="#E8EBF0" />
                      <rect x="20" y="20" width="5" height="5" fill="#8B9BB3" />
                      <rect x="75" y="20" width="5" height="5" fill="#8B9BB3" />
                      <rect x="20" y="75" width="5" height="5" fill="#8B9BB3" />
                      <rect x="40" y="40" width="20" height="20" fill="#8B9BB3" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Generic page mockup */}
                <div className="w-full bg-deep-navy-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-deep-navy-200" />
                    <div className="w-2 h-2 rounded-full bg-deep-navy-200" />
                    <div className="w-2 h-2 rounded-full bg-deep-navy-200" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-deep-navy-200 rounded w-3/4" />
                    <div className="h-3 bg-deep-navy-200 rounded w-1/2" />
                    <div className="h-8 bg-deep-navy-200 rounded w-full mt-4" />
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 w-full">
                  {beforeFeatures.map((feature) => (
                    <li key={feature} className="flex items-center text-deep-navy-400 text-sm">
                      <div className="w-4 h-4 rounded-full border-2 border-deep-navy-200 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, delay: 0.1, ease: easing.default }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-electric-blue shadow-lg shadow-electric-blue/10 h-full">
              {/* Label */}
              <div className="inline-flex items-center px-3 py-1 bg-electric-blue text-white rounded-full text-sm font-medium mb-6">
                With BrandCodes
              </div>

              <div className="flex flex-col items-center">
                {/* Branded QR */}
                <div className="mb-6">
                  <QRCore
                    variant="branded"
                    size={160}
                    showPulse={true}
                    interactive={true}
                  />
                </div>

                {/* AI-powered page mockup */}
                <div className="w-full bg-electric-blue-50 rounded-lg p-4 mb-6 border border-electric-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-electric-blue" />
                    <div className="w-2 h-2 rounded-full bg-electric-blue-300" />
                    <div className="w-2 h-2 rounded-full bg-electric-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-electric-blue-200 rounded w-3/4" />
                    <div className="h-3 bg-electric-blue-100 rounded w-1/2" />
                    <div className="flex gap-2 mt-4">
                      <div className="h-8 bg-electric-blue rounded flex-1" />
                      <div className="h-8 bg-neon-green/30 rounded flex-1" />
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {afterFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOptions}
                        transition={{ delay: index * 0.05, duration: duration.fast, ease: easing.default }}
                        className="flex items-center gap-2 text-deep-navy text-sm"
                      >
                        <div className="w-8 h-8 rounded-lg bg-electric-blue-50 flex items-center justify-center">
                          <Icon size={16} className="text-electric-blue" />
                        </div>
                        {feature.label}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Caption */}
                <p className="text-center text-electric-blue text-sm font-medium mt-6">
                  Powered by dynamic GS1 Digital Links
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
