'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, Suspense } from 'react';
import { Header } from '@/components/2025/header';
import { Footer } from '@/components/2025/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { sqliJobs } from '@/data/jobboard/sqli';
import { exotecJobs } from '@/data/jobboard/exotec';
import { sogetiJobs } from '@/data/jobboard/sogeti';
import { agixisJobs } from '@/data/jobboard/agixis';
import { siiJobs } from '@/data/jobboard/sii';
import { webnetJobs } from '@/data/jobboard/webnet';
import { decathlonJobs } from '@/data/jobboard/decathlon';
import { peaksJobs } from '@/data/jobboard/peaks';
import { bedrockJobs } from '@/data/jobboard/bedrock';
import { indyJobs } from '@/data/jobboard/indy';
import { zenikaJobs } from '@/data/jobboard/zenika';

const allSponsorsJobs = [
  sqliJobs,
  exotecJobs,
  sogetiJobs,
  agixisJobs,
  siiJobs,
  webnetJobs,
  decathlonJobs,
  peaksJobs,
  bedrockJobs,
  indyJobs,
  zenikaJobs,
];

const getSponsorColor = (sponsorName: string) => {
  const colorMap: Record<string, { border: string; bg: string; button: string; title: string }> = {
    Peaks: {
      border: 'border-pink/30',
      bg: 'bg-pink/10',
      button: 'bg-pink text-pink-foreground hover:bg-pink/90',
      title: 'text-pink',
    },
    Zenika: {
      border: 'border-red/30',
      bg: 'bg-red/10',
      button: 'bg-red text-red-foreground hover:bg-red/90',
      title: 'text-red',
    },
    Webnet: {
      border: 'border-red/30',
      bg: 'bg-red/10',
      button: 'bg-red text-red-foreground hover:bg-red/90',
      title: 'text-red',
    },
    Agixis: {
      border: 'border-primary/30',
      bg: 'bg-primary/10',
      button: 'bg-primary text-primary-foreground hover:bg-primary/90',
      title: 'text-primary',
    },
    Sogeti: {
      border: 'border-primary/30',
      bg: 'bg-primary/10',
      button: 'bg-primary text-primary-foreground hover:bg-primary/90',
      title: 'text-primary',
    },
    SQLI: {
      border: 'border-navy/30',
      bg: 'bg-navy/10',
      button: 'bg-navy text-navy-foreground hover:bg-navy/90',
      title: 'text-navy',
    },
    Bedrock: {
      border: 'border-yellow/30',
      bg: 'bg-yellow/10',
      button: 'bg-yellow text-yellow-foreground hover:bg-yellow/90',
      title: 'text-yellow',
    },
    Indy: {
      border: 'border-navy/30',
      bg: 'bg-navy/10',
      button: 'bg-navy text-navy-foreground hover:bg-navy/90',
      title: 'text-navy',
    },
  };

  // Couleurs par défaut pour les autres sponsors
  const defaultColors = [
    {
      border: 'border-primary/30',
      bg: 'bg-primary/10',
      button: 'bg-primary text-primary-foreground hover:bg-primary/90',
      title: 'text-primary',
    },
    {
      border: 'border-green/30',
      bg: 'bg-green/10',
      button: 'bg-green text-green-foreground hover:bg-green/90',
      title: 'text-green',
    },
    {
      border: 'border-yellow/30',
      bg: 'bg-yellow/10',
      button: 'bg-yellow text-yellow-foreground hover:bg-yellow/90',
      title: 'text-yellow',
    },
  ];

  return colorMap[sponsorName] || defaultColors[0];
};

// Fonction pour créer un slug à partir du nom du sponsor
const getSponsorSlug = (sponsorName: string) => {
  return sponsorName.toLowerCase().replace(/\s+/g, '-');
};

function JobBoardContent() {
  const searchParams = useSearchParams();
  const sponsorFilter = searchParams.get('sponsor');

  // Filtrer les sponsors selon le query param
  const filteredSponsors = useMemo(() => {
    if (!sponsorFilter) {
      return allSponsorsJobs;
    }
    const filterLower = sponsorFilter.toLowerCase();
    return allSponsorsJobs.filter((sponsor) => {
      const sponsorNameLower = sponsor.sponsorName.toLowerCase();
      const sponsorSlug = getSponsorSlug(sponsor.sponsorName);
      // Match soit le nom exact, soit le slug
      return sponsorNameLower === filterLower || sponsorSlug === filterLower;
    });
  }, [sponsorFilter]);

  // Scroll vers le sponsor si un query param est présent
  useEffect(() => {
    if (sponsorFilter) {
      const slug = sponsorFilter.toLowerCase().replace(/\s+/g, '-');
      const element = document.getElementById(slug);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [sponsorFilter]);

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-yellow/5 to-pink/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">Job Board</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                Nos sponsors soutiennent activement le DevFest, et c'est votre premier point commun vu que vous êtes aussi ici ! Découvrez
                leurs offres d'emploi, explorez leurs projets et n'hésitez pas à postuler ! Vous pourrez également les rencontrer sur place
                le jour J pour échanger directement avec eux.
              </p>
              {sponsorFilter && (
                <div className="pt-4">
                  <Button asChild className="text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/2025/jobboard" className="inline-flex items-center gap-2">
                      Voir toutes les offres du DevFest
                      <span>→</span>
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* All Sponsors */}
          <div className="space-y-16">
            <div className="space-y-24">
              {filteredSponsors.map((sponsor, index) => {
                const sponsorSlug = getSponsorSlug(sponsor.sponsorName);
                return (
                  <div key={sponsor.sponsorName} id={sponsorSlug}>
                    {index > 0 && <Separator className="mb-24" />}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-center mb-16 h-36">
                        <a
                          href={sponsor.sponsorWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity h-full flex items-center"
                        >
                          <Image
                            src={sponsor.sponsorLogo}
                            alt={sponsor.sponsorName}
                            width={sponsor.sponsorName === 'Decathlon' ? 360 : 240}
                            height={144}
                            className={`object-contain h-full w-auto ${sponsor.sponsorName === 'Decathlon' ? 'max-w-[360px]' : 'max-w-[240px]'}`}
                          />
                        </a>
                      </div>
                      {sponsor.jobs.length === 0 ? (
                        <p className="text-center text-muted-foreground text-lg">Les offres de {sponsor.sponsorName} arriveront bientôt.</p>
                      ) : (
                        <div className="flex flex-wrap justify-center gap-6 items-stretch">
                          {sponsor.jobs.map((job) => {
                            const colorScheme = getSponsorColor(sponsor.sponsorName);
                            return (
                              <Card
                                key={job.id}
                                className={`hover:shadow-lg transition-shadow w-full max-w-lg md:w-[calc(50%-0.75rem)] ${colorScheme.border} ${colorScheme.bg} border-4 flex flex-col`}
                              >
                                <CardHeader>
                                  <CardTitle className={`text-2xl ${colorScheme.title}`}>{job.title}</CardTitle>
                                  <CardDescription className="text-base">{job.company}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                  <p className="text-base text-muted-foreground mb-4 line-clamp-3">{job.description}</p>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                  <Button asChild className={`w-full ${colorScheme.button}`}>
                                    <Link href={`/2025/jobboard/${job.slug}`}>En savoir plus</Link>
                                  </Button>
                                </CardFooter>
                              </Card>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function JobBoard() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen">
          <Header />
          <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-yellow/5 to-pink/5">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">Job Board</h1>
                <p className="text-muted-foreground">Chargement...</p>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      }
    >
      <JobBoardContent />
    </Suspense>
  );
}
