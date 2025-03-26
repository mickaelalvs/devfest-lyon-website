import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const Sponsoring = () => (
    <section id="sponsoring" className="w-full py-12 md:py-24 lg:py-32 bg-pink/5">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                    <div className="inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm text-yellow">Sponsoring</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow">
                        Faites partie de la toute première édition du DevFest Lyon
                    </h2>
                </div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="relative p-8 rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-yellow/10 to-red/10 backdrop-blur-xs"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Devenez Sponsor !</h3>
                            <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
                                Vous souhaitez sponsoriser le DevFest Lyon ? Faites participer vos équipes, obtenez de
                                la visibilité et entrez en contact avec des personnes passionnées !
                            </p>
                            <Button
                                size="lg"
                                className="bg-linear-to-r group from-yellow to-red hover:opacity-90 text-white border-0 font-semibold"
                                asChild
                            >
                                <Link
                                    href="https://drive.google.com/drive/folders/1oxVgRUWi45pTqygUPU15ZGXy7-MFfIVz?usp=drive_link">Pack
                                    de sponsorship
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
)