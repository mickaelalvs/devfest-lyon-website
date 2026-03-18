import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, ChevronDown, MapPin } from 'lucide-react';

import Logo from '../assets/images/logo-devfest.svg';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center">
    <div className="container px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-yellow/20 rounded-full blur-3xl"
      />

      <div className="flex flex-col items-center space-y-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <div className="relative inline-block">
            <Image src={Logo} alt="DevFest Lyon Logo" width={750} height={1600} className="mx-auto relative" />
          </div>
          <h1 className="mx-auto max-w-[800px] text-muted-foreground md:text-2xl text-balance">
            DevFest Lyon, conférence technique destinée à la communauté tech une fois par an dans la ville des lumières 🦁
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 group font-semibold" asChild>
            <Link href="https://www.linkedin.com/company/devfest-lyon" target="_blank" rel="noopener noreferrer">
              Nous suivre
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-green text-green hover:bg-green/10" asChild>
            <Link href="/jobboard">Job Board</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center align-middle min-[600px]:flex-row mt-8 gap-4"
        >
          <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-xs px-4 py-2 rounded-full font-semibold">
            <Calendar className="h-5 w-5 text-red" />
            <span className="text-foreground">28 novembre 2025</span>
          </div>
          <div className="flex items-center align-middle justify-center space-x-2 bg-background/50 backdrop-blur-xs px-4 py-2 rounded-full font-semibold">
            <MapPin className="h-5 w-5 text-yellow" />
            <span className="text-foreground">Lyon, France</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: 'easeInOut',
              },
              opacity: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: 'easeInOut',
              },
            },
          }}
        >
          <div className="relative">
            <div className="relative bg-background/50 backdrop-blur-sm p-2 rounded-full border border-primary/20">
              <ChevronDown className="h-6 w-6 text-primary" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
