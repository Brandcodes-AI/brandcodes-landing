import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';

const team = [
  {
    name: 'Jae',
    role: 'Co-Founder',
    education: 'Computer Science Undergraduate at NUS',
    image: '/team/Jaehyeok-Choi Profile Photo.jpg',
    links: {
      website: 'https://jaechoi.vercel.app/',
      linkedin: 'https://www.linkedin.com/in/choiwab/',
      github: 'https://github.com/choiwab',
    },
  },
  {
    name: 'Limhur',
    role: 'Co-Founder',
    education: 'Computer Science Undergraduate at NUS',
    image: '/team/limhur.jpg',
    links: {
      github: 'https://github.com/lhurr',
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
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
                <p className="text-cool-600 mb-6">{member.education}</p>

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

      {/* Join Us Section */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        {/* QR grid overlay */}
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/30 hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/30 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              ORG_ORIGIN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Built at NUS
            </h2>
            <p className="text-lg text-cool-600">
              BrandCodes is being built by Computer Science students at the National University of Singapore,
              combining academic rigor with entrepreneurial drive to solve real-world problems in the
              product digitization space.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
