import { motion } from 'framer-motion';
import { Link2Off, Eye, HeadphonesIcon, Package, HelpCircle } from 'lucide-react';

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
    icon: Eye,
    title: 'Poor post-purchase visibility',
    description: 'Minimal data on what consumers scan, search for, or fail to understand.',
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
    <section id="problem" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cool-50 rounded-xl p-6 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{problem.title}</h3>
              <p className="text-cool-600">{problem.description}</p>
            </motion.div>
          ))}

          {/* Solution teaser card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl p-6 text-white"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">+</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">BrandCodes solves all of this</h3>
            <p className="text-brand-100">
              Automating compliant, product-specific URLs and QR/GS1 2D barcodes with AI and analytics on top.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
