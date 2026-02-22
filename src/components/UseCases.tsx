import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  Megaphone,
  HeadphonesIcon,
  Printer,
  Building2,
  ShoppingCart,
  User,
} from 'lucide-react';

const useCases = [
  {
    id: 'product-manager',
    icon: Package,
    title: 'Product Manager',
    subtitle: 'Brand / Manufacturer',
    benefits: [
      'Automatically generate product-specific URLs and pages for all SKUs',
      'Meet GS1 2D and retailer requirements without building custom infrastructure',
      'All packaging QR/2D codes resolve to the correct product page',
      'Encrypted tokens per product protect against counterfeits at the point of scan',
      'Consumers always see accurate, up-to-date information',
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Manager',
    subtitle: 'Brand / Manufacturer',
    benefits: [
      'Product pages follow a consistent branded template automatically',
      'Every SKU feels on-brand without manual page design',
      'Run campaigns and promotions through the same product URLs',
      'Update messaging without reprinting packaging',
    ],
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: 'Customer Support Lead',
    subtitle: 'Brand / Manufacturer',
    benefits: [
      'Product-specific AI assistant resolves common questions before reaching your team',
      'Analytics on questions users ask after scanning the code',
      'Identify recurring issues and improve help content',
      'Reduce support ticket volume significantly',
    ],
  },
  {
    id: 'converter',
    icon: Printer,
    title: 'Packaging Converter',
    subtitle: 'Channel Partner',
    benefits: [
      'Pull ready-to-print QR and GS1 2D barcodes for each SKU',
      'Deliver "smart packaging" without building your own software',
      'Manage multiple brands in one interface',
      'Standardize how you deliver digital-ready packaging',
    ],
  },
  {
    id: 'gs1',
    icon: Building2,
    title: 'GS1 Solution Provider',
    subtitle: 'Channel Partner',
    benefits: [
      'Offer members a ready-made platform for product-specific URLs',
      'Help brands adopt GS1 Digital Link pages faster',
      'Enforce GS1 Digital Link syntax compliance',
      'White-label portal for your member organizations',
    ],
  },
  {
    id: 'retailer',
    icon: ShoppingCart,
    title: 'Retailer',
    subtitle: 'Marketplace',
    benefits: [
      'QR/2D codes resolve to structured product pages',
      'Rely on them for shelf, app, and e-receipt experiences',
      'Standardized product URLs and data',
      'Built-in product authenticity verification reduces counterfeit risk on shelves',
      'Integrate off-pack experiences into your own apps',
    ],
  },
  {
    id: 'consumer',
    icon: User,
    title: 'Consumer',
    subtitle: 'End User',
    benefits: [
      'Scan a code and land on a clear product-specific page',
      'Quickly understand what you bought and how to use it',
      'Ask questions in your own language',
      'Verify product authenticity instantly by scanning the code',
      'Get accurate answers about safety, ingredients, and usage',
    ],
  },
];

export default function UseCases() {
  const [activeCase, setActiveCase] = useState('product-manager');

  const activeUseCase = useCases.find((uc) => uc.id === activeCase)!;
  const activeIndex = useCases.findIndex((uc) => uc.id === activeCase);

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
      {/* Subtle background */}
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
            Built for Every Stakeholder
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            BrandCodes delivers value across your entire ecosystem — from product managers to consumers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Role Selector as Data Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-cool-200 p-2 space-y-1">
              {useCases.map((useCase, index) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer ${
                    activeCase === useCase.id
                      ? 'bg-brand-50 border-l-4 border-brand-500'
                      : 'hover:bg-cool-50 border-l-4 border-transparent'
                  }`}
                  aria-pressed={activeCase === useCase.id}
                >
                  <div
                    className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeCase === useCase.id
                        ? 'bg-brand-500 text-white'
                        : 'bg-cool-100 text-cool-500'
                    }`}
                  >
                    <useCase.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-navy-900 truncate">{useCase.title}</div>
                    <div className="text-xs text-cool-500 truncate">{useCase.subtitle}</div>
                  </div>
                  <span className="font-mono text-[10px] text-cool-300 tracking-wider flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Panel with Data Structure */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl border border-cool-200 p-8 h-full relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cool-200" />

                {/* Header */}
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-cool-100">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100">
                    <activeUseCase.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900">{activeUseCase.title}</h3>
                    <p className="text-cool-500 font-mono text-sm">{activeUseCase.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-cool-300 tracking-wider">
                    ROLE_{String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Benefits as data points */}
                <div className="space-y-4">
                  {activeUseCase.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, ease: 'easeOut' }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded flex items-center justify-center border border-green-100 mt-0.5">
                        <span className="font-mono text-xs text-green-600 font-medium">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-cool-700 pt-1">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom barcode accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
