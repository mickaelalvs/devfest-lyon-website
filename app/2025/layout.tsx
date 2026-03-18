import type { Metadata } from 'next';

const title = 'DevFest Lyon 2025';
const description = 'DevFest Lyon, conférence technique destinée à la communauté tech une fois par an dans la ville des lumières 🦁';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'DevFest',
    'DevFest Lyon',
    'conférence développeurs',
    'technologies web',
    'React',
    'Typescript',
    'programmation',
    'cloud',
    'mobile',
    'ateliers',
    'conférences',
    'google developer groups',
    'devfest',
  ],
  robots: 'index,follow',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'fr-FR',
  },
};

export default function Layout2025({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
