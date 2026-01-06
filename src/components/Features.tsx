import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageCircle,
  Globe,
  Route,
  WifiOff,
  Database,
  QrCode,
  Bot,
  BarChart3,
  Package,
  Plug,
} from 'lucide-react';

const tabs = [
  { id: 'consumer', label: 'Consumer Features' },
  { id: 'supplier', label: 'Supplier Features' },
];

const consumerFeatures = [
  {
    icon: Sparkles,
    title: 'AI-Native Landing Pages',
    description: 'Auto-generated product pages from your data — clean, structured, and mobile-optimized for scanning.',
  },
  {
    icon: MessageCircle,
    title: 'Product-Specific AI Assistant',
    description: 'Every product gets its own AI assistant trained on manuals, specs, and FAQs. Setup, troubleshooting, and more.',
  },
  {
    icon: Globe,
    title: 'Multilingual Auto-Translation',
    description: 'Serve content in 30+ languages with auto-detection and region-specific compliance variants.',
  },
  {
    icon: Route,
    title: 'Intelligent QR Routing',
    description: 'Dynamic routing based on language, region, device type, and user intent signals.',
  },
  {
    icon: WifiOff,
    title: 'Offline-Ready PWA',
    description: 'Mini knowledge base cached on first scan for low-connectivity environments.',
  },
];

const supplierFeatures = [
  {
    icon: Database,
    title: 'Auto-Generation from GTIN/SKU',
    description: 'Import via CSV, API, or PIM. BrandCodes enriches and auto-generates everything per product.',
  },
  {
    icon: QrCode,
    title: 'Barcode Asset Exports',
    description: 'Download print-ready QR and GS1 2D barcodes (SVG/PNG/PDF) for packaging workflows.',
  },
  {
    icon: Bot,
    title: 'AI Assistant per SKU',
    description: 'Configure AI behavior, test with sample questions, tune tone and escalation rules.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Scan volume, top questions, language breakdown, support deflection rates, and more.',
  },
  {
    icon: Package,
    title: 'Packaging Workflow Integration',
    description: 'Plugins for Adobe, Figma, label printers (Zebra), and VDP workflows.',
  },
  {
    icon: Plug,
    title: 'PIM/ERP Integration',
    description: 'Connect Shopify, WooCommerce, Akeneo, and custom feeds via REST API or webhooks.',
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('consumer');

  const features = activeTab === 'consumer' ? consumerFeatures : supplierFeatures;

  return (
    <section id="features" className="py-16 lg:py-24 bg-cool-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-cool-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition ${
                  activeTab === tab.id
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-cool-600 hover:text-navy-900'
                }`}
              >
                {tab.label}
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
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-cool-200 hover:border-brand-300 hover:shadow-md transition group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-500 transition">
                  <feature.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-cool-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
