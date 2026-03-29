'use client';

import { Hero } from '@/components/2025/hero';
import { FirstEdition } from '@/components/2025/firstEdition';
import { About } from '@/components/2025/about';
import { Team } from '@/components/2025/team';
import { Footer } from '@/components/2025/footer';
import { Header } from '@/components/2025/header';
import { Register } from '@/components/2025/register';
import { Partners } from '@/components/2025/partners';

export default function Home2025() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FirstEdition />
      <About />
      <Partners />
      <Register />
      <Team />
      <Footer />
    </main>
  );
}
