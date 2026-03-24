'use client';

import { ScheduleGrid } from '@/components/schedule/schedule-grid';
import { Header } from '@/components/2025/header';
import { Footer } from '@/components/2025/footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <ScheduleGrid />
      <Footer />
    </main>
  );
}
