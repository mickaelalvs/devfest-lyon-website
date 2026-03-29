import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mic2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionLayout } from '@/components/common/sectionLayout';
import { Edition2025Spotlight } from '@/components/2026/edition2025-spotlight';

const CFP_CONFERENCE_HALL_URL = 'https://conference-hall.io/devfest-lyon-2026';

const formats = [
  { label: '⚡ Quickie', duration: '20 min' },
  { label: '📣 Conférence', duration: '50 min' },
];

const categories = [
  {
    emoji: '📏',
    label: 'Frontend',
    topics: ['Mobile', 'Web', 'Accessibility'],
  },
  {
    emoji: '🗃️',
    label: 'Backend',
    topics: ['Frameworks', 'API', 'Event-driven'],
  },
  {
    emoji: '📊',
    label: 'Data & AI',
    topics: ['LLM', 'Agents autonomes', 'Data Mesh'],
  },
  {
    emoji: '📝',
    label: 'Software Architecture',
    topics: ['Conception', 'Architecture', 'Craftsmanship'],
  },
  {
    emoji: '🔧',
    label: 'Cloud, Infra & DevOps',
    topics: ['Containerization', 'Serverless', 'Orchestration'],
  },
];

const topicBadgeClass = 'rounded-full border border-google-green/30 bg-google-green/5 px-3 py-1 text-xs font-medium text-muted-foreground';

export const Cfp2026 = () => (
  <SectionLayout id="cfp" pill="Appel à conférences" title="Vous avez quelque chose à partager ?" theme="green">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-google-green/10">
          <Mic2 className="h-10 w-10 text-google-green" />
        </div>
        <p className="max-w-lg text-xl text-muted-foreground">
          Le Call for Papers du DevFest Lyon 2026 ouvrira prochainement. Préparez votre proposition !
        </p>
        <div className="flex items-center gap-4">
          <div className="w-36 rounded-2xl border border-google-green/30 bg-google-green/5 p-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-google-green">Ouverture</p>
            <p className="text-6xl font-black text-foreground">13</p>
            <p className="text-xl font-medium text-muted-foreground">Avril 2026</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-google-green" />
          <div className="w-36 rounded-2xl border border-google-green/30 bg-google-green/5 p-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-google-green">Clôture</p>
            <p className="text-6xl font-black text-foreground">14</p>
            <p className="text-xl font-medium text-muted-foreground">Juin 2026</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="mx-auto w-fit max-w-full">
            <div className="grid w-fit max-w-full grid-cols-2 gap-4">
              {formats.map(({ label, duration }) => (
                <div
                  key={label}
                  className="flex w-40 max-w-[calc(50vw-2rem)] flex-col gap-1 rounded-2xl border border-google-green/30 bg-google-green/5 p-5 sm:w-44"
                >
                  <span className="text-lg font-bold text-foreground">{label}</span>
                  <span className="text-sm font-semibold text-google-green">⏱ {duration}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Si vous souhaitez une session de Q&A, elle devra être comprise dans la durée impartie.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-3 lg:gap-y-8">
            {categories.map(({ emoji, label, topics }) => (
              <div key={label} className="flex min-w-0 flex-col items-center gap-3 text-center">
                <h4 className="flex flex-col items-center gap-1 sm:gap-2 mb-3">
                  <span className="text-3xl leading-none md:text-4xl" aria-hidden>
                    {emoji}
                  </span>
                  <span className="text-base font-extrabold leading-tight tracking-tight text-[#223364] md:text-lg lg:text-xl">
                    {label}
                  </span>
                </h4>
                <div className="flex w-full flex-wrap justify-center gap-1.5 sm:gap-2">
                  {topics.map((topic) => (
                    <span key={topic} className={topicBadgeClass}>
                      {topic}
                    </span>
                  ))}
                  <span className={`${topicBadgeClass} text-muted-foreground/60`}>etc…</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center pt-10">
        <Button size="lg" className="bg-google-green font-semibold text-white hover:bg-google-green/90 group" asChild>
          <Link href={CFP_CONFERENCE_HALL_URL} target="_blank" rel="noopener noreferrer">
            Soumettre ma proposition
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>

      <Edition2025Spotlight variant="cfp" theme="green" />
    </motion.div>
  </SectionLayout>
);
