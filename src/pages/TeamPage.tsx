import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, CheckCircle2, TrendingUp, Handshake, FlaskConical } from 'lucide-react';

const team = [
  {
    name: 'Jaehyeok Choi',
    role: 'CEO',
    bio: 'Ex-Continental engineer. Full-stack and GS1 barcode specialist. Built partnerships with GS1 Singapore, Zuellig Pharma, and iGroup.',
    image: '/team/jae.jpg',
    links: {
      website: 'https://jaechoi.vercel.app/',
      linkedin: 'https://www.linkedin.com/in/choiwab/',
      github: 'https://github.com/choiwab',
    },
  },
  {
    name: 'Lim Hur',
    role: 'CTO',
    bio: 'Ex-TikTok and Crypto.com engineer. Builds high concurrency enterprise-scale ML software systems.',
    image: '/team/limhur.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/lim-hur/',
      github: 'https://github.com/lhurr',
    },
  },
  {
    name: 'Tien Cheng',
    role: 'COO',
    bio: "2x national scholar, ex-DSTA engineer. Previously 2x executive founder (Flora Softworks, Conform Labs).",
    image: '/team/tien-cheng.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/ohtiencheng/',
    },
  },
];

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.03]" />
        {/* Corner brackets */}
        <div className="absolute top-28 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/40 hidden lg:block" />
        <div className="absolute top-28 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/40 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Team
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              The people behind BrandCodes, building the future of product-digital connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="bg-cool-50 rounded-2xl p-8 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition text-center relative overflow-hidden group"
              >
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                {/* Barcode accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />

                <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-4 block">
                  MEMBER_{String(index + 1).padStart(2, '0')}
                </span>

                {/* Profile Photo with corner bracket targeting frame */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Corner bracket frame instead of blur */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand-400 opacity-60" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-brand-400 opacity-60" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-brand-400 opacity-60" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand-400 opacity-60" />
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="relative w-40 h-40 rounded-xl object-cover border-4 border-white shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-brand-500 font-medium mb-2">{member.role}</p>
                <p className="text-cool-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded border border-cool-200 flex items-center justify-center text-cool-600 hover:text-brand-500 hover:border-brand-300 transition"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded border border-cool-200 flex items-center justify-center text-cool-600 hover:text-brand-500 hover:border-brand-300 transition"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded border border-cool-200 flex items-center justify-center text-cool-600 hover:text-brand-500 hover:border-brand-300 transition"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BrandCodes Advantage — Latest Developments */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/30 hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/30 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              ORG_ORIGIN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              The BrandCodes Advantage
            </h2>
            <p className="text-lg text-cool-600">
              Validated by leading academics, global standards bodies, and top accelerators — BrandCodes
              operates where regulation meets cutting-edge tech.
            </p>
          </motion.div>

          {/* Milestone cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* NUS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white rounded-2xl p-7 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition relative overflow-hidden group"
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* NUS Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#003D7C] rounded-xl flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="50" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="serif">NUS</text>
                    <line x1="20" y1="48" x2="80" y2="48" stroke="#E8A000" strokeWidth="3"/>
                    <text x="50" y="65" textAnchor="middle" fill="#E8A000" fontSize="7" fontFamily="serif" letterSpacing="0.5">SINGAPORE</text>
                    <text x="50" y="78" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif" letterSpacing="0.3">Est. 1905</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FlaskConical size={14} className="text-brand-500" />
                    <span className="font-mono text-[10px] text-cool-400 tracking-wider">ACADEMIC_VALIDATION</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">National University of Singapore</h3>
                  <p className="text-cool-600 text-sm leading-relaxed">
                    <span className="font-semibold text-brand-600">10+ NUS Professors</span> have reviewed and validated
                    BrandCodes' technical approach and market strategy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* YCombinator */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-7 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition relative overflow-hidden group"
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* YC Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#FF6600] rounded-xl flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="30" y="42" textAnchor="middle" fill="white" fontSize="36" fontWeight="900" fontFamily="sans-serif">Y</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={14} className="text-brand-500" />
                    <span className="font-mono text-[10px] text-cool-400 tracking-wider">ACCELERATOR</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">Y Combinator 2026</h3>
                  <p className="text-cool-600 text-sm leading-relaxed">
                    Ranked in the{' '}
                    <span className="font-semibold text-brand-600">top 10% of the 2026 cohort</span>{' '}
                    — one of the world's most competitive startup programs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GS1 Singapore */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-2xl p-7 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition relative overflow-hidden group"
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* GS1 Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#00529B] rounded-xl flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 80 44" className="w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="44" rx="4" fill="#00529B"/>
                    <text x="40" y="30" textAnchor="middle" fill="white" fontSize="22" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">GS1</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Handshake size={14} className="text-brand-500" />
                    <span className="font-mono text-[10px] text-cool-400 tracking-wider">PARTNERSHIP</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">GS1 Singapore</h3>
                  <p className="text-cool-600 text-sm leading-relaxed">
                    <span className="font-semibold text-brand-600">Product &amp; partnership confirmed.</span>{' '}
                    Joint pilots scheduled Q2–Q3 2026 with the global barcode standards authority.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* iGroup Korea */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-2xl p-7 border border-cool-200 hover:border-brand-300 hover:shadow-lg transition relative overflow-hidden group"
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* iGroup Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="18" r="7" fill="#4F9CF9"/>
                    <text x="30" y="44" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">iGroup</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={14} className="text-brand-500" />
                    <span className="font-mono text-[10px] text-cool-400 tracking-wider">PILOT_CONFIRMED</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">iGroup Korea</h3>
                  <p className="text-cool-600 text-sm leading-relaxed">
                    <span className="font-semibold text-brand-600">Pilot Q2 2026</span> — Whiskey Shu Yamamoto Edition.
                    Pricing model and project scope actively in discussion.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
