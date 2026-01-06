import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    id: 'dashboard',
    title: 'Supplier Dashboard',
    description: 'Manage all your products, codes, and analytics in one place.',
    image: '/product screenshots/supplier-dashboard.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'qr',
    title: 'QR Code Preview',
    description: 'View & download auto-generated GS1 Digital Link QR Code at your fingertips.',
    image: '/product screenshots/qr-code-preview.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'consumer-page',
    title: 'Consumer Product Page',
    description: 'AI-native product pages your customers see when scanning.',
    image: '/product screenshots/consumer-product-page-view.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'ai-chat',
    title: 'AI Chat Interface',
    description: 'Product-specific AI assistant answering customer questions.',
    image: '/product screenshots/ai-chat-interface.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'add-product',
    title: 'Add Product',
    description: 'Easily add products and generate codes in seconds.',
    image: '/product screenshots/add-product-wizard-UI.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics for your products.',
    image: '/product screenshots/analytics-dashboard.png',
    objectFit: 'contain' as const,
  },
  {
    id: 'product-analytics',
    title: 'Product Analytics',
    description: 'Deep dive into individual product performance.',
    image: '/product screenshots/individual-product-analytics.png',
    objectFit: 'contain' as const,
  },
];

export default function ProductPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="preview" className="py-16 lg:py-24 bg-cool-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            See BrandCodes in Action
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            From supplier dashboard to consumer experience — explore what you can build with BrandCodes.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main image */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-cool-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 * direction }}
                transition={{ duration: 0.3 }}
                className="aspect-video relative"
              >
                <img
                  src={screenshots[activeIndex].image}
                  alt={screenshots[activeIndex].title}
                  className={`w-full h-full ${screenshots[activeIndex].objectFit === 'contain' ? 'object-contain bg-cool-100' : 'object-cover'}`}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-cool-700" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition z-10"
            >
              <ChevronRight className="w-6 h-6 text-cool-700" />
            </button>
          </div>

          {/* Caption */}
          <motion.div
            key={`caption-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6"
          >
            <h3 className="text-xl font-semibold text-navy-900">{screenshots[activeIndex].title}</h3>
            <p className="text-cool-600 mt-1">{screenshots[activeIndex].description}</p>
          </motion.div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition ${index === activeIndex
                  ? 'border-brand-500 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
