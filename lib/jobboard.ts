import { JobOffer, SponsorJobs } from '@/types/jobboard';
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

const allSponsorsJobs: SponsorJobs[] = [
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

export function getAllJobs(): JobOffer[] {
  return allSponsorsJobs.flatMap((sponsor) => sponsor.jobs);
}

export function getJobBySlug(slug: string): JobOffer | undefined {
  const allJobs = getAllJobs();
  return allJobs.find((job) => job.slug === slug);
}

export function getSponsorBySlug(slug: string): SponsorJobs | undefined {
  const job = getJobBySlug(slug);
  if (!job) return undefined;

  return allSponsorsJobs.find((sponsor) => sponsor.jobs.some((j) => j.slug === slug));
}
