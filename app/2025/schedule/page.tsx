"use client";

import {ScheduleGrid} from "@/components/schedule/schedule-grid";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Header />
            <ScheduleGrid />
            <Footer />
        </main>
    );
}