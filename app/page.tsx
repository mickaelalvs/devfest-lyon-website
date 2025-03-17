"use client";

import {Hero} from "@/components/hero";
import {FirstEdition} from "@/components/firstEdition";
import {About} from "@/components/about";
import {Team} from "@/components/team";
import {Partners} from "@/components/partners";
import {Footer} from "@/components/footer";
import {Register} from "@/components/register";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <FirstEdition />
            <About />
            <Team />
            <Partners />
            <Register />
            <Footer />
        </main>
    );
}