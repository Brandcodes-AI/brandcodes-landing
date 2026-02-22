import { motion } from 'framer-motion';
import { Link, QrCode, Sparkles, BarChart3, ShieldCheck } from 'lucide-react';

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
    <section id="solution" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-qr-grid opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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

        {/* Three Pillars with Data Matrix Corner Pattern */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 border border-cool-200 h-full hover:border-brand-300 hover:shadow-xl transition-all duration-200 ease-out cursor-pointer relative overflow-hidden">
                {/* Data Matrix Finder Pattern (L-shape corner) */}
                <div className="absolute top-0 left-0 w-5 h-5 bg-brand-500" />
                <div className="absolute top-0 left-5 w-5 h-1 bg-brand-500" />
                <div className="absolute top-5 left-0 w-1 h-5 bg-brand-500" />

                {/* Step number in corner */}
                <div className="absolute top-1 left-1 w-3 h-3 bg-white flex items-center justify-center">
                  <span className="text-brand-500 font-bold text-[8px]">{index + 1}</span>
                </div>

                {/* Icon container */}
                <div className="mt-6 mb-6">
                  <div className={`w-14 h-14 bg-${pillar.color}-50 rounded-lg border-2 border-${pillar.color}-100 flex items-center justify-center group-hover:border-${pillar.color}-300 transition-colors`}>
                    <pillar.icon className={`w-7 h-7 text-${pillar.color}-500`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-cool-600">{pillar.description}</p>

                {/* Bottom data identifier */}
                <div className="mt-6 pt-4 border-t border-cool-100">
                  <span className="font-mono text-xs text-cool-400">PILLAR_{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Bottom barcode accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />
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
          className="relative bg-gradient-to-r from-brand-50 to-brand-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 border border-brand-100 overflow-hidden"
        >
          {/* QR pattern overlay */}
          <div className="absolute inset-0 bg-qr-grid opacity-[0.03]" />

          <div className="relative w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 border border-brand-100">
            <BarChart3 className="w-8 h-8 text-brand-500" />
          </div>
          <div className="relative text-center md:text-left">
            <h3 className="text-xl font-bold text-navy-900 mb-2">+ Analytics Feed</h3>
            <p className="text-cool-600">
              Scan events, languages, questions, and engagement metrics at the individual product level.
              Understand what consumers really scan, search, and struggle with.
            </p>
          </div>
        </motion.div>

        {/* Plus Product Authenticity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-gradient-to-r from-accent-50 to-accent-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 border border-accent-100 overflow-hidden mt-6"
        >
          {/* QR pattern overlay */}
          <div className="absolute inset-0 bg-qr-grid opacity-[0.03]" />

          <div className="relative w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0 border border-accent-100">
            <ShieldCheck className="w-8 h-8 text-accent-500" />
          </div>
          <div className="relative text-center md:text-left">
            <h3 className="text-xl font-bold text-navy-900 mb-2">+ Product Authenticity</h3>
            <p className="text-cool-600">
              Unique encrypted keys and tokens generated per product to verify authenticity at the point of scan.
              Protect your brand and consumers from counterfeit products.
            </p>
          </div>
        </motion.div>

        {/* QR Examples with Scanner Frames */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {/* GS1 2D Example */}
          <div className="relative bg-white rounded-2xl p-8 border border-cool-200 overflow-hidden group hover:border-brand-300 hover:shadow-lg transition-all">
            {/* Corner scanning brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-300 opacity-60 group-hover:opacity-100 group-hover:border-brand-400 transition-all" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-300 opacity-60 group-hover:opacity-100 group-hover:border-brand-400 transition-all" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-300 opacity-60 group-hover:opacity-100 group-hover:border-brand-400 transition-all" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-300 opacity-60 group-hover:opacity-100 group-hover:border-brand-400 transition-all" />

            {/* Scanline on hover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-scanline-slow" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <QrCode className="w-5 h-5 text-brand-500" />
              <h4 className="text-lg font-semibold text-navy-900">GS1 2D Barcodes</h4>
            </div>

            <img
              src="/QR Examples/GS1 Digital Link QR Code.png"
              alt="GS1 2D Barcode example with GTIN encoding"
              className="w-full rounded-lg"
              loading="lazy"
            />

            {/* GTIN data preview */}
            <div className="mt-4 p-3 bg-cool-50 rounded-lg border border-cool-100">
              <p className="font-mono text-xs text-cool-600">
                <span className="text-brand-500">(01)</span>00012345678905
                <span className="text-brand-500 ml-2">(10)</span>BATCH123
                <span className="text-brand-500 ml-2">(17)</span>261231
              </p>
            </div>

            <p className="text-sm text-cool-500 mt-3">
              GS1 Digital Link compliant barcodes encoding GTIN, batch, expiry, and serial data.
            </p>
          </div>

          {/* Branded QR Example */}
          <div className="relative bg-white rounded-2xl p-8 border border-cool-200 overflow-hidden group hover:border-brand-300 hover:shadow-lg transition-all">
            {/* Corner scanning brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent-300 opacity-60 group-hover:opacity-100 group-hover:border-accent-400 transition-all" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent-300 opacity-60 group-hover:opacity-100 group-hover:border-accent-400 transition-all" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-300 opacity-60 group-hover:opacity-100 group-hover:border-accent-400 transition-all" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent-300 opacity-60 group-hover:opacity-100 group-hover:border-accent-400 transition-all" />

            {/* Scanline on hover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent animate-scanline-slow" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent-500" />
              <h4 className="text-lg font-semibold text-navy-900">Branded QR Codes</h4>
            </div>

            <img
              src="/QR Examples/brand-qr-codes.jpeg"
              alt="AI-generated branded QR codes"
              className="w-full rounded-lg"
              loading="lazy"
            />

            {/* Style tag */}
            <div className="mt-4 p-3 bg-accent-50 rounded-lg border border-accent-100">
              <p className="font-mono text-xs text-cool-600">
                <span className="text-accent-500">STYLE:</span> AI-assisted
                <span className="text-accent-500 ml-3">SCAN_RATE:</span> 99.8%
                <span className="text-accent-500 ml-3">FORMAT:</span> SVG
              </p>
            </div>

            <p className="text-sm text-cool-500 mt-3">
              AI-assisted aesthetic QR codes balancing scannability with on-brand visual design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
