import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Wrench, Pill, Leaf } from 'lucide-react';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * UseCases - QR chips with industry icons
 *
 * Design Rules:
 * - Small stylized QR chips with icons: Cart (CPG), Wrench (Tools), Pill (Pharma), Leaf (Sustainability)
 * - Hover reveals industry description + one-line value prop
 * - Footer: "One code. Industry-specific experiences."
 * - Use amber/orange color system (industry-scoped)
 */

type IndustryId = 'cpg' | 'tools' | 'pharma' | 'sustainability';

interface Industry {
  id: IndustryId;
  icon: typeof ShoppingCart;
  label: string;
  description: string;
  valueProp: string;
  features: string[];
}

const industries: Industry[] = [
  {
    id: 'cpg',
    icon: ShoppingCart,
    label: 'CPG & Retail',
    description: 'Consumer packaged goods',
    valueProp: 'Turn every product into a digital touchpoint',
    features: [
      'Product information & ingredients',
      'Recipes and usage suggestions',
      'Promotions & loyalty programs',
      'Consumer feedback collection',
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    label: 'Tools & Equipment',
    description: 'Industrial & consumer hardware',
    valueProp: 'Reduce support calls with instant access to manuals',
    features: [
      'Installation guides & videos',
      'Parts catalog & ordering',
      'Warranty registration',
      'Service request portal',
    ],
  },
  {
    id: 'pharma',
    icon: Pill,
    label: 'Pharma & Healthcare',
    description: 'Pharmaceutical & medical devices',
    valueProp: 'Ensure compliance and patient safety',
    features: [
      'Dosage instructions',
      'Drug interaction warnings',
      'Recall notifications',
      'Authenticity verification',
    ],
  },
  {
    id: 'sustainability',
    icon: Leaf,
    label: 'Sustainability',
    description: 'Environmental impact tracking',
    valueProp: 'Share your sustainability story with every scan',
    features: [
      'Carbon footprint data',
      'Recycling instructions',
      'Supply chain transparency',
      'Certifications & compliance',
    ],
  },
];

export default function UseCases() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryId>('cpg');

  const activeData = industries.find((i) => i.id === activeIndustry)!;

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: duration.normal, ease: easing.default }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
            Every industry, one platform
          </h2>
          <p className="text-lg text-deep-navy-300 max-w-3xl mx-auto">
            BrandCodes adapts to your industry's unique requirements while maintaining GS1 compliance.
          </p>
        </motion.div>

        {/* QR Chip Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isActive = activeIndustry === industry.id;

            return (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: index * 0.05, duration: duration.normal, ease: easing.default }}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all text-left
                  ${isActive
                    ? 'border-amber-500 bg-white shadow-lg shadow-amber-500/10'
                    : 'border-amber-200 bg-white/50 hover:border-amber-300 hover:bg-white'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Mini QR chip icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      ${isActive ? 'bg-amber-500' : 'bg-amber-100'}
                    `}
                  >
                    {/* QR pattern background */}
                    <div className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="absolute inset-0 opacity-20">
                        <rect x="2" y="2" width="6" height="6" fill={isActive ? 'white' : '#F59E0B'} />
                        <rect x="16" y="2" width="6" height="6" fill={isActive ? 'white' : '#F59E0B'} />
                        <rect x="2" y="16" width="6" height="6" fill={isActive ? 'white' : '#F59E0B'} />
                      </svg>
                      <Icon
                        size={20}
                        className={isActive ? 'text-white' : 'text-amber-600'}
                      />
                    </div>
                  </div>
                </div>

                <h3 className={`font-semibold mb-1 ${isActive ? 'text-amber-700' : 'text-deep-navy'}`}>
                  {industry.label}
                </h3>
                <p className="text-sm text-deep-navy-300">
                  {industry.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active industry details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="bg-white rounded-2xl p-8 border-2 border-amber-200"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    {(() => {
                      const Icon = activeData.icon;
                      return <Icon size={24} className="text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-navy">{activeData.label}</h3>
                    <p className="text-deep-navy-300 text-sm">{activeData.description}</p>
                  </div>
                </div>

                <p className="text-lg text-amber-700 font-medium mb-6">
                  {activeData.valueProp}
                </p>

                <ul className="space-y-3">
                  {activeData.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: duration.fast, ease: easing.default }}
                      className="flex items-center text-deep-navy-400"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* QR with industry icon overlay */}
                  <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                    <svg viewBox="0 0 120 120" className="w-48 h-48">
                      {/* QR pattern */}
                      <rect width="120" height="120" fill="white" rx="8" />
                      <rect x="10" y="10" width="30" height="30" fill="#F59E0B" rx="2" />
                      <rect x="80" y="10" width="30" height="30" fill="#F59E0B" rx="2" />
                      <rect x="10" y="80" width="30" height="30" fill="#F59E0B" rx="2" />
                      <rect x="15" y="15" width="20" height="20" fill="white" rx="1" />
                      <rect x="85" y="15" width="20" height="20" fill="white" rx="1" />
                      <rect x="15" y="85" width="20" height="20" fill="white" rx="1" />
                      <rect x="20" y="20" width="10" height="10" fill="#F59E0B" rx="1" />
                      <rect x="90" y="20" width="10" height="10" fill="#F59E0B" rx="1" />
                      <rect x="20" y="90" width="10" height="10" fill="#F59E0B" rx="1" />
                      {/* Center icon area */}
                      <circle cx="60" cy="60" r="25" fill="#FEF3C7" />
                      <circle cx="60" cy="60" r="20" fill="#F59E0B" />
                    </svg>
                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {(() => {
                        const Icon = activeData.icon;
                        return <Icon size={32} className="text-white" />;
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, delay: 0.2, ease: easing.default }}
          className="text-center text-amber-700 mt-8 text-lg font-medium"
        >
          One code. Industry-specific experiences.
        </motion.p>
      </div>
    </section>
  );
}
