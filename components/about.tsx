import {motion} from "framer-motion";
import Image from "next/image";
import {Calendar, Handshake, Mic2, Users} from "lucide-react";
import Team from "@/assets/images/team/team.jpeg";

export const About = () => (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-10xl items-center gap-12 py-12 lg:grid-cols-2 lg:gap-12">
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        C'est quoi cet événement ?
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                        À propos de DevFest Lyon
                    </h2>
                    <p className="text-muted-foreground md:text-xl pt-4">
                        Organisée par l'association DevFest Lyon et portée par le Google Developer Group (GDG) Lyonnais,
                        La première édition à Lyon est une opportunité unique pour partager et échanger autour de
                        thématiques techniques dans la région lyonnaise.
                    </p>
                    <div className="space-y-4 pt-4">
                        <h3 className="text-xl font-bold text-foreground pb-4">À quoi s'attendre ?</h3>
                        <ul className="ml-0 sm:ml-6 space-y-4 text-muted-foreground text-xl">
                            <li className="flex items-center gap-2">
                                <Users className="h-6 w-6 text-red"/>
                                <span>250 personnes intéressées par les technologies de demain</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-primary"/>
                                <span>Une journée entière de conférences</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mic2 className="h-6 w-6 text-green"/>
                                <span>Deux tracks de talks techniques d'expert·e·s</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Handshake className="h-6 w-6 text-yellow"/>
                                <span>Du partage avec des passionné·e·s de la tech</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        <div
                            className="absolute -inset-1 bg-linear-to-r from-primary to-pink rounded-lg blur-sm opacity-30"></div>
                        <Image
                            src={Team}
                            alt="DevFest Lyon Event"
                            width={600}
                            height={400}
                            className="relative rounded-lg object-cover shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)