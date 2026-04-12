import { motion } from 'framer-motion';
import { Link2Off, ShieldAlert, HeadphonesIcon, Package, HelpCircle, QrCode } from 'lucide-react';

const officialPartners = [
  {
    title: 'National University of Singapore',
    logoSrc: '/partner logos/nus-logo-orange-b-stack.png',
    logoAlt: 'National University of Singapore logo',
  },
  {
    title: 'GS1 Singapore',
    logoSrc: '/partner logos/Logo_GS1.svg.png',
    logoAlt: 'GS1 logo',
  },
  {
    title: 'iGroup Korea',
    logoSrc: '/partner logos/igroup_asia_pacific_ltd_logo.jpeg',
    logoAlt: 'iGroup logo',
  },
];

const problems = [
  {
    icon: Link2Off,
    title: 'QR codes point to generic homepages',
    description: 'Not product-level URLs aligned with GS1 and retailer expectations.',
  },
  {
    icon: Package,
    title: 'No scalable way to create product pages',
    description: "Can't create 1,000+ product pages with translations manually.",
  },
  {
    icon: ShieldAlert,
    title: 'Threat of counterfeit products',
    description: 'No built-in way to verify product authenticity — leaving brands and consumers vulnerable to fakes.',
  },
  {
    icon: HeadphonesIcon,
    title: 'High support costs',
    description: 'Repetitive "how do I..." questions that could be automated.',
  },
  {
    icon: HelpCircle,
    title: 'Overloaded packaging',
    description: 'Limited physical space competing with growing regulatory requirements.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="pt-0 pb-12 lg:pt-0 lg:pb-18 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-4 block">
            OFFICIAL_PARTNERS
          </span>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {officialPartners.map((partner) => (
              <div
                key={partner.title}
                className="bg-white rounded-xl border border-cool-200 px-5 py-4 shadow-sm flex items-center justify-center h-24"
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Brands are being pushed into a 2D barcode world —{' '}
            <span className="text-brand-500">but lack the infrastructure</span> to keep up.
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            Product packaging is becoming the entry point to mandatory digital information,
            but most brands struggle with these challenges:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="relative bg-white rounded-xl p-6 border border-cool-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 ease-out group cursor-pointer overflow-hidden"
            >
              {/* Error indicator strip at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Header with icon and error code */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center border border-red-100 group-hover:bg-red-100 group-hover:border-red-200 transition-all duration-200 ease-out">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <span className="font-mono text-[10px] text-cool-300 tracking-wider group-hover:text-red-400 transition-colors">
                  ERR_{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-navy-900 mb-2">{problem.title}</h3>
              <p className="text-cool-600 text-sm">{problem.description}</p>

              {/* Barcode accent at bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-red-200 opacity-0 group-hover:opacity-40 transition-opacity" />
            </motion.div>
          ))}

          {/* Solution teaser card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 rounded-xl p-6 text-white overflow-hidden"
          >
            {/* QR grid overlay */}
            <div className="absolute inset-0 bg-qr-grid-white opacity-[0.08]" />

            {/* Success indicator strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-300 to-green-400" />

            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 border border-white/20">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">BrandCodes solves all of this</h3>
              <p className="text-brand-100 text-sm">
                Automating compliant, product-specific URLs and QR/GS1 2D barcodes with AI and analytics on top.
              </p>

              {/* Data identifier */}
              <div className="mt-4 pt-3 border-t border-white/20">
                <span className="font-mono text-[10px] text-white/60 tracking-wider">SOLUTION_READY</span>
              </div>
            </div>

            {/* Scanline accent */}
            <div className="absolute bottom-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
