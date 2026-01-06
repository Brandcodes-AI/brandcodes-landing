import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      // {
      //   question: 'What platforms does BrandCodes integrate with?',
      //   answer:
      //     'BrandCodes integrates with major e-commerce platforms (Shopify, WooCommerce), PIM/ERP systems (Akeneo, SAP), and design tools (Adobe Creative Suite, Figma). We also provide a REST API for custom integrations.',
      // },
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
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Questions
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              Find answers to common questions about BrandCodes and how we can help transform your product packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-navy-900 mb-6">{section.category}</h2>

              {/* Questions */}
              <div className="bg-cool-50 rounded-xl border border-cool-200 overflow-hidden">
                {section.questions.map((faq, questionIndex) => {
                  const id = `${sectionIndex}-${questionIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div key={id} className="border-b border-cool-200 last:border-b-0">
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white transition group"
                      >
                        <span className="text-lg font-semibold text-navy-900 pr-8 group-hover:text-brand-500 transition">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-cool-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-500' : ''
                            }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-cool-600 leading-relaxed">
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
      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-brand-100 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 shadow-lg transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
