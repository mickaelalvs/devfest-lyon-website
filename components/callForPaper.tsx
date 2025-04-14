import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Calendar, Clock, Mic, Send, Star} from "lucide-react";

export const CallForPaper = () => (
    <section id="call-for-papers" className="w-full py-12 md:py-24 lg:py-32 bg-navy/5">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-navy/10 px-3 py-1 text-sm text-navy">Call for Papers
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy pt-4">
                        Être Speaker au premier DevFest Lyon
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Partagez vos connaissances et votre expérience avec la communauté
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.3}}
                className="mb-16 text-center"
            >
                <div className="inline-block relative">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-navy to-primary rounded-full blur opacity-30"></div>
                    <div
                        className="relative bg-background rounded-full px-6 py-3 border border-navy/10 inline-flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-navy"/>
                        <span
                            className="font-medium text-navy">Date du CFP : <strong>Du 16 avril au 15 juin 2025</strong></span>
                    </div>
                </div>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="space-y-6"
                >
                    <div className="relative">
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-navy to-primary rounded-lg blur opacity-30"></div>
                        <div className="relative bg-background rounded-lg p-6 shadow-xl border border-navy/10">
                            <h3 className="text-2xl font-bold mb-4 text-navy">Soumettre votre proposition</h3>
                            <p className="text-muted-foreground mb-6">
                                Nous recherchons des conférenciers pour partager leurs idées sur le développement web,
                                mobile, cloud, AI/ML, DevOps, et bien plus encore. Notre CFP est ouvert, et
                                cela jusqu'au 15 juin 2025.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-navy/10 p-2 rounded-full">
                                        <Clock className="h-5 w-5 text-navy"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Formats</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Lightning talks de 20 minutes, Talks de 45 minutes
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-navy/10 p-2 rounded-full">
                                        <Star className="h-5 w-5 text-navy"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Avantages pour les conférenciers</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Billet gratuit pour la conférence
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-navy/10 p-2 rounded-full">
                                        <Mic className="h-5 w-5 text-navy"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Processus de sélection</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Toutes les candidatures sont examinées par notre comité et les notifications
                                            sont envoyées le 3 juillet 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button size="lg" className="bg-navy hover:bg-navy/90 text-white group" asChild>
                                    <Link href="https://conference-hall.io/devfest-lyon-2025">
                                        Soumettre ma proposition
                                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-navy">Liste des sujets potentiels</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            "📏 Frontend",
                            "🗃️ Backend",
                            "🔧 Cloud, Infra & DevOps",
                            "📊 Data & AI",
                            "📝 Software Architecture"
                        ].map((topic, i) => (
                            <motion.div
                                key={i}
                                whileHover={{y: -5}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                className="bg-background rounded-lg p-4 shadow-md border border-navy/10 flex items-center gap-3"
                            >
                                <div className="h-3 w-3 rounded-full bg-navy"></div>
                                <span className="font-bold text-xl">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)