import { motion } from 'framer-motion';
import {
  Target, Zap, Shield, Globe,
  Link2Off, Eye, HeadphonesIcon, Package, HelpCircle,
  TrendingUp, Calendar, Store
} from 'lucide-react';
import { duration, easing, viewportOptions } from '../lib/motion';

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

const challenges = [
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

const marketStats = [
  {
    value: '92%',
    label: 'of CPG brands print QR codes on packaging (2025)',
    icon: Store,
  },
  {
    value: '44%',
    label: 'YoY growth in QR scanning on packaging',
    icon: TrendingUp,
  },
  {
    value: '85%',
    label: 'of retail POS will be 2D-ready by 2027',
    icon: Globe,
  },
  {
    value: '$30-40B',
    label: 'Smart packaging market size today',
    icon: Calendar,
  },
];

const timeline = [
  { year: '2024', event: 'GS1 2D pilots in 45+ countries', active: true },
  { year: '2025', event: 'Early adopter brands migrate', active: true },
  { year: '2026', event: 'Retailer mandates accelerate', active: true },
  { year: '2027', event: 'GS1 Sunrise deadline', active: false },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration.slow, ease: easing.default }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-electric-blue-50 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              About{' '}
              <span className="text-electric-blue">
                BrandCodes
              </span>
            </h1>
            <p className="text-xl text-deep-navy-400">
              Bridging the gap between physical products and digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.normal, delay: 0.1, ease: easing.default }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-deep-navy-400 mb-6">
                As the world moves toward GS1 Sunrise 2027, brands face a critical challenge:
                transforming every product into a connected digital experience. Traditional barcodes
                are being replaced by 2D codes that link to rich, product-specific information.
              </p>
              <p className="text-lg text-deep-navy-400 mb-6">
                BrandCodes was built to make this transition seamless. We automate the creation of
                GS1-compliant URLs, QR codes, and AI-powered product pages — turning what would take
                months of development into minutes of setup.
              </p>
              <p className="text-lg text-deep-navy-400">
                Our platform empowers brands to not just meet compliance requirements, but to unlock
                new opportunities for customer engagement, support automation, and post-purchase insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.normal, delay: 0.15, ease: easing.default }}
              className="relative"
            >
              <div className="absolute inset-0 bg-electric-blue rounded-2xl blur-2xl opacity-20 scale-105" />
              <div className="relative bg-gradient-to-br from-electric-blue to-electric-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What We Enable</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm">1</span>
                    </span>
                    <span>Product-specific URLs compliant with GS1 Digital Link standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm">2</span>
                    </span>
                    <span>AI-powered product pages that answer customer questions instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm">3</span>
                    </span>
                    <span>Comprehensive analytics on consumer engagement and behavior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm">4</span>
                    </span>
                    <span>Scalable infrastructure for thousands of products</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section (preserved from Problem.tsx) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-deep-navy-400 max-w-3xl mx-auto">
              Brands are being pushed into a 2D barcode world — but lack the infrastructure to keep up.
              Product packaging is becoming the entry point to mandatory digital information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: duration.normal, delay: index * 0.05, ease: easing.default }}
                className="bg-off-white rounded-xl p-6 border border-deep-navy-100 hover:border-amber hover:bg-amber/5 transition group"
              >
                <div className="w-12 h-12 bg-amber/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber/30 transition">
                  <challenge.icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy mb-2">{challenge.title}</h3>
                <p className="text-deep-navy-400">{challenge.description}</p>
              </motion.div>
            ))}

            {/* Solution teaser card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: duration.normal, delay: 0.25, ease: easing.default }}
              className="bg-gradient-to-br from-electric-blue to-electric-blue-600 rounded-xl p-6 text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">BrandCodes solves all of this</h3>
              <p className="text-electric-blue-100">
                Automating compliant, product-specific URLs and QR/GS1 2D barcodes with AI and analytics on top.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Context Section (preserved from MarketOpportunity.tsx) */}
      <section className="py-16 lg:py-24 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber/20 text-amber rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Time-Sensitive Opportunity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The industry is shifting — permanently — to{' '}
              <span className="text-electric-blue">product-specific 2D codes</span>.
            </h2>
            <p className="text-lg text-deep-navy-200 max-w-3xl mx-auto">
              This creates a massive, time-bound opportunity. Brands must adopt product-specific URLs
              and digital product passports fast.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: duration.normal, delay: index * 0.05, ease: easing.default }}
                className="bg-deep-navy-500/50 backdrop-blur rounded-xl p-6 border border-deep-navy-400"
              >
                <stat.icon className="w-8 h-8 text-electric-blue mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-sm text-deep-navy-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="bg-deep-navy-500/50 backdrop-blur rounded-2xl p-8 border border-deep-navy-400"
          >
            <h3 className="text-xl font-semibold mb-8 text-center">GS1 Sunrise 2027 Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-deep-navy-400 hidden sm:block" />
              <div className="absolute top-5 left-0 w-3/4 h-1 bg-gradient-to-r from-electric-blue to-neon-green hidden sm:block" />

              <div className="grid sm:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{ duration: duration.normal, delay: index * 0.05, ease: easing.default }}
                    className="text-center relative"
                  >
                    <div
                      className={`w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center z-10 relative ${
                        item.active
                          ? 'bg-gradient-to-r from-electric-blue to-neon-green'
                          : 'bg-deep-navy-400'
                      }`}
                    >
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{item.year}</div>
                    <p className="text-sm text-deep-navy-200">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-deep-navy-200">
                Major retailers like{' '}
                <span className="text-white font-medium">Walmart, Target, Kroger</span> are signaling
                2D requirements by end of 2027.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-deep-navy-400 max-w-3xl mx-auto">
              The principles that guide everything we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: duration.normal, delay: index * 0.05, ease: easing.default }}
                className="bg-white rounded-xl p-6 border border-deep-navy-100 hover:border-electric-blue hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-electric-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy mb-2">{value.title}</h3>
                <p className="text-deep-navy-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
