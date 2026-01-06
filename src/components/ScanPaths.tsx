import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, Store, Wrench } from 'lucide-react';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * ScanPaths - Interactive scan paths (multi-context routing)
 *
 * Design Rules:
 * - Nodes: Consumer (default highlighted), Retailer, Service
 * - Hover node: Path lights up, mini landing page preview appears
 * - Purpose: Makes routing intelligence visceral, signals platform depth
 */

type PathType = 'consumer' | 'retailer' | 'service';

interface PathInfo {
  id: PathType;
  icon: typeof User;
  label: string;
  color: string;
  description: string;
  previewTitle: string;
  previewFeatures: string[];
}

const paths: PathInfo[] = [
  {
    id: 'consumer',
    icon: User,
    label: 'Consumer',
    color: '#0055CC', // electric-blue
    description: 'End-user product experience',
    previewTitle: 'Product Information',
    previewFeatures: [
      'How-to guides & manuals',
      'AI-powered Q&A',
      'Warranty registration',
      'Safety information',
    ],
  },
  {
    id: 'retailer',
    icon: Store,
    label: 'Retailer',
    color: '#F59E0B', // amber
    description: 'In-store staff tools',
    previewTitle: 'Retail Dashboard',
    previewFeatures: [
      'Inventory lookup',
      'Shelf placement guide',
      'Restock alerts',
      'Product training',
    ],
  },
  {
    id: 'service',
    icon: Wrench,
    label: 'Service',
    color: '#00FF88', // neon-green
    description: 'Technician & support access',
    previewTitle: 'Service Portal',
    previewFeatures: [
      'Repair procedures',
      'Parts catalog',
      'Diagnostic tools',
      'Service history',
    ],
  },
];

export default function ScanPaths() {
  const [activePath, setActivePath] = useState<PathType>('consumer');

  const activePathInfo = paths.find((p) => p.id === activePath)!;

  return (
    <section id="routing" className="py-20 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One code, many contexts
          </h2>
          <p className="text-lg text-deep-navy-200 max-w-2xl mx-auto">
            The same QR code routes to different experiences based on who scans it and where.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Interactive diagram */}
          <div className="relative">
            {/* Central QR node */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="4" width="12" height="12" fill="#0055CC" />
                    <rect x="32" y="4" width="12" height="12" fill="#0055CC" />
                    <rect x="4" y="32" width="12" height="12" fill="#0055CC" />
                    <rect x="18" y="18" width="12" height="12" fill="#0055CC" opacity="0.6" />
                    <rect x="32" y="32" width="6" height="6" fill="#0055CC" />
                    <rect x="38" y="26" width="6" height="6" fill="#0055CC" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap">
                  Same Code
                </div>
              </div>
            </div>

            {/* Path nodes */}
            <div className="flex justify-center gap-6 sm:gap-12">
              {paths.map((path) => {
                const Icon = path.icon;
                const isActive = activePath === path.id;

                return (
                  <motion.button
                    key={path.id}
                    onClick={() => setActivePath(path.id)}
                    onMouseEnter={() => setActivePath(path.id)}
                    className="relative flex flex-col items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: duration.fast, ease: easing.default }}
                  >
                    {/* Connection line */}
                    <div
                      className="w-0.5 h-8 mb-3 transition-colors"
                      style={{
                        backgroundColor: isActive ? path.color : '#1F3A5C',
                      }}
                    />

                    {/* Node */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all shadow-lg"
                      style={{
                        backgroundColor: isActive ? path.color : '#1F3A5C',
                        boxShadow: isActive ? `0 8px 30px ${path.color}40` : 'none',
                      }}
                    >
                      <Icon
                        size={28}
                        className={isActive ? 'text-white' : 'text-deep-navy-200'}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className="mt-3 text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? path.color : '#8B9BB3',
                      }}
                    >
                      {path.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Microcopy */}
            <p className="text-center text-deep-navy-300 text-sm mt-8">
              Hover or tap to see different destinations
            </p>
          </div>

          {/* Right: Preview panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePath}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: duration.normal, ease: easing.default }}
                className="bg-deep-navy-500 rounded-2xl border border-deep-navy-400 overflow-hidden"
              >
                {/* Preview header */}
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ backgroundColor: `${activePathInfo.color}20` }}
                >
                  {(() => {
                    const Icon = activePathInfo.icon;
                    return <Icon size={20} style={{ color: activePathInfo.color }} />;
                  })()}
                  <span className="text-white font-medium">
                    {activePathInfo.previewTitle}
                  </span>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-deep-navy text-deep-navy-200">
                    {activePathInfo.description}
                  </span>
                </div>

                {/* Preview content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {activePathInfo.previewFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: duration.fast,
                          delay: index * 0.05,
                          ease: easing.default,
                        }}
                        className="flex items-center gap-2 text-deep-navy-200 text-sm"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: activePathInfo.color }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini mockup */}
                  <div className="mt-6 p-4 bg-deep-navy rounded-lg border border-deep-navy-400">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-2 rounded w-3/4"
                        style={{ backgroundColor: `${activePathInfo.color}40` }}
                      />
                      <div
                        className="h-2 rounded w-1/2"
                        style={{ backgroundColor: `${activePathInfo.color}20` }}
                      />
                      <div className="flex gap-2 mt-3">
                        <div
                          className="h-8 rounded flex-1"
                          style={{ backgroundColor: `${activePathInfo.color}30` }}
                        />
                        <div
                          className="h-8 rounded flex-1"
                          style={{ backgroundColor: `${activePathInfo.color}30` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, delay: 0.2, ease: easing.default }}
          className="text-center text-deep-navy-200 mt-12 text-lg font-medium"
        >
          Same code. Different destination.
        </motion.p>
      </div>
    </section>
  );
}
