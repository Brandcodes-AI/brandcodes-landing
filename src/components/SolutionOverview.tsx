import { motion } from 'framer-motion';
import { Link, QrCode, Sparkles, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: Link,
    title: 'Auto-generated Product URL',
    description: 'Canonical, GS1-compliant URLs for every SKU, generated from your existing product data.',
    color: 'brand',
  },
  {
    icon: QrCode,
    title: 'GS1 Digital Link QR / 2D Barcode',
    description: 'Print-ready QR and GS1 2D symbols that encode product-specific URLs using compliant structure.',
    color: 'accent',
  },
  {
    icon: Sparkles,
    title: 'AI-Native Product Page + Assistant',
    description: 'Auto-generated multilingual pages with product-specific AI assistants for every product.',
    color: 'fuchsia',
  },
];

export default function SolutionOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            BrandCodes is the automated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-500 to-fuchsia-600">
              "product URL + 2D barcode + AI layer"
            </span>{' '}
            for brands.
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            Turn every SKU into a live digital product experience — without building infrastructure.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 border border-cool-200 h-full hover:border-brand-300 hover:shadow-xl transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <div className={`w-14 h-14 bg-${pillar.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-7 h-7 text-${pillar.color}-600`} />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-cool-600">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Plus Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-50 to-brand-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-8 h-8 text-brand-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-navy-900 mb-2">+ Analytics Feed</h3>
            <p className="text-cool-600">
              Scan events, languages, questions, and engagement metrics at the individual product level.
              Understand what consumers really scan, search, and struggle with.
            </p>
          </div>
        </motion.div>

        {/* QR Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-cool-50 rounded-2xl p-8 border border-gray-100">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">GS1 2D Barcodes</h4>
            <img
              src="/QR Examples/GS1 Digital Link QR Code.png"
              alt="GS1 2D Barcode example with GTIN encoding"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-cool-500 mt-4">
              GS1 Digital Link compliant barcodes encoding GTIN, batch, expiry, and serial data.
            </p>
          </div>

          <div className="bg-cool-50 rounded-2xl p-8 border border-gray-100">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">Branded QR Codes</h4>
            <img
              src="/QR Examples/brand-qr-codes.jpeg"
              alt="AI-generated branded QR codes"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-cool-500 mt-4">
              AI-assisted aesthetic QR codes balancing scannability with on-brand visual design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
