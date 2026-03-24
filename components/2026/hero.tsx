import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ChevronDown, Linkedin, MapPin, Mic2, Ticket } from 'lucide-react';

import Logo from '@/assets/images/logo-devfest-white.svg';
import Background from '@/assets/images/palais-de-la-bourse.jpeg';

export const Hero2026 = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <Image src={Background} alt="" fill className="object-cover object-[center_75%] scale-105 opacity-20" priority />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <div className="relative inline-block">
            <Image src={Logo} alt="DevFest Lyon Logo" width={384} height={1600} className="mx-auto relative" />
          </div>
          <h1 className="mx-auto max-w-200 text-white/80 md:text-2xl text-balance">
            DevFest Lyon, conférence technique destinée à la communauté tech une fois par an dans la ville des lumières 🦁
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <a
            href="#cfp"
            className="inline-flex items-center gap-3 px-8 py-4 bg-google-green hover:bg-google-green/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mic2 className="w-5 h-5" />
            CFP dès le 13 avril
          </a>
          <a
            href="https://www.linkedin.com/company/devfest-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linkedin hover:bg-linkedin-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-6 h-6" />
            Suivez-nous sur LinkedIn
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center align-middle min-[600px]:flex-row mt-8 gap-4"
        >
          <div className="flex items-center space-x-2 font-semibold">
            <Calendar className="h-5 w-5 text-google-yellow" />
            <span className="text-white">4 décembre 2026</span>
          </div>
          <div className="flex items-center justify-center space-x-2 font-semibold">
            <MapPin className="h-5 w-5 text-google-yellow" />
            <span className="text-white">Palais de la Bourse, Lyon, France</span>
          </div>
          <div className="flex items-center justify-center space-x-2 font-semibold">
            <Ticket className="h-5 w-5 text-google-yellow" />
            <span className="text-white">400 participant·e·s</span>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
          transition: {
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: 'easeInOut' },
            opacity: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: 'easeInOut' },
          },
        }}
      >
        <div className="bg-white p-2 rounded-full">
          <ChevronDown className="h-6 w-6 text-black" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);
