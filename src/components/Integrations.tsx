import { motion } from 'framer-motion';
import { Database, Barcode, Palette } from 'lucide-react';

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
    <section id="integrations" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* Workflow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-50 to-brand-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-lg font-semibold text-navy-900 mb-8 text-center">
            Packaging Workflow Integration
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3">
                    <step.icon className="w-8 h-8 text-brand-500" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-navy-900 text-sm">{step.title}</div>
                    <div className="text-xs text-cool-500">{step.description}</div>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block mx-4">
                    <svg
                      className="w-8 h-8 text-brand-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration logos grid
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-cool-200 p-6 hover:border-brand-300 hover:shadow-md transition flex flex-col items-center text-center"
            >
              {integration.hasLogo ? (
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-12 w-auto object-contain mb-3"
                />
              ) : (
                <div className="w-12 h-12 bg-cool-100 rounded-lg flex items-center justify-center mb-3">
                  {integration.icon && <integration.icon className="w-6 h-6 text-cool-600" />}
                </div>
              )}
              <h4 className="font-semibold text-navy-900 text-sm">{integration.name}</h4>
              <p className="text-xs text-cool-500 mt-1">{integration.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
