import { motion } from "framer-motion";

export const Register = () => (
    <section id="billetterie" className="w-full py-12 md:py-24 lg:py-32 bg-red/5">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center align-middle space-y-4"
                >
                    <div className="space-y-2 flex flex-col items-center gap-2">
                        <div className="inline-block rounded-lg bg-pink/10 px-3 py-1 text-sm text-pink">
                            Complet
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink pt-4">
                            S'inscrire au DevFest Lyon 2025
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Les inscriptions pour le DevFest Lyon 2025 sont complètes ! Toutes les places ont été réservées.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 mt-8">
                        <iframe id="haWidget"
                            src="https://www.helloasso.com/associations/devfest-lyon/evenements/devfest-lyon-2025/widget-bouton"
                            style={{ width: '100%', height: '70px', border: 'none' }}></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)