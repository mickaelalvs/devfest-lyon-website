import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

import about1 from '@/assets/images/edition-2025/Devfest_hd_654.avif';
import about2 from '@/assets/images/edition-2025/Devfest_hd_652.avif';
import about3 from '@/assets/images/edition-2025/Devfest_hd_77.avif';

import sp1 from '@/assets/images/edition-2025/Devfest_hd_653.avif';
import sp2 from '@/assets/images/edition-2025/Devfest_hd_651.avif';
import sp3 from '@/assets/images/edition-2025/Devfest_hd_120.avif';

import talk1 from '@/assets/images/edition-2025/Devfest_hd_40.avif';
import talk2 from '@/assets/images/edition-2025/Devfest_hd_85.avif';
import talk3 from '@/assets/images/edition-2025/Devfest_hd_655.avif';

type Slide = { src: StaticImageData; alt: string };

const ROWS: Record<'about' | 'sponsoring' | 'cfp', Slide[]> = {
  about: [
    { src: about1, alt: 'Ambiance au DevFest Lyon 2025 (1/3)' },
    { src: about2, alt: 'Ambiance au DevFest Lyon 2025 (2/3)' },
    { src: about3, alt: 'Ambiance au DevFest Lyon 2025 (3/3)' },
  ],
  sponsoring: [
    { src: sp1, alt: 'Espace partenaires DevFest Lyon 2025 (1/3)' },
    { src: sp2, alt: 'Espace partenaires DevFest Lyon 2025 (2/3)' },
    { src: sp3, alt: 'Espace partenaires DevFest Lyon 2025 (3/3)' },
  ],
  cfp: [
    { src: talk1, alt: 'Conférence DevFest Lyon 2025 (1/3)' },
    { src: talk2, alt: 'Conférence DevFest Lyon 2025 (2/3)' },
    { src: talk3, alt: 'Conférence DevFest Lyon 2025 (3/3)' },
  ],
};

const borderByTheme = {
  blue: 'border-google-blue/30',
  yellow: 'border-google-yellow/30',
  green: 'border-google-green/30',
} as const;

type Edition2025SpotlightProps = {
  variant: keyof typeof ROWS;
  theme: keyof typeof borderByTheme;
  className?: string;
};

export const Edition2025Spotlight = ({ variant, theme, className }: Edition2025SpotlightProps) => {
  const tiles = ROWS[variant];

  return (
    <figure className={cn('mx-auto mt-12 w-full max-w-5xl', className)}>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {tiles.map(({ src, alt }, i) => (
          <div
            key={i}
            className={cn('min-w-0 overflow-hidden rounded-xl border bg-background/40 shadow-sm sm:rounded-2xl', borderByTheme[theme])}
          >
            <Image src={src} alt={alt} className="aspect-[4/3] w-full object-cover" sizes="(max-width: 640px) 33vw, 240px" />
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        DevFest Lyon — édition 2025 (Photographe Eva Dalla Costa)
      </figcaption>
    </figure>
  );
};
