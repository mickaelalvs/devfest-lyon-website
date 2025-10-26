"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function JobBoard() {
    return (
        <main className="min-h-screen">
            <Header />
            <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-yellow/5 to-pink/5">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-8 text-center"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-block rounded-lg bg-yellow/10 px-4 py-2 text-sm text-yellow font-medium"
                            >
                                🚀 Bientôt disponible
                            </motion.div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                                Jobboard
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                                Les offres de nos sponsors arrivent bientôt
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 max-w-2xl mx-auto"
                        >
                            <div className="relative p-8 rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm border border-muted/20">
                                <div className="text-center space-y-4">
                                    <div className="text-6xl mb-4">💼</div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        Découvrez les opportunités
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Nos sponsors vous proposeront bientôt leurs meilleures offres d'emploi.
                                        Restez connectés pour ne rien manquer !
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
