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
    <section id="analytics" className="py-16 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* QR grid overlay */}
      <div className="absolute inset-0 bg-qr-grid-white opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Understand What Consumers{' '}
              <span className="text-brand-400">Really</span> Scan, Search, and Struggle With
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              BrandCodes gives you product-level and portfolio-level insights into how your codes and
              pages are used. Turn scan data into actionable product improvements.
            </p>

            {/* Metrics grid as Dashboard Widgets */}
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  className="bg-navy-900/60 backdrop-blur rounded-xl p-5 border border-slate-700 relative overflow-hidden group hover:border-brand-500/50 transition-colors"
                >
                  {/* Live pulse indicator */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className="w-5 h-5 text-brand-400" />
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${
                        metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>

                  {/* Value with monospace styling */}
                  <div className="text-3xl font-bold text-white mb-1 font-mono">{metric.value}</div>
                  <div className="text-sm font-medium text-slate-300 mb-1">{metric.title}</div>
                  <div className="text-xs text-slate-500">{metric.description}</div>

                  {/* Barcode accent at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-slate-600 opacity-20" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard preview with Scanner Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Structured frame instead of blur glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-accent-500/20 rounded-3xl" />
              <div className="absolute -inset-2 border border-brand-400/30 rounded-2xl" />

              {/* Corner scanning indicators */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-400" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-brand-400" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-brand-400" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-400" />

              {/* Dashboard image */}
              <img
                src="/preview/analytics-dashboard.png"
                alt="BrandCodes Analytics Dashboard showing product performance metrics and insights"
                className="relative rounded-xl border border-slate-700 w-full"
                loading="lazy"
              />

              {/* Animated scanline */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent animate-scanline-slow opacity-50" />
              </div>

              {/* Overlay badge with data styling */}
              <div className="absolute top-3/5 -translate-y-1/2 -left-4 bg-white rounded-lg shadow-xl p-4 border-l-4 border-green-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center border border-green-100">
                    <TrendingDown className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-cool-400 tracking-wider">METRIC_UPDATE</p>
                    <p className="text-sm font-semibold text-navy-900">Support Tickets</p>
                    <p className="text-xs text-green-600 font-mono">-35% this month</p>
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
