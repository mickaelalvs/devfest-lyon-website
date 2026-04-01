import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionLayout } from '@/components/common/sectionLayout';
import { Edition2025Spotlight } from '@/components/2026/edition2025-spotlight';

const sponsorItem = 'flex min-h-0 min-w-0 w-full flex-col items-center gap-4 text-center md:gap-5';

const sponsorIcon = 'h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]';

const sponsorTitleClass = 'text-xs font-bold uppercase tracking-[0.12em] text-google-yellow sm:text-sm';

export const Sponsoring2026 = () => (
  <SectionLayout id="sponsoring" pill="Vous voulez soutenir l'événement ?" title="Devenez Sponsors !" theme="yellow">
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-6xl flex-col items-center gap-10"
      >
        <h3 className="w-full text-center text-2xl font-extrabold tracking-tighter text-[#223364] sm:text-3xl md:text-4xl">
          Pourquoi nous sponsoriser ?
        </h3>

        <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:max-w-4xl sm:gap-x-8 sm:gap-y-12 md:max-w-5xl md:gap-x-10 pt-10">
          <li className={sponsorItem}>
            <Users className={`${sponsorIcon} text-google-red`} strokeWidth={1.5} aria-hidden />
            <h4 className={sponsorTitleClass}>
              Contribuer et soutenir les <span className="text-black">communautés techniques</span> locales
            </h4>
          </li>
          <li className={sponsorItem}>
            <Sparkles className={`${sponsorIcon} text-google-blue`} strokeWidth={1.5} aria-hidden />
            <h4 className={sponsorTitleClass}>
              Associez votre image à un événement clé et gagnez en <span className="text-black">visibilité</span> auprès d'un public
              qualifié
            </h4>
          </li>
          <li className={sponsorItem}>
            <Briefcase className={`${sponsorIcon} text-[#223364]`} strokeWidth={1.5} aria-hidden />
            <h4 className={sponsorTitleClass}>
              Créer de vraies opportunités de rencontres et d'échanges pour du <span className="text-black">recrutement</span> et du{' '}
              <span className="text-black">business</span>
            </h4>
          </li>
          <li className={sponsorItem}>
            <GraduationCap className={`${sponsorIcon} text-google-green`} strokeWidth={1.5} aria-hidden />
            <h4 className={sponsorTitleClass}>
              Faire <span className="text-black">monter en compétences</span> vos équipes avec des échanges avec la communauté
            </h4>
          </li>
        </ul>

        <Button size="lg" className="bg-google-yellow hover:bg-google-yellow/90 text-black font-semibold group mt-6 text-base" asChild>
          <Link
            href="https://drive.google.com/drive/u/1/folders/1P8Q6wzMP-DxdlLHXzQmRpDmXhakrDWDE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir les packs de sponsoring
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        <Edition2025Spotlight variant="sponsoring" theme="yellow" />
      </motion.div>
    </div>
  </SectionLayout>
);
