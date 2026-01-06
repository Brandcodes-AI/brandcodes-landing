import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Upload, Wand2, Printer, ArrowRight } from 'lucide-react';
import QRCore from './ui/QRCore';
import { duration, easing, viewportOptions } from '../lib/motion';

/**
 * HowItWorks - Interactive timeline "From code → page"
 *
 * Design Rules:
 * - Label: "How GS1 Digital Link works in practice"
 * - Hover each step: QR tile updates, corresponding page preview swaps
 * - Microcopy: "Same code. Different destination."
 */

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Import Products',
    description: 'Upload via CSV, connect API, sync with PIM/ERP, or import GTINs and e-commerce feeds.',
    details: ['CSV / Excel upload', 'REST API / Webhooks', 'Shopify, BigCommerce integration', 'GTIN batch import'],
    qrVariant: 'default' as const,
    preview: {
      title: 'Product Data',
      items: ['SKU: ABC-12345', 'GTIN: 01234567890123', 'Brand: Acme Corp', 'Category: Electronics'],
    },
  },
  {
    number: '02',
    icon: Wand2,
    title: 'BrandCodes Auto-Creates Everything',
    description: 'For each product, we automatically generate all the digital assets you need.',
    details: ['Product-specific URLs', 'AI-native landing pages', 'Product AI assistants', 'GS1/QR barcodes'],
    qrVariant: 'branded' as const,
    preview: {
      title: 'Generated Assets',
      items: ['GS1 Digital Link URL', 'Product landing page', 'AI assistant config', 'QR code assets'],
    },
  },
  {
    number: '03',
    icon: Printer,
    title: 'Print the Codes',
    description: 'Plug into your existing label and packaging workflows. Each label gets the right code.',
    details: ['SVG/PNG/PDF exports', 'Adobe Illustrator plugin', 'Label printer support', 'VDP workflow ready'],
    qrVariant: 'gs1-strict' as const,
    preview: {
      title: 'Print-Ready',
      items: ['High-res SVG export', 'CMYK color profile', 'Quiet zone included', 'GS1 compliant'],
    },
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: duration.normal, ease: easing.default }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
            How GS1 Digital Link works in practice
          </h2>
          <p className="text-lg text-deep-navy-300 max-w-3xl mx-auto">
            Get started in minutes with a simple 3-step process. No complex setup required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-electric-blue-200 via-electric-blue-300 to-electric-blue-200 hidden lg:block" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{ duration: duration.normal, delay: index * 0.05, ease: easing.default }}
                    className="relative"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step card */}
                    <div
                      className={`
                        bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer
                        ${isActive
                          ? 'border-electric-blue shadow-lg shadow-electric-blue/10'
                          : 'border-deep-navy-100 hover:border-electric-blue-200'
                        }
                      `}
                    >
                      {/* Step header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`
                            w-14 h-14 rounded-xl flex items-center justify-center transition-colors
                            ${isActive
                              ? 'bg-electric-blue'
                              : 'bg-electric-blue-50'
                            }
                          `}
                        >
                          <step.icon
                            className={`w-7 h-7 ${isActive ? 'text-white' : 'text-electric-blue'}`}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-semibold text-electric-blue">Step {step.number}</span>
                          <h3 className="text-lg font-bold text-deep-navy">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-deep-navy-300 mb-4">{step.description}</p>

                      {/* Details list */}
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center text-sm text-deep-navy-400">
                            <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow - between cards */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-3 lg:hidden">
                        <ArrowRight className="w-6 h-6 text-electric-blue-200 rotate-90" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.slow, ease: easing.default }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-deep-navy rounded-2xl p-8 shadow-xl">
              {/* QR Preview */}
              <div className="flex justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: duration.normal, ease: easing.default }}
                    className="bg-white rounded-xl p-6"
                  >
                    <QRCore
                      variant={steps[activeStep].qrVariant}
                      size={160}
                      showPulse={false}
                      interactive={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Preview content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: duration.normal, ease: easing.default }}
                >
                  <h4 className="text-white font-semibold text-center mb-4">
                    {steps[activeStep].preview.title}
                  </h4>
                  <div className="bg-deep-navy-500 rounded-lg p-4 space-y-2">
                    {steps[activeStep].preview.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: duration.fast, ease: easing.default }}
                        className="flex items-center text-deep-navy-200 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Microcopy */}
              <p className="text-center text-deep-navy-300 text-sm mt-6">
                Same code. Different destination.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
