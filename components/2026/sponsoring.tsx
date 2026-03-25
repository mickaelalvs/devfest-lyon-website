'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/common/sectionLayout';

export const Sponsoring2026 = () => (
  <SectionLayout id="sponsoring" pill="Partenariat" title="Devenez Sponsor !" theme="yellow">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center space-y-8"
      >
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Nous soutenir, ce n'est pas seulement contribuer à l'organisation d'un événement tech reconnu. C'est aussi :
        </p>
        <ul className="space-y-4 text-left text-lg md:text-xl text-muted-foreground max-w-xl">
          <li className="flex items-start gap-3">
            <span className="text-2xl">💬</span>
            <span>Contribuer à un événement de la communauté locale</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <span>Gagner en visibilité auprès d'un public qualifié</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🤝</span>
            <span>Créer de vraies opportunités de rencontres et d'échanges</span>
          </li>
        </ul>

        <Button size="lg" className="bg-google-yellow hover:bg-google-yellow/90 text-black font-semibold group" asChild>
          <Link
            href="https://drive.google.com/drive/u/1/folders/1P8Q6wzMP-DxdlLHXzQmRpDmXhakrDWDE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir les packs de sponsoring
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </SectionLayout>
);
