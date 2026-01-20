import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    description: 'For experimentation',
    price: '$0',
    period: '',
    features: [
      'Up to 3 SKUs (GTINs)',
      'GS1-compliant Digital Links',
      'Smart Pages & redirects',
      'Basic analytics (limited retention)',
      '1 user',
      'BrandCodes watermark',
    ],
    notIncluded: ['Custom domain', 'Unlimited scans'],
    cta: 'Get started free',
    ctaLink: '/contact',
    popular: false,
  },
  {
    name: 'Starter',
    description: 'For early-stage brands',
    price: '$29',
    period: '/ month',
    features: [
      'Up to 50 SKUs (GTINs)',
      'GS1 Digital Link resolver',
      'Smart Pages with brand logo',
      'Basic analytics',
      '1 custom domain',
      '1–2 users',
      'Email support',
      'Unlimited scans',
    ],
    notIncluded: [],
    cta: 'Start Starter plan',
    ctaLink: '/contact',
    popular: false,
  },
  {
    name: 'Growth',
    description: 'For scaling teams',
    price: '$99',
    period: '/ month',
    features: [
      'Up to 1,000 SKUs (GTINs)',
      'Advanced analytics (retailer, region, time)',
      'Bulk upload & SKU management',
      'Multi-language routing',
      'API access',
      '5 users',
      '3 custom domains',
      'SLA-backed support',
      'Unlimited scans',
    ],
    notIncluded: [],
    cta: 'Start Growth plan',
    ctaLink: '/contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For global organizations',
    price: 'Custom',
    period: '',
    features: [
      '10,000+ SKUs (expandable)',
      'Multiple workspaces & environments',
      'SSO (SAML / SCIM)',
      'Audit logs & role-based permissions',
      'Data residency & compliance options',
      'Dedicated resolver subdomain',
      'Higher API rate limits',
      'Dedicated onboarding & support',
      'Optional VPC / private routing',
      'Unlimited scans',
    ],
    notIncluded: [],
    cta: 'Talk to sales',
    ctaLink: '/contact',
    popular: false,
  },
];

const featureComparison = [
  { feature: 'GS1 Digital Links', free: true, starter: true, growth: true, enterprise: true },
  { feature: 'Unlimited scans', free: false, starter: true, growth: true, enterprise: true },
  { feature: 'Custom domains', free: '—', starter: '1', growth: '3', enterprise: 'Unlimited' },
  { feature: 'Advanced analytics', free: false, starter: false, growth: true, enterprise: true },
  { feature: 'API access', free: false, starter: false, growth: true, enterprise: true },
  { feature: 'Bulk SKU management', free: false, starter: false, growth: true, enterprise: true },
  { feature: 'Multi-language routing', free: false, starter: false, growth: true, enterprise: true },
  { feature: 'SSO & audit logs', free: false, starter: false, growth: false, enterprise: true },
  { feature: 'Data residency', free: false, starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated support', free: false, starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    question: 'Are scans really unlimited?',
    answer: 'Yes. All paid plans include unlimited scans.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes. Plans scale with your SKU count and team size.',
  },
  {
    question: 'Do you support GS1 Digital Link standards?',
    answer: 'Yes. BrandCodes is built GS1-compliant by default.',
  },
  {
    question: 'Do you offer custom contracts?',
    answer: 'Yes. Enterprise plans support custom terms and SLAs.',
  },
];

const whyDifferent = [
  {
    icon: TrendingUp,
    title: 'Priced by SKUs, not scans',
    description: 'Predictable costs at scale',
  },
  {
    icon: Shield,
    title: 'GS1-first design',
    description: 'Built for GTINs, not generic QR codes',
  },
  {
    icon: Zap,
    title: 'Enterprise-ready',
    description: 'Security, compliance, and support when you need it',
  },
  {
    icon: Globe,
    title: 'Grows with you',
    description: 'Upgrade as your product catalog expands',
  },
];

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-4 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Predictable
              </span>{' '}
              Pricing
            </h1>
            <p className="text-xl text-cool-600 mb-4">
              GS1 Digital Link infrastructure that scales with your products
            </p>
            <p className="text-lg text-cool-500">
              Priced by SKUs (GTINs) — not scans. Unlimited scans on all paid plans.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-cool-500">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Save 15–20% with annual billing
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                NGO & education discounts available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col ${plan.popular
                  ? 'border-brand-500 shadow-xl'
                  : 'border-cool-200 hover:border-brand-300'
                  } transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
                  <p className="text-cool-500 text-sm mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                  <span className="text-cool-500">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-cool-600 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-cool-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition ${plan.popular
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'bg-cool-100 text-navy-900 hover:bg-cool-200'
                    }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Section - Commented out for now
      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl p-8 lg:p-12 text-white"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              One-Time GS1 Enablement & Onboarding
            </h2>
            <p className="text-brand-100 mb-6 text-lg">$500 – $3,000 (scope-based)</p>
            <p className="text-brand-100 mb-6">
              Designed to accelerate GS1 Digital Link adoption:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                'GTIN & SKU mapping',
                'Attribute modeling',
                'Experience templates',
                'Resolver configuration',
                'Migration from legacy QR systems',
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-brand-200 space-y-1">
              <p>• Required for most Enterprise plans</p>
              <p>• Waived or discounted for early partners</p>
            </div>
          </motion.div>
        </div>
      </section>
      */}

      {/* Feature Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-cool-600">
              See what's included in each plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-cool-200">
                  <th className="text-left py-4 px-4 font-semibold text-navy-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-500 bg-brand-50 rounded-t-lg">
                    Growth
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-navy-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-cool-50' : ''}>
                    <td className="py-3 px-4 text-cool-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.free === 'boolean' ? (
                        row.free ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-cool-600">{row.free}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-cool-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-brand-50">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-cool-600">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-cool-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why BrandCodes Pricing Is Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDifferent.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-cool-200 text-center"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-cool-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cool-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-cool-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to turn every product into a digital touchpoint?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 transition"
              >
                Get started free
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                Talk to sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
