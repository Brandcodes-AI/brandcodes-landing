import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small brands testing GS1 2D / QR on a limited SKU set.',
    features: [
      'Up to 50 SKUs',
      'Manual CSV upload',
      'BrandCodes domain URLs',
      'Standard QR + GS1 2D codes',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/month',
    description: 'For mid-size brands and first packaging partners.',
    features: [
      'Up to 500 SKUs',
      'API / PIM integration',
      'Custom domain/subdomain',
      'Full analytics dashboard',
      'AI assistant customization',
      'Priority support',
      'Team collaboration',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$399',
    period: '/month',
    description: 'Unlimited scale with dedicated support and SLAs.',
    features: [
      'Unlimited SKUs',
      'Multi-brand workspace',
      'SSO authentication',
      'Custom SLAs',
      'Dedicated account manager',
      'White-label options',
      'API rate limits lifted',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Simple, Scalable Pricing
          </h2>
          <p className="text-lg text-cool-600 max-w-3xl mx-auto">
            Start small and grow with your needs. All plans include GS1 Digital Link compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-xl scale-105'
                  : 'bg-white border border-cool-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-navy-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 ${plan.highlighted ? 'text-brand-200' : 'text-cool-500'}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    plan.highlighted ? 'text-brand-100' : 'text-cool-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-brand-200' : 'text-brand-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-white' : 'text-cool-700'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' ? '#contact' : 'http://localhost:3000/'}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-brand-500 hover:bg-cool-100'
                    : 'bg-brand-500 text-white hover:bg-brand-600'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Partner pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-cool-600">
            <span className="font-medium">Packaging converters & GS1 partners:</span>{' '}
            <a href="#contact" className="text-brand-500 hover:underline">
              Contact us for volume pricing and white-label options
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
