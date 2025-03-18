"use client";

import {Hero} from "@/components/hero";
import {FirstEdition} from "@/components/firstEdition";
import {About} from "@/components/about";
import {Team} from "@/components/team";
import {Sponsoring} from "@/components/sponsoring";
import {Footer} from "@/components/footer";
import {Register} from "@/components/register";
import {CallForPaper} from "@/components/callForPaper";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <FirstEdition />
            <About />
            <Team />
            <Sponsoring />
            <Register />
            <CallForPaper />
            <Footer />
        </main>
    );
}