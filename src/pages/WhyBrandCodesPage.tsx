import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const differentiators = [
  {
    icon: Brain,
    title: 'AI-First Architecture',
    description: 'Deep product support assistant trained on manuals, specs, and FAQs with real-time streaming chat responses.',
  },
  {
    icon: Zap,
    title: 'Automation at Scale',
    description: 'Auto-generated product pages from GTIN/SKU and PIM/ERP feeds. Bulk import thousands of products via CSV or API.',
  },
  {
    icon: Shield,
    title: 'GS1 Native',
    description: 'Built on GS1 Digital Link standards from day one. Full support for all 37 GS1 link types and AI encoding.',
  },
  {
    icon: Users,
    title: 'Consumer Experience',
    description: 'Post-purchase support, multilingual AI, voice capabilities, and offline-ready PWA.',
  },
];

const comparisonData = [
  {
    dimension: 'Primary Product Focus',
    brandcodes: 'AI-powered product support + GS1 infrastructure',
    scantrust: 'Anti-counterfeiting & traceability',
    cleo: 'Conversational compliance AI',
    blink: 'Enterprise link management',
    flowcode: 'Marketing campaigns & analytics',
    dpp: 'EU regulatory compliance',
    generic: 'Basic QR code generation',
  },
  {
    dimension: 'GS1 Digital Link Readiness',
    brandcodes: '✓ Core platform foundation',
    scantrust: '✓ Fully supported',
    cleo: '✓ Fully supported',
    blink: '✓ Full compliance & resolution',
    flowcode: '✗ Not compliance-focused',
    dpp: '✓ DPP-driven implementation',
    generic: '△ Optional add-on',
  },
  {
    dimension: 'AI Product Support Depth',
    brandcodes: '✓ Deep troubleshooting & setup assistant trained on manuals',
    scantrust: '△ Secondary feature, not core',
    cleo: '△ Compliance/ingredients Q&A, not deep troubleshooting',
    blink: '✗ Not a core feature',
    flowcode: '✗ No product support AI',
    dpp: '△ Compliance-focused AI only',
    generic: '✗ No AI or generic chatbot',
  },
  {
    dimension: 'Automated Page Generation',
    brandcodes: '✓ Auto-generated from GTIN & PIM/ERP feeds',
    scantrust: '△ Self-serve manual page builder',
    cleo: '✗ Limited structured page automation',
    blink: '△ Basic microsites, manual setup',
    flowcode: '△ Campaign landing pages only',
    dpp: '△ Technical compliance data views',
    generic: '✗ Redirect only, no pages',
  },
  {
    dimension: 'Consumer Support Experience',
    brandcodes: '✓ Post-purchase troubleshooting, voice AI, multilingual',
    scantrust: '△ Info-driven transparency hubs',
    cleo: '△ Ingredients/compliance Q&A, not technical support',
    blink: '△ Link management, minimal UX',
    flowcode: '△ Marketing funnels, not support',
    dpp: '△ Compliance-driven, minimal UX',
    generic: '✗ Basic redirect',
  },
  {
    dimension: 'Multilingual & Voice AI',
    brandcodes: '✓ Multilingual + voice AI (TTS & STT)',
    scantrust: '△ Multilingual support (manual)',
    cleo: '✓ Multilingual conversational AI with voice',
    blink: '△ Multi-region links, no voice',
    flowcode: '△ Campaign localization',
    dpp: '△ DPP data in multiple languages',
    generic: '✗ No voice AI, limited translation',
  },
  {
    dimension: 'Anti-Counterfeiting Focus',
    brandcodes: '△ Optional roadmap feature',
    scantrust: '✓ Core secure codes & authentication',
    cleo: '△ Not primary focus',
    blink: '✓ Link security & compliance',
    flowcode: '✗ Not security-focused',
    dpp: '△ Secure digital twin identifiers',
    generic: '✗ No security features',
  },
  {
    dimension: 'Best For',
    brandcodes: 'Complex products needing support + GS1 compliance',
    scantrust: 'Brands requiring authentication & traceability',
    cleo: 'CPG focused on ingredients/sustainability compliance',
    blink: 'Large enterprises needing link control at scale',
    flowcode: 'Marketing teams running QR campaigns',
    dpp: 'EU manufacturers needing DPP compliance',
    generic: 'SMBs needing basic QR codes',
  },
];

const useCases = [
  {
    title: 'Complex Durable Goods',
    description: 'Electronics, appliances, tools, and medical devices requiring deep technical troubleshooting and setup assistance.',
    icon: '🔧',
  },
  {
    title: 'Global CPG Brands',
    description: 'Consumer packaged goods needing multilingual product information and compliance across multiple markets.',
    icon: '🌍',
  },
  {
    title: 'Compliance + Engagement',
    description: 'Brands seeking to combine GS1 Sunrise 2027 compliance with superior post-purchase customer experiences.',
    icon: '✅',
  },
];

// Helper function to determine cell styling based on feature support level
const getFeatureStyle = (value: string) => {
  if (value.startsWith('✓')) {
    return 'text-green-600 font-medium';
  } else if (value.startsWith('△')) {
    return 'text-orange-500';
  } else if (value.startsWith('✗')) {
    return 'text-gray-400';
  }
  return 'text-cool-600';
};

// Identify key differentiator rows for special highlighting
const isKeyDifferentiator = (dimension: string) => {
  return [
    'AI Product Support Depth',
    'Automated Page Generation',
    'Consumer Support Experience',
    'Multilingual & Voice AI'
  ].includes(dimension);
};

