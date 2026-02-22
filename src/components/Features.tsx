import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageCircle,
  Globe,
  Mic,
  WifiOff,
  Database,
  QrCode,
  Bot,
  BarChart3,
  Link,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

const tabs = [
  { id: 'consumer', label: 'Consumer Features', prefix: 'CON' },
  { id: 'supplier', label: 'Supplier Features', prefix: 'SUP' },
];

const consumerFeatures = [
  {
    icon: MessageCircle,
    title: 'AI-Powered Product Assistant',
    description: 'RAG-based AI trained on product manuals, specs, and FAQs with real-time streaming chat responses.',
  },
  {
    icon: Mic,
    title: 'Voice AI Capabilities',
    description: 'Text-to-speech with 10 voice options and speech-to-text for voice queries with multilingual support.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: '7 languages with automatic locale detection, AI-powered real-time translation, and regional content.',
  },
  {
    icon: Sparkles,
    title: 'Smart Product Landing Pages',
    description: 'Auto-generated from GTIN/SKU with specs, compliance data, documents, and all 37 GS1 link types.',
  },
  {
    icon: WifiOff,
    title: 'Offline-Ready PWA',
    description: 'Translation caching and offline viewing capability for low-connectivity environments.',
  },
  {
    icon: ExternalLink,
    title: 'Multiple Links in One Scan',
    description: 'Access brand website, warranty registration, setup videos, manuals, and more from a single QR code.',
  },
];

const supplierFeatures = [
  {
    icon: Database,
    title: 'Product Data Management',
    description: 'Multi-step wizard, bulk CSV/API import, variants with batch/serial/expiry management.',
  },
  {
    icon: QrCode,
    title: 'QR Code & Barcode Design',
    description: 'Custom styling, logo integration, preset themes, AI assistance, multi-format export up to 600 DPI.',
  },
  {
    icon: Bot,
    title: 'AI Assistant Configuration',
    description: 'Configure AI behavior per SKU, test with sample questions, tune tone and escalation rules.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Real-time scan tracking, chat sentiment analysis, intent classification, and topic clustering.',
  },
  {
    icon: Link,
    title: 'GS1 Digital Link Resolver',
    description: 'Cloud-based resolver with dynamic routing and redirection, fully GS1 compliant.',
  },
  {
    icon: ShieldCheck,
    title: 'Product Authenticity',
    description: 'Unique encrypted tokens per product to verify authenticity and protect brands and consumers from counterfeits.',
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('consumer');

  const features = activeTab === 'consumer' ? consumerFeatures : supplierFeatures;
  const activePrefix = tabs.find((t) => t.id === activeTab)?.prefix || 'CON';

  return (
    <section id="features" className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
      {/* Subtle QR grid background */}
      <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Powerful Features for{' '}
            <span className="text-brand-500">Both Sides</span>
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            BrandCodes delivers value to consumers scanning your products and suppliers managing them.
          </p>
        </motion.div>

        {/* Tab Switcher with underline indicator */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex bg-white rounded-lg p-1.5 shadow-sm border border-cool-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-cool-600 hover:text-navy-900 hover:bg-cool-50'
                }`}
                aria-pressed={activeTab === tab.id}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/50 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="relative bg-white rounded-xl p-6 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition-all duration-200 ease-out group cursor-pointer overflow-hidden"
              >
                {/* Corner brackets - appear on hover */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cool-200 group-hover:border-brand-400 transition-colors duration-200 opacity-0 group-hover:opacity-100" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cool-200 group-hover:border-brand-400 transition-colors duration-200 opacity-0 group-hover:opacity-100" />

                {/* Header with icon and data identifier */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center border border-brand-100 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-200 ease-out">
                    <feature.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-200 ease-out" />
                  </div>
                  <span className="font-mono text-[10px] text-cool-300 tracking-wider group-hover:text-cool-400 transition-colors">
                    {activePrefix}_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-cool-600 text-sm">{feature.description}</p>

                {/* Bottom barcode accent - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
