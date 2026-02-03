import { motion } from 'framer-motion';
import { Target, Zap, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe every product deserves a digital identity that connects brands with their customers.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Leveraging AI and automation to solve complex problems with simple, elegant solutions.',
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Built from the ground up for GS1 Digital Link standards and regulatory requirements.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Designed to handle thousands of products across multiple languages and regions.',
  },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 lg:pt-40 lg:pb-8 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.03]" />
        {/* Corner brackets */}
        <div className="absolute top-28 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/40 hidden lg:block" />
        <div className="absolute top-28 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/40 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                BrandCodes
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              Bridging the gap between physical products and digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-cool-600 mb-6">
                As the world moves toward GS1 Sunrise 2027, brands face a critical challenge:
                transforming every product into a connected digital experience. Traditional barcodes
                are being replaced by 2D codes that link to rich, product-specific information.
              </p>
              <p className="text-lg text-cool-600 mb-6">
                BrandCodes was built to make this transition seamless. We automate the creation of
                GS1-compliant URLs, QR codes, and AI-powered product pages — turning what would take
                months of development into minutes of setup.
              </p>
              <p className="text-lg text-cool-600">
                Our platform empowers brands to not just meet compliance requirements, but to unlock
                new opportunities for customer engagement, support automation, and post-purchase insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Corner bracket frame instead of blur */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brand-400/60" />
              <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-brand-400/60" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-brand-400/60" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brand-400/60" />
              <div className="relative bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl p-8 text-white overflow-hidden">
                {/* QR grid overlay */}
                <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />
                <div className="relative">
                  <span className="font-mono text-[10px] text-brand-200 tracking-wider mb-2 block">
                    MISSION_OUTCOMES
                  </span>
                  <h3 className="text-2xl font-bold mb-4">What We Enable</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        01
                      </span>
                      <span>Product-specific URLs compliant with GS1 Digital Link standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        02
                      </span>
                      <span>AI-powered product pages that answer customer questions instantly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        03
                      </span>
                      <span>Comprehensive analytics on consumer engagement and behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        04
                      </span>
                      <span>Scalable infrastructure for thousands of products</span>
                    </li>
                  </ul>
                </div>
                {/* Barcode accent at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-white opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              The principles that guide everything we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-cool-200 hover:border-brand-300 hover:shadow-md transition relative overflow-hidden group"
              >
                {/* Corner brackets on hover */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Barcode accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />

                <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
                  VALUE_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 border border-brand-200">
                  <value.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-cool-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
