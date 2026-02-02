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
  const activeSteps = timeline.filter((t) => t.active).length;

  return (
    <section id="market-opportunity" className="py-16 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* QR grid overlay */}
      <div className="absolute inset-0 bg-qr-grid-white opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-6 border border-yellow-500/30">
            <Calendar className="w-4 h-4 mr-2" />
            Time-Sensitive Opportunity
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The industry is shifting — permanently — to{' '}
            <span className="text-brand-400">product-specific 2D codes</span>.
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            This creates a massive, time-bound opportunity. Brands must adopt product-specific URLs
            and digital product passports fast.
          </p>
        </motion.div>

        {/* Stats Grid as Dashboard Widgets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-navy-900/60 backdrop-blur rounded-xl p-6 border border-slate-700 relative overflow-hidden group hover:border-brand-500/50 transition-colors"
            >
              {/* Live pulse indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>

              {/* Header with icon and identifier */}
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-6 h-6 text-brand-400" />
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                  STAT_{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Value with monospace styling */}
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-mono tracking-tight">
                {stat.value}
              </div>
              <p className="text-sm text-slate-300">{stat.label}</p>

              {/* Barcode accent at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-slate-600 opacity-30" />
            </motion.div>
          ))}
        </div>

        {/* Timeline as Data Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-navy-900/60 backdrop-blur rounded-2xl p-8 border border-slate-700 relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-500/30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-500/30" />

          <h3 className="text-xl font-semibold mb-8 text-center">GS1 Sunrise 2027 Timeline</h3>

          <div className="relative">
            {/* Timeline line - background */}
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-700 hidden sm:block" />
            {/* Timeline line - progress */}
            <div
              className="absolute top-6 left-[10%] h-0.5 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500 hidden sm:block transition-all duration-1000"
              style={{ width: `${(activeSteps / timeline.length) * 80}%` }}
            />

            <div className="grid sm:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="text-center relative"
                >
                  <div
                    className={`w-12 h-12 rounded mx-auto mb-4 flex items-center justify-center z-10 relative ${
                      item.active
                        ? 'bg-brand-500 shadow-lg shadow-brand-500/30'
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {item.active && (
                      <div className="absolute inset-0 rounded bg-brand-400 animate-ping opacity-20" />
                    )}
                    <span className="font-mono text-sm font-bold relative">{item.year.slice(-2)}</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{item.year}</div>
                  <p className="text-sm text-slate-400">{item.event}</p>

                  {/* Status indicator */}
                  <div className="mt-2">
                    <span
                      className={`font-mono text-[10px] tracking-wider ${
                        item.active ? 'text-green-400' : 'text-slate-500'
                      }`}
                    >
                      {item.active ? 'ACTIVE' : 'PENDING'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-700">
            <p className="text-slate-300">
              Major retailers like{' '}
              <span className="text-white font-medium">Walmart, Target, Kroger</span> are signaling
              2D requirements by end of 2027.
            </p>
          </div>

          {/* Bottom barcode accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-slate-600 opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
