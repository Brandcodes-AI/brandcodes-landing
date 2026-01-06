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
      'Get accurate answers about safety, ingredients, and usage',
    ],
  },
];

export default function UseCases() {
  const [activeCase, setActiveCase] = useState('product-manager');

  const activeUseCase = useCases.find((uc) => uc.id === activeCase)!;

  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-cool-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          {/* Left: Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-cool-200 p-2 space-y-1">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${
                    activeCase === useCase.id
                      ? 'bg-brand-50 text-brand-600'
                      : 'hover:bg-cool-50 text-cool-700'
                  }`}
                >
                  <useCase.icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      activeCase === useCase.id ? 'text-brand-500' : 'text-cool-400'
                    }`}
                  />
                  <div>
                    <div className="font-medium text-sm">{useCase.title}</div>
                    <div className="text-xs text-cool-500">{useCase.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-cool-200 p-8 h-full"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center">
                    <activeUseCase.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">{activeUseCase.title}</h3>
                    <p className="text-cool-500">{activeUseCase.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeUseCase.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-cool-700">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
