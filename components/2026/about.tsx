import { motion } from 'framer-motion';
import { ArrowRight, Building2, Calendar, Handshake, MapPin, Mic2, Users, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionLayout } from '@/components/common/sectionLayout';
import { Edition2025Spotlight } from '@/components/2026/edition2025-spotlight';

import palaisExterieur from '@/assets/images/edition-2026/palais-de-la-bourse-ext.jpeg';
import palaisInterieur from '@/assets/images/edition-2026/palais-de-la-bourse-int.jpeg';

const EDITION_2025_PHOTOS_URL = 'https://evadallacosta.pixieset.com/devfestlyon/';

/** Zone fixe pour aligner chiffres et ∞ ; en `xl` (4 colonnes) typo un peu réduite pour la grille. */
const aboutStatTop =
  'flex w-full min-h-[6rem] items-center justify-center text-7xl sm:min-h-[7rem] sm:text-8xl md:min-h-[9rem] md:text-9xl lg:min-h-[12rem] lg:text-[5.5rem] lg:leading-none xl:min-h-[10rem] xl:text-7xl 2xl:min-h-[11rem] 2xl:text-8xl leading-none';

const aboutStatCaption =
  'w-full text-balance text-muted-foreground text-base leading-snug sm:max-w-sm sm:text-lg sm:leading-relaxed md:text-xl xl:max-w-[15rem] xl:text-lg 2xl:text-xl xl:leading-snug';

type AboutStat = {
  id: string;
  caption: string;
  Icon: LucideIcon;
  iconClass: string;
  value?: string;
};

const ABOUT_STATS: AboutStat[] = [
  {
    id: 'people',
    value: '400',
    caption: 'personnes intéressées par les technologies et défis de demain',
    Icon: Users,
    iconClass: 'text-google-red',
  },
  {
    id: 'date',
    value: '04/12',
    caption: 'Une journée entière de conférences',
    Icon: Calendar,
    iconClass: 'text-google-blue',
  },
  {
    id: 'tracks',
    value: '3',
    caption: "Tracks de talks techniques d'expert·e·s",
    Icon: Mic2,
    iconClass: 'text-google-green',
  },
  {
    id: 'share',
    caption: 'Du partage avec des passionné·e·s de la tech',
    Icon: Handshake,
    iconClass: 'text-google-yellow',
  },
];

export const About2026 = () => (
  <SectionLayout id="about" pill="C'est quoi cet événement ?" title="À propos de DevFest Lyon" theme="blue">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-muted-foreground md:text-xl pt-4">
          Organisée par l'association DevFest Lyon et portée par le Google Developer Group (GDG) Lyonnais, la deuxième édition du DevFest
          Lyon revient pour une nouvelle journée de partage et d'échanges autour de thématiques techniques dans la région lyonnaise.
        </p>
        <Edition2025Spotlight variant="about" theme="blue" className="mt-8 mb-4 sm:mt-10 sm:mb-5" />
        <div className="flex flex-col items-center gap-2 pb-6 sm:pb-8">
          <Button size="lg" className="bg-google-blue font-semibold hover:bg-google-blue/90 group" asChild>
            <Link href={EDITION_2025_PHOTOS_URL} target="_blank" rel="noopener noreferrer">
              Voir toutes les photos de l&apos;édition 2025
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="space-y-4 pt-15">
          <h3 className="pb-6 text-3xl font-extrabold tracking-tighter text-[#223364] sm:text-4xl md:text-5xl lg:text-6xl">
            À quoi s'attendre pour 2026 ?
          </h3>
          <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-6 gap-y-12 pt-2 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-10">
            {ABOUT_STATS.map(({ id, value, caption, Icon, iconClass }) => (
              <li key={id} className="flex min-h-0 min-w-0 w-full flex-col items-center gap-3 text-center">
                <div className={aboutStatTop}>
                  {value != null ? (
                    <span className="font-black text-[#223364] tabular-nums">{value}</span>
                  ) : (
                    <span className="font-black leading-none text-[#223364] text-[1.85em]">∞</span>
                  )}
                </div>
                <p className={aboutStatCaption}>
                  {caption}
                  <Icon
                    className={`ml-2 inline-block h-[1.15em] w-[1.15em] shrink-0 align-middle ${iconClass}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-balance text-center text-lg font-semibold text-[#223364] sm:text-xl md:text-2xl">
            Dans un lieu emblématique lyonnais
          </p>
          <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 shadow-sm">
              <Image
                src={palaisExterieur}
                alt="Palais de la Bourse — vue extérieure"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 shadow-sm">
              <Image
                src={palaisInterieur}
                alt="Palais de la Bourse — intérieur"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-balance text-center text-lg text-[#223364] md:text-xl">
            <Building2 className="h-5 w-5 shrink-0 text-google-blue" strokeWidth={2} aria-hidden />
            <span className="font-bold">Palais de la Bourse</span>
            <MapPin className="h-5 w-5 shrink-0 text-google-green" strokeWidth={2} aria-hidden />
            <span className="font-bold">20 Place de la Bourse, 69002 Lyon</span>
          </p>
        </div>
      </motion.div>
    </div>
  </SectionLayout>
);
