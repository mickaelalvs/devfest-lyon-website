'use client';

import { Header } from '@/components/2025/header';
import { Footer } from '@/components/2025/footer';
import { CodeOfConduct } from '@/components/codeOfConduct';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <CodeOfConduct backUrl="/2025" />
      <Footer />
    </main>
  );
}
