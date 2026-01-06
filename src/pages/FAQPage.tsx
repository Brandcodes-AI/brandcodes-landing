import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { duration, easing, viewportOptions } from '../lib/motion';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is BrandCodes?',
        answer:
          'BrandCodes is a platform that transforms product packaging into intelligent digital experiences. We automatically generate GS1-compliant URLs, QR codes, and AI-powered product pages from your product data.',
      },
      {
        question: 'How does BrandCodes work?',
        answer:
          'Simply upload your product data (CSV, Excel, or via API), and BrandCodes automatically creates product-specific URLs and generates GS1 Digital Link compliant 2D barcodes. Each code links to an AI-powered product page that can answer customer questions.',
      },
      {
        question: 'Is BrandCodes GS1 compliant?',
        answer:
          'Yes! BrandCodes is fully compliant with GS1 Digital Link standards and ready for GS1 Sunrise 2027 requirements.',
      },
    ],
  },
  {
    category: 'Product & Features',
    questions: [
      {
        question: 'What kind of codes can I generate?',
        answer:
          'BrandCodes generates both QR codes and GS1 DataMatrix 2D barcodes. All codes are compliant with GS1 Digital Link standards and can be customized with your branding.',
      },
      {
        question: 'Can I customize the product pages?',
        answer:
          'Yes! Product pages are automatically generated from your data, but you can customize the design, add your branding, and configure what information is displayed.',
      },
      {
        question: 'What analytics do you provide?',
        answer:
          'BrandCodes provides comprehensive analytics including scan counts, geographic location, time-based trends, customer questions asked to the AI, and engagement metrics per product.',
      },
    ],
  },
  {
    category: 'Integration & Setup',
    questions: [
      {
        question: 'How long does setup take?',
        answer:
          'Most customers are up and running within minutes. Simply upload your product data, and BrandCodes handles the rest automatically.',
      },
      {
        question: 'Do I need technical knowledge to use BrandCodes?',
        answer:
          'No technical knowledge required! Our platform is designed to be user-friendly. Simply upload your product data and generate codes with a few clicks.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    questions: [
      {
        question: 'Is there a free trial?',
        answer:
          'Yes! We offer a free tier to help you get started. Book a demo to learn more about our pricing options.',
      },
      {
        question: 'How is pricing structured?',
        answer:
          'Our pricing is based on the number of products and scan volume. Contact our team for a customized quote that fits your needs.',
      },
    ],
  },
  {
    category: 'Support & Resources',
    questions: [
      {
        question: 'What kind of support do you offer?',
        answer:
          'We provide email support, comprehensive documentation, and onboarding assistance. Enterprise customers receive dedicated account management and priority support.',
      },
      {
        question: 'Can BrandCodes handle multiple languages?',
        answer:
          'Yes! BrandCodes supports multi-language product pages, making it easy to serve customers around the world.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
              Frequently Asked{' '}
              <span className="text-electric-blue">
                Questions
              </span>
            </h1>
            <p className="text-xl text-deep-navy-400">
              Find answers to common questions about BrandCodes and how we can help transform your product packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, delay: sectionIndex * 0.05, ease: easing.default }}
              className="mb-12 last:mb-0"
            >
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-deep-navy mb-6">{section.category}</h2>

              {/* Questions */}
              <div className="bg-white rounded-xl border border-deep-navy-100 overflow-hidden">
                {section.questions.map((faq, questionIndex) => {
                  const id = `${sectionIndex}-${questionIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div key={id} className="border-b border-deep-navy-100 last:border-b-0">
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-off-white transition group"
                      >
                        <span className="text-lg font-semibold text-deep-navy pr-8 group-hover:text-electric-blue transition">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-deep-navy-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-electric-blue' : ''
                            }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: duration.slow, ease: easing.default }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-deep-navy-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center bg-gradient-to-br from-electric-blue to-electric-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-electric-blue-100 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-electric-blue font-semibold rounded-lg hover:bg-off-white shadow-lg transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
