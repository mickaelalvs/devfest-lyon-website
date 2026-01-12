"use client";

import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {CodeOfConduct} from "@/components/codeOfConduct";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Header />
            <CodeOfConduct backUrl="/2025" />
            <Footer />
        </main>
    );
}