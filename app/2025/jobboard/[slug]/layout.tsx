import type { Metadata } from 'next';
import { getJobBySlug, getSponsorBySlug } from '@/lib/jobboard';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  const sponsor = getSponsorBySlug(params.slug);

  if (!job || !sponsor) {
    return {
      title: "Offre d'emploi | DevFest Lyon 2025",
      description: "Offre d'emploi du DevFest Lyon 2025",
    };
  }

  const title = `${job.title} - ${job.company} | DevFest Lyon 2025`;
  const description = job.fullDescription ? `${job.description.substring(0, 150)}...` : job.description.substring(0, 160);

  return {
    title,
    description,
    keywords: ['DevFest Lyon', 'offre emploi', job.title, job.company, 'recrutement', 'développeurs', 'tech jobs', ...(job.skills || [])],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr-FR',
      images: [{ url: 'https://devfest.gdglyon.com/devfest-lyon.webp', width: 1200, height: 600 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@devfestlyon',
      images: ['https://devfest.gdglyon.com/devfest-lyon.webp'],
    },
  };
}

export default function JobDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
