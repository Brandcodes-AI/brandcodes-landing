import { motion } from 'framer-motion';
import { Database, Barcode, Palette, ChevronRight } from 'lucide-react';

const workflowSteps = [
  {
    title: 'Data Ingestion',
    description: 'CSV/Excel, API, PIM feeds',
    icon: Database,
  },
  {
    title: 'URL + Page Generation',
    description: 'Auto-create for each SKU',
    icon: Palette,
  },
  {
    title: 'Code Export',
    description: 'QR & GS1 2D for printing',
    icon: Barcode,
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-16 lg:py-24 bg-white relative overflow-hidden">
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
            Fits Into Your Existing Workflow
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            BrandCodes integrates with your design tools, e-commerce platforms, PIM systems, and
            packaging workflows.
          </p>
        </motion.div>

        {/* Workflow as Data Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-gradient-to-r from-brand-50 to-cool-50 rounded-2xl p-8 mb-16 border border-brand-100 overflow-hidden"
        >
          {/* QR pattern overlay */}
          <div className="absolute inset-0 bg-qr-grid opacity-[0.02]" />

          <h3 className="relative text-lg font-semibold text-navy-900 mb-8 text-center">
            Packaging Workflow Integration
          </h3>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                  className="relative bg-white rounded-xl p-6 border border-cool-200 shadow-sm min-w-[180px] group hover:border-brand-300 hover:shadow-md transition-all"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white font-mono text-xs font-bold">{index + 1}</span>
                  </div>

                  <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center mb-4 border border-brand-100 group-hover:bg-brand-100 transition-colors">
                    <step.icon className="w-7 h-7 text-brand-500" />
                  </div>

                  <div className="font-semibold text-navy-900 text-sm mb-1">{step.title}</div>
                  <div className="text-xs text-cool-500">{step.description}</div>

                  {/* Data identifier */}
                  <div className="mt-3 pt-3 border-t border-cool-100">
                    <span className="font-mono text-[10px] text-cool-400">STEP_{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </motion.div>

                {/* Data flow connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:flex items-center mx-4">
                    <div className="w-6 h-px bg-brand-300" />
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-brand-300 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="w-6 h-px bg-brand-300" />
                  </div>
                )}

                {/* Mobile arrow */}
                {index < workflowSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-3">
                    <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center border border-brand-200">
                      <ChevronRight className="w-5 h-5 text-brand-400 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom barcode accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