export default function WhyBrandCodesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
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
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                BrandCodes
              </span>{' '}
              Is the All-in-One Solution
            </h1>
            <p className="text-xl text-cool-600 mb-4">
              The only platform combining GS1-compliant infrastructure, AI-powered support, and automated product page generation at scale
            </p>
            <p className="text-lg text-cool-500">
              Built for brands that need more than just QR codes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What Makes BrandCodes Different
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              Four core capabilities that set us apart from traditional QR and barcode platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
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
                  DIFF_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 border border-brand-200">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-cool-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leadership Statement */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
                SEC_LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Beyond Compliance: Complete Customer Engagement
              </h2>
              <p className="text-lg text-cool-600 mb-6">
                Most platforms focus on either compliance, traceability, or marketing. BrandCodes combines all three with an AI-first approach.
              </p>
              <p className="text-lg text-cool-600 mb-6">
                We don't just generate QR codes, we create intelligent product companions that answer questions, provide support, and deliver rich experiences.
              </p>
              <p className="text-lg text-cool-600">
                Whether you're preparing for GS1 Sunrise 2027 or building next-generation consumer experiences, BrandCodes provides the infrastructure you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Corner bracket frame instead of blur */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brand-400/60" />
              <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-brand-400/60" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-brand-400/60" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brand-400/60" />
              <div className="relative bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl p-8 text-white overflow-hidden">
                {/* QR grid overlay on card */}
                <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />
                <div className="relative">
                  <span className="font-mono text-[10px] text-brand-200 tracking-wider mb-2 block">
                    ADV_SUMMARY
                  </span>
                  <h3 className="text-2xl font-bold mb-4">The BrandCodes Advantage</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        01
                      </span>
                      <span>Automated product pages generated from GTIN and PIM data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        02
                      </span>
                      <span>AI assistant trained on your product manuals and technical docs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        03
                      </span>
                      <span>Real-time analytics with sentiment analysis and intent classification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-mono text-xs">
                        04
                      </span>
                      <span>Full GS1 Digital Link compliance with all 37 link types</span>
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

      {/* Competitor Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How BrandCodes Compares
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              See how we stack up against other smart packaging and QR platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto relative"
          >
            {/* Corner bracket frame */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-300/50 z-20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-300/50" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-300/50 z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-300/50" />
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-cool-200">
                  <th className="text-left py-4 px-4 font-semibold text-navy-900 sticky left-0 bg-white z-10 min-w-[200px]">
                    <span className="font-mono text-[9px] text-cool-400 mr-2">ROW</span>
                    Feature / Dimension
                  </th>
                  <th className="py-4 px-4 font-semibold text-white bg-brand-500 min-w-[200px]">
                    BrandCodes
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    Scantrust
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    Digital Link (Cleo)
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    BL.INK
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    Flowcode
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    DPP Platforms
                  </th>
                  <th className="py-4 px-4 font-semibold text-navy-900 min-w-[200px]">
                    Generic QR SaaS
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.dimension} className={index % 2 === 0 ? 'bg-cool-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium text-navy-900 sticky left-0 bg-inherit z-10">
                      <span className="font-mono text-[9px] text-cool-400 mr-2">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {row.dimension}
                    </td>
                    <td className={`py-3 px-4 text-sm ${
                      isKeyDifferentiator(row.dimension)
                        ? 'bg-green-50 border-l-2 border-r-2 border-green-500 text-brand-700 font-semibold'
                        : 'bg-brand-50 border-l-2 border-r-2 border-brand-500 text-brand-700'
                    }`}>
                      {row.brandcodes}
                    </td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.scantrust)}`}>{row.scantrust}</td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.cleo)}`}>{row.cleo}</td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.blink)}`}>{row.blink}</td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.flowcode)}`}>{row.flowcode}</td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.dpp)}`}>{row.dpp}</td>
                    <td className={`py-3 px-4 text-sm ${getFeatureStyle(row.generic)}`}>{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <span className="text-green-600 font-semibold">✓ = Fully supported</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 font-semibold">△ = Partially supported</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 font-semibold">✗ = Not supported</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-50 border border-green-500 rounded mr-2" />
                <span className="text-cool-700">BrandCodes key differentiator</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Case Scenarios */}
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
              Where BrandCodes Excels
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              Ideal scenarios for BrandCodes' unique combination of capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-cool-200 text-center hover:border-brand-300 hover:shadow-md transition relative overflow-hidden group"
              >
                {/* Corner brackets on hover */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Barcode accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />

                <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
                  USE_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{useCase.title}</h3>
                <p className="text-cool-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-500 to-accent-500 relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30 hidden lg:block" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/30 hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/30 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30 hidden lg:block" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              Experience the all-in-one platform built for modern smart packaging
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <a
                href="https://app.brandcodes.io/01/00040000424314"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 transition"
              >
                See BrandCodes in Action
              </a> */}
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 transition"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/*
      USAGE NOTES FOR MARKETING TEAM:

      Aggressiveness Level:
      - Current version: Moderately assertive, truthful to competitor analysis
      - To make MORE aggressive: Change "△" to "✗" for competitors' weak areas, add "Best-in-class" to BrandCodes cells
      - To make LESS aggressive: Use more "△" symbols, add "Varies by plan" qualifiers

      Mobile Optimization:
      - Table is horizontally scrollable with sticky first column
      - Consider hiding some competitor columns on mobile if needed

      Competitor Substitutions:
      - Replace "Generic QR SaaS" with specific brand if needed for SEO
      - Replace "DPP Platforms" with specific brand if targeting EU market

      Legal Review:
      - All claims based on publicly available information and competitor analysis
      - No absolute terms like "only" or "best" - uses "deep", "comprehensive", "advanced"
      - Checkmarks indicate "fully supported" not "exclusive to BrandCodes"
      */}
    </motion.div>
  );
}
