'use client';

import { Header2026 } from '@/components/2026/header';
import { Hero2026 } from '@/components/2026/hero';
import { About2026 } from '@/components/2026/about';
import { Register2026 } from '@/components/2026/register';
import { Sponsoring2026 } from '@/components/2026/sponsoring';
import { Cfp2026 } from '@/components/2026/cfp';
import { Footer2026 } from '@/components/2026/footer';
import { Team } from '@/components/2026/team';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header2026 />
      <Hero2026 />
      <About2026 />
      <Sponsoring2026 />
      <Cfp2026 />
      <Register2026 />
      <Team />
      <Footer2026 />
    </main>
  );
}
