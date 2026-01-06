import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';
import QRCore from './ui/QRCore';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * DesignPlayground - Mini design playground (teaser, not tool)
 *
 * Design Rules:
 * - Four presets: Default, Branded, Art, GS1-strict
 * - GS1-strict labeled: "GS1-compliant (production-ready)"
 * - Toggle changes hero QR style and accent colors
 * - No custom editing (avoid tool-creep)
 */

type QRPreset = 'default' | 'branded' | 'art' | 'gs1-strict';

interface PresetInfo {
  id: QRPreset;
  label: string;
  sublabel?: string;
  description: string;
}

const presets: PresetInfo[] = [
  {
    id: 'default',
    label: 'Default',
    description: 'Clean, minimal QR with subtle branding',
  },
  {
    id: 'branded',
    label: 'Branded',
    description: 'Full brand colors with accent highlights',
  },
  {
    id: 'art',
    label: 'Art',
    description: 'Stylized design with creative elements',
  },
  {
    id: 'gs1-strict',
    label: 'GS1-strict',
    sublabel: 'Production-ready',
    description: 'Maximum scanability, GS1 compliant',
  },
];

export default function DesignPlayground() {
  const [activePreset, setActivePreset] = useState<QRPreset>('branded');

  const activePresetInfo = presets.find((p) => p.id === activePreset)!;

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
            Design that works for everyone
          </h2>
          <p className="text-lg text-deep-navy-300 max-w-2xl mx-auto">
            From highly stylized brand QR codes to strict GS1-compliant production codes —
            BrandCodes handles it all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: duration.slow, ease: easing.default }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: QR Preview */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                animate={{
                  background:
                    activePreset === 'gs1-strict'
                      ? 'linear-gradient(135deg, #E5E5E5, #FFFFFF)'
                      : activePreset === 'art'
                        ? 'linear-gradient(135deg, #0055CC, #00FF88)'
                        : 'linear-gradient(135deg, #0055CC, #3385FF)',
                }}
                transition={{ duration: duration.slow, ease: easing.default }}
              />

              {/* QR Container */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl p-10"
                animate={{
                  borderColor:
                    activePreset === 'gs1-strict'
                      ? '#E5E5E5'
                      : activePreset === 'art'
                        ? '#00FF88'
                        : '#0055CC',
                }}
                style={{ border: '2px solid' }}
                transition={{ duration: duration.normal, ease: easing.default }}
              >
                <QRCore
                  variant={activePreset}
                  size={220}
                  showPulse={activePreset !== 'gs1-strict'}
                  interactive={true}
                />

                {/* Preset label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <motion.div
                    className="px-4 py-1.5 rounded-full text-sm font-medium"
                    animate={{
                      backgroundColor:
                        activePreset === 'gs1-strict'
                          ? '#0A1628'
                          : activePreset === 'art'
                            ? '#00FF88'
                            : '#0055CC',
                      color:
                        activePreset === 'art' ? '#0A1628' : '#FFFFFF',
                    }}
                    transition={{ duration: duration.normal, ease: easing.default }}
                  >
                    {activePresetInfo.label}
                    {activePresetInfo.sublabel && (
                      <span className="ml-1 opacity-75">
                        ({activePresetInfo.sublabel})
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Preset selector */}
          <div>
            <div className="space-y-3">
              {presets.map((preset) => {
                const isActive = activePreset === preset.id;

                return (
                  <motion.button
                    key={preset.id}
                    onClick={() => setActivePreset(preset.id)}
                    className={`
                      w-full text-left p-4 rounded-xl border-2 transition-colors
                      ${isActive
                        ? 'border-electric-blue bg-electric-blue-50'
                        : 'border-deep-navy-100 bg-white hover:border-electric-blue-200'
                      }
                    `}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: duration.fast, ease: easing.default }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Radio indicator */}
                      <div
                        className={`
                          mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center
                          ${isActive
                            ? 'border-electric-blue bg-electric-blue'
                            : 'border-deep-navy-200'
                          }
                        `}
                      >
                        {isActive && <Check size={12} className="text-white" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${isActive ? 'text-electric-blue' : 'text-deep-navy'}`}>
                            {preset.label}
                          </span>
                          {preset.sublabel && (
                            <span className="text-xs px-2 py-0.5 bg-deep-navy text-white rounded-full">
                              {preset.sublabel}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-deep-navy-300 mt-1">
                          {preset.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Feature callout for GS1-strict */}
            {activePreset === 'gs1-strict' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration.normal, ease: easing.default }}
                className="mt-6 p-4 bg-deep-navy rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-neon-green" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Ready for production printing
                    </p>
                    <p className="text-deep-navy-200 text-sm mt-1">
                      High contrast, maximum quiet zone, optimized for all scanner types.
                      Meets GS1 Digital Link specifications.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
