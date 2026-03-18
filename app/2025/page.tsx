'use client';

import { Hero } from '@/components/hero';
import { FirstEdition } from '@/components/firstEdition';
import { About } from '@/components/about';
import { Team } from '@/components/team';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Register } from '@/components/register';
import { Partners } from '@/components/partners';

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
