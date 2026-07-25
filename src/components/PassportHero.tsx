import { Check } from 'lucide-react';
import { PassportStory } from './passport/PassportStory';

const officialPartners = [
  {
    title: 'National University of Singapore',
    logoSrc: '/partner logos/nus-logo-orange-b-stack.png',
    logoAlt: 'National University of Singapore logo',
  },
  {
    title: 'GS1 Singapore',
    logoSrc: '/partner logos/Logo_GS1.svg.png',
    logoAlt: 'GS1 logo',
  },
  {
    title: 'iGroup Korea',
    logoSrc: '/partner logos/igroup_asia_pacific_ltd_logo.jpeg',
    logoAlt: 'iGroup logo',
  },
];

export default function PassportHero() {
  return (
    <>
      <PassportStory />

      <section className="bg-white border-b border-cool-200 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {['GS1 Compliant', 'SOC 2', 'GDPR Ready', 'GS1 Sunrise 2027 Ready'].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-3 py-1.5 bg-cool-50 rounded border border-cool-200"
              >
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-cool-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <span className="font-mono text-[10px] text-cool-400 tracking-wider mt-10 mb-4 block text-center">
            OFFICIAL_PARTNERS
          </span>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {officialPartners.map((partner) => (
              <div
                key={partner.title}
                className="bg-white rounded-xl border border-cool-200 px-5 py-4 shadow-sm flex items-center justify-center h-24"
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
