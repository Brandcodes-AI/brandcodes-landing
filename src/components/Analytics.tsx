import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, Globe, TrendingDown } from 'lucide-react';

const metrics = [
  {
    icon: BarChart3,
    title: 'Scan Volume',
    value: '24.5K',
    change: '+12%',
    positive: true,
    description: 'By region, time, device type, packaging variant',
  },
  {
    icon: MessageSquare,
    title: 'Top Questions',
    value: '1,234',
    change: 'This month',
    positive: true,
    description: 'Grouped by setup, defects, confusion, comparisons',
  },
  {
    icon: Globe,
    title: 'Language Breakdown',
    value: '18',
    change: 'Languages',
    positive: true,
    description: 'Auto-detected locale distribution',
  },
  {
    icon: TrendingDown,
    title: 'Support Deflection',
    value: '67%',
    change: '+8%',
    positive: true,
    description: 'Questions resolved by AI assistant',
  },
];

export default function Analytics() {
  return (
    <section className="py-16 lg:py-24 bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Understand What Consumers{' '}
              <span className="text-brand-400">Really</span> Scan, Search, and Struggle With
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              BrandCodes gives you product-level and portfolio-level insights into how your codes and
              pages are used. Turn scan data into actionable product improvements.
            </p>

            {/* Metrics grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-navy-900/50 backdrop-blur rounded-xl p-5 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className="w-5 h-5 text-brand-400" />
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-slate-300 mb-1">{metric.title}</div>
                  <div className="text-xs text-slate-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur-2xl opacity-20 scale-105" />

              {/* Dashboard image */}
              <img
                src="/product screenshots/analytics-dashboard.png"
                alt="BrandCodes Analytics Dashboard"
                className="relative rounded-2xl shadow-2xl w-full border border-slate-700"
              />

              {/* Overlay badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Support Tickets</p>
                    <p className="text-xs text-green-600">-35% this month</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
