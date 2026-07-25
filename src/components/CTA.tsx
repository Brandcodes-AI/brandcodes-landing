import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Cal, { getCalApi } from '@calcom/embed-react';

// Cal.com booking config. Swap CAL_LINK / CAL_NAMESPACE if the event changes.
const CAL_LINK = 'brandcodes/15min';
const CAL_NAMESPACE = '15min';

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', {
        // Force light so the calendar blends with the white card instead of
        // rendering a dark box inside it.
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        // Match the embed to the BrandCodes brand palette.
        cssVarsPerTheme: {
          light: { 'cal-brand': '#0055CC' },
          dark: { 'cal-brand': '#3385FF' },
        },
      });
    })();
  }, []);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
      {/* QR Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />

      {/* Corner frames */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-white/20" />

      {/* Vertical data stream lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-white/20 hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Cal.com inline booking embed with Corner Brackets */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl ring-1 ring-black/5 relative overflow-hidden">
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-200 z-10" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-200 z-10" />

            <div className="text-center mb-6 lg:mb-8">
              <p className="font-mono text-[10px] text-brand-400 tracking-[0.2em] mb-2">SCHEDULE_DEMO</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">Book a Demo</h3>
              <p className="text-cool-600 text-sm sm:text-base">
                Pick a 15-minute slot that works for you. No forms, no back-and-forth.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-cool-200 bg-white min-h-[580px]">
              <Cal
                namespace={CAL_NAMESPACE}
                calLink={CAL_LINK}
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{ theme: 'light', layout: 'month_view', overlayCalendar: 'true' }}
              />
            </div>

            {/* Bottom barcode accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
