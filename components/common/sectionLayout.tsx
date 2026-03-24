import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const colorVariants = {
  blue: { pill: 'bg-google-blue/10 text-google-blue', title: 'text-google-blue', background: 'bg-google-blue/5' },
  green: { pill: 'bg-google-green/10 text-google-green', title: 'text-google-green', background: 'bg-google-green/5' },
  red: { pill: 'bg-google-red/10 text-google-red', title: 'text-google-red', background: 'bg-google-red/5' },
  yellow: { pill: 'bg-google-yellow/10 text-google-yellow', title: 'text-google-yellow', background: 'bg-google-yellow/5' },
} as const;

type SectionLayoutProps = {
  id: string;
  pill: string;
  title: string;
  theme: keyof typeof colorVariants;
  children: ReactNode;
};

export const SectionLayout = ({ id, pill, title, theme, children }: SectionLayoutProps) => {
  const color = colorVariants[theme];

  return (
    <section id={id} className={cn('w-full py-12 md:py-24 lg:py-32', color.background)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <div className={`inline-block rounded-lg px-3 py-1 text-sm ${color.pill}`}>{pill}</div>
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${color.title}`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};
