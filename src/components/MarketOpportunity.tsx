import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Store, Globe } from 'lucide-react';

const stats = [
  {
    value: '92%',
    label: 'of CPG brands print QR codes on packaging (2025)',
    icon: Store,
  },
  {
    value: '44%',
    label: 'YoY growth in QR scanning on packaging',
    icon: TrendingUp,
  },
  {
    value: '85%',
    label: 'of retail POS will be 2D-ready by 2027',
    icon: Globe,
  },
  {
    value: '$30-40B',
    label: 'Smart packaging market size today',
    icon: Calendar,
  },
];

const timeline = [
  { year: '2024', event: 'GS1 2D pilots in 45+ countries', active: true },
  { year: '2025', event: 'Early adopter brands migrate', active: true },
  { year: '2026', event: 'Retailer mandates accelerate', active: true },
  { year: '2027', event: 'GS1 Sunrise deadline', active: false },
];

export default function MarketOpportunity() {
  return (
    <section id="market-opportunity" className="py-16 lg:py-24 bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Time-Sensitive Opportunity
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The industry is shifting — permanently — to{' '}
            <span className="text-brand-400">product-specific 2D codes</span>.
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            This creates a massive, time-bound opportunity. Brands must adopt product-specific URLs
            and digital product passports fast.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900/50 backdrop-blur rounded-xl p-6 border border-slate-700"
            >
              <stat.icon className="w-8 h-8 text-brand-400 mb-4" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900/50 backdrop-blur rounded-2xl p-8 border border-slate-700"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">GS1 Sunrise 2027 Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-slate-700 hidden sm:block" />
            <div className="absolute top-5 left-0 w-3/4 h-1 bg-gradient-to-r from-brand-500 to-accent-500 hidden sm:block" />

            <div className="grid sm:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div
                    className={`w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center z-10 relative ${
                      item.active
                        ? 'bg-gradient-to-r from-brand-500 to-accent-500'
                        : 'bg-slate-700'
                    }`}
                  >
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{item.year}</div>
                  <p className="text-sm text-slate-400">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Major retailers like{' '}
              <span className="text-white font-medium">Walmart, Target, Kroger</span> are signaling
              2D requirements by end of 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
