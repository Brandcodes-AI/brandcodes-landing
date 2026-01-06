import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';
import { duration, easing, viewportOptions } from '../lib/motion';

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
      transition={{ duration: duration.slow, ease: easing.default }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-b from-electric-blue-50 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Meet Our{' '}
              <span className="text-electric-blue">
                Team
              </span>
            </h1>
            <p className="text-xl text-deep-navy-400">
              The people behind BrandCodes, building the future of product-digital connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration.normal, delay: 0.1 + index * 0.1, ease: easing.default }}
                className="bg-white rounded-2xl p-8 border border-deep-navy-100 hover:border-electric-blue hover:shadow-lg transition text-center"
              >
                {/* Profile Photo */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-electric-blue rounded-full blur-lg opacity-30" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-deep-navy mb-1">{member.name}</h3>
                <p className="text-electric-blue font-medium mb-2">{member.role}</p>
                <p className="text-deep-navy-400 mb-6">{member.education}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-off-white rounded-full border border-deep-navy-100 flex items-center justify-center text-deep-navy-400 hover:text-electric-blue hover:border-electric-blue transition"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-off-white rounded-full border border-deep-navy-100 flex items-center justify-center text-deep-navy-400 hover:text-electric-blue hover:border-electric-blue transition"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-off-white rounded-full border border-deep-navy-100 flex items-center justify-center text-deep-navy-400 hover:text-electric-blue hover:border-electric-blue transition"
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: duration.normal, ease: easing.default }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
              Built at NUS
            </h2>
            <p className="text-lg text-deep-navy-400">
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
