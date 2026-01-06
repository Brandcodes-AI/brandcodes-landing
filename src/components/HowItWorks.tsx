import { motion } from 'framer-motion';
import { Upload, Wand2, Printer, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Import Products',
    description: 'Upload via CSV, connect API, sync with PIM/ERP, or import GTINs and e-commerce feeds.',
    details: ['CSV / Excel upload', 'REST API / Webhooks', 'Shopify, BigCommerce integration', 'GTIN batch import'],
  },
  {
    number: '02',
    icon: Wand2,
    title: 'BrandCodes Auto-Creates Everything',
    description: 'For each product, we automatically generate all the digital assets you need.',
    details: ['Product-specific URLs', 'AI-native landing pages', 'Product AI assistants', 'GS1/QR barcodes'],
  },
  {
    number: '03',
    icon: Printer,
    title: 'Print the Codes',
    description: 'Plug into your existing label and packaging workflows. Each label gets the right code.',
    details: ['SVG/PNG/PDF exports', 'Adobe Illustrator plugin', 'Label printer support', 'VDP workflow ready'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-200 via-accent-400 to-brand-200" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 border border-cool-200 shadow-sm hover:shadow-lg transition h-full">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-cool-600 mb-6">{step.description}</p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-cool-500">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - mobile only between cards */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <a
            href="http://localhost:3000/"
            className="inline-flex items-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 shadow-lg shadow-brand-500/30 transition group"
          >
            Start in 60 Seconds
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
