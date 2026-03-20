"use client";

import {Header2026} from "@/components/2026/header";
import {Footer2026} from "@/components/2026/footer";
import {CodeOfConduct} from "@/components/codeOfConduct";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Header2026 />
            <CodeOfConduct />
            <Footer2026 />
        </main>
    );
}
