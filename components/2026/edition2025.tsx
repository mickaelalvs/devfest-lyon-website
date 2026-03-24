import Image from "next/image";
import Link from "next/link";
import {ArrowRight, ChevronRight} from "lucide-react";
import {SectionLayout} from "@/components/common/sectionLayout";
import {Button} from "@/components/ui/button";

import s1 from "@/assets/images/edition-2025/Devfest_hd_40.jpg";
import s3 from "@/assets/images/edition-2025/Devfest_hd_85.jpg";
import s4 from "@/assets/images/edition-2025/Devfest_hd_90.jpg";
import s5 from "@/assets/images/edition-2025/Devfest_hd_95.jpg";
import s7 from "@/assets/images/edition-2025/Devfest_hd_100.jpg";
import s9 from "@/assets/images/edition-2025/Devfest_hd_200.jpg";
import s12 from "@/assets/images/edition-2025/Devfest_hd_270.jpg";
import s13 from "@/assets/images/edition-2025/Devfest_hd_280.jpg";
import s15 from "@/assets/images/edition-2025/Devfest_hd_390.jpg";
import s19 from "@/assets/images/edition-2025/Devfest_hd_430.jpg";
import s20 from "@/assets/images/edition-2025/Devfest_hd_462.jpg";
import s21 from "@/assets/images/edition-2025/Devfest_hd_600.jpg";
import s22 from "@/assets/images/edition-2025/Devfest_hd_330.jpg";
import s23 from "@/assets/images/edition-2025/Devfest_hd_610.jpg";
import s24 from "@/assets/images/edition-2025/Devfest_hd_640.jpg";

import sp1 from "@/assets/images/edition-2025/Devfest_hd_73.jpg";
import sp2 from "@/assets/images/edition-2025/Devfest_hd_75.jpg";
import sp4 from "@/assets/images/edition-2025/Devfest_hd_120.jpg";
import sp5 from "@/assets/images/edition-2025/Devfest_hd_125.jpg";
import sp6 from "@/assets/images/edition-2025/Devfest_hd_130.jpg";
import sp8 from "@/assets/images/edition-2025/Devfest_hd_138.jpg";
import sp9 from "@/assets/images/edition-2025/Devfest_hd_445.jpg";
import sp10 from "@/assets/images/edition-2025/Devfest_hd_456.jpg";
import sp15 from "@/assets/images/edition-2025/Devfest_hd_497.jpg";
import sp16 from "@/assets/images/edition-2025/Devfest_hd_500.jpg";
import sp17 from "@/assets/images/edition-2025/Devfest_hd_503.jpg";
import sp19 from "@/assets/images/edition-2025/Devfest_hd_128.jpg";

import c1 from "@/assets/images/edition-2025/Devfest_hd_77.jpg";
import c2 from "@/assets/images/edition-2025/Devfest_hd_115.jpg";
import c3 from "@/assets/images/edition-2025/Devfest_hd_155.jpg";
import c4 from "@/assets/images/edition-2025/Devfest_hd_160.jpg";
import c6 from "@/assets/images/edition-2025/Devfest_hd_220.jpg";
import c7 from "@/assets/images/edition-2025/Devfest_hd_230.jpg";
import c9 from "@/assets/images/edition-2025/Devfest_hd_300.jpg";
import c13 from "@/assets/images/edition-2025/Devfest_hd_375.jpg";
import c14 from "@/assets/images/edition-2025/Devfest_hd_562.jpg";
import c15 from "@/assets/images/edition-2025/Devfest_hd_578.jpg";
import c16 from "@/assets/images/edition-2025/Devfest_hd_580.jpg";

const categories = [
    {
        label: "Talks",
        photos: [s1, s3, s4, s5, s7, s9, s12, s13, s22, s15, s19, s20, s21, s23, s24],
    },
    {
        label: "Sponsors",
        photos: [sp1, sp2, sp4, sp5, sp19, sp6, sp8, sp9, sp10, sp15, sp16, sp17],
    },
    {
        label: "Ambiances",
        photos: [c4, c9, c1, c14, c6, c2, c15, c3, c7, c16, c13],
    },
];

export const Edition2025 = () => (
    <SectionLayout id="edition-2025" pill="Édition 2025" title="Revivez l'édition précédente" theme="blue">
        <div className="flex flex-col gap-8">
            {categories.map(({label, photos}) => (
                <div key={label} className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{label}</h3>
                    <div className="relative">
                        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                            {photos.map((photo, i) => (
                                <div key={i} className="shrink-0 h-56 w-auto overflow-hidden rounded-lg snap-start">
                                    <Image src={photo} alt={`DevFest Lyon 2025 - ${label} ${i + 1}`} className="h-full w-auto object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 bottom-2 w-20 bg-linear-to-l from-background to-transparent pointer-events-none flex items-center justify-end pr-2">
                            <ChevronRight className="h-6 w-6 text-foreground/40" />
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center pt-2">
                <Button size="lg" className="bg-google-blue hover:bg-google-blue/90 group font-semibold" asChild>
                    <Link href="https://evadallacosta.pixieset.com/devfestlyon/" target="_blank" rel="noopener noreferrer">
                        Voir toutes les photos
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    </SectionLayout>
);
