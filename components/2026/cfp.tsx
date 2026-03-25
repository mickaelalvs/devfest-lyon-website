"use client"

import { motion } from 'framer-motion';
import { Mic2, ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/common/sectionLayout';

const formats = [
  { label: 'Quickie', duration: '20 min' },
  { label: 'Conférence', duration: '50 min' },
];

const categories = [
  {
    emoji: '📏',
    label: 'Frontend',
    topics: ['Mobile', 'Web', 'Tools', 'Accessibility'],
  },
  {
    emoji: '🗃️',
    label: 'Backend',
    topics: ['Frameworks', 'API', 'Event-driven', 'Streaming'],
  },
  {
    emoji: '📊',
    label: 'Data & AI',
    topics: ['LLM', 'Agents autonomes', 'Data Mesh', 'Cloud AI', 'Vibe Coding'],
  },
  {
    emoji: '📝',
    label: 'Software Architecture',
    topics: ['Conception', 'Architecture', 'Craftsmanship', 'Design patterns', 'Best practices'],
  },
  {
    emoji: '🔧',
    label: 'Cloud, Infra & DevOps',
    topics: ['Containerization', 'Serverless', 'Orchestration', 'CI/CD'],
  },
];

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
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-google-green/10">
          <Mic2 className="w-10 h-10 text-google-green" />
        </div>
        <p className="text-xl text-muted-foreground max-w-lg">
          Le Call for Papers du DevFest Lyon 2026 ouvrira prochainement. Préparez votre proposition !
        </p>
        <div className="flex items-center gap-4">
          <div className="w-36 rounded-2xl border border-google-green/30 bg-google-green/5 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-google-green mb-2">Ouverture</p>
            <p className="text-3xl font-bold text-foreground">13</p>
            <p className="text-sm font-medium text-muted-foreground">Avril 2026</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-google-green" />
          <div className="w-36 rounded-2xl border border-google-green/30 bg-google-green/5 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-google-green mb-2">Clôture</p>
            <p className="text-3xl font-bold text-foreground">14</p>
            <p className="text-sm font-medium text-muted-foreground">Juin 2026</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Formats</h3>
          <div className="grid grid-cols-2 gap-4">
            {formats.map(({ label, duration }) => (
              <div key={label} className="rounded-2xl border border-google-green/30 bg-google-green/5 p-5 flex flex-col gap-1">
                <span className="text-lg font-bold text-foreground">{label}</span>
                <span className="text-sm font-semibold text-google-green">⏱ {duration}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Si vous souhaitez une session de Q&A, elle devra être comprise dans la durée impartie.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Catégories</h3>
          <div className="flex flex-col gap-4">
            {categories.map(({ emoji, label, topics }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{emoji}</span>
                  <span className="font-semibold text-foreground">{label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-google-green/30 bg-google-green/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                  <span className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground/50">etc…</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </SectionLayout>
);
