import { motion } from 'framer-motion';
import { Upload, Wand2, Printer, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Import Products',
    description: 'Upload via CSV, connect API, sync with PIM/ERP, or import GTINs and e-commerce feeds.',
    details: ['CSV / Excel upload', 'REST API / Webhooks', 'Shopify, BigCommerce integration', 'GTIN batch import'],
    progress: 33,
  },
  {
    number: '02',
    icon: Wand2,
    title: 'BrandCodes Auto-Creates Everything',
    description: 'For each product, we automatically generate all the digital assets you need.',
    details: ['Product-specific URLs', 'AI-native landing pages', 'Product AI assistants', 'GS1/QR barcodes'],
    progress: 66,
  },
  {
    number: '03',
    icon: Printer,
    title: 'Print the Codes',
    description: 'Plug into your existing label and packaging workflows. Each label gets the right code.',
    details: ['SVG/PNG/PDF exports', 'Adobe Illustrator plugin', 'Label printer support', 'VDP workflow ready'],
    progress: 100,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            Get started in minutes with a simple 3-step process. No complex setup required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-28 left-[20%] right-[20%] h-0.5 bg-cool-200" />
          <div className="hidden lg:block absolute top-28 left-[20%] h-0.5 bg-gradient-to-r from-brand-400 to-accent-400" style={{ width: '60%' }} />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
                className="relative"
              >
                {/* Data flow connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-28 -right-3 z-10 items-center">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-brand-400 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-brand-500" />
                    </div>
                  </div>
                )}

                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition-all duration-200 ease-out h-full cursor-pointer relative overflow-hidden group">
                  {/* Progress bar at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cool-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-400 to-accent-400"
                    />
                  </div>

                  {/* Step header */}
                  <div className="flex items-center justify-between mb-6 mt-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-brand-500/30 transition-shadow">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-cool-400 tracking-wider block">STEP</span>
                      <span className="font-mono text-2xl font-bold text-cool-200 group-hover:text-brand-200 transition-colors">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-cool-600 mb-6">{step.description}</p>

                  {/* Details list with numbered prefixes */}
                  <ul className="space-y-2 border-t border-cool-100 pt-4">
                    {step.details.map((detail, i) => (
                      <li key={detail} className="flex items-center text-sm text-cool-600">
                        <span className="font-mono text-[10px] text-brand-400 mr-3 w-4">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom barcode accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Arrow - mobile only between cards */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center border border-brand-200">
                      <ChevronRight className="w-5 h-5 text-brand-500 rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
