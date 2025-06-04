import {motion} from "framer-motion";
import {Users} from "lucide-react";

export const Register = () => (
    <section id="billetterie" className="w-full py-12 md:py-24 lg:py-32 bg-red/5">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="flex flex-col justify-center align-middle space-y-4"
                >
                    <div className="space-y-2 flex flex-col items-center gap-2">
                        <div className="inline-block rounded-lg bg-pink/10 px-3 py-1 text-sm text-pink">
                            Nombre de places limité
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink pt-4">
                            S'inscrire au DevFest Lyon 2025
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Vous pourrez bientôt réserver votre place à l'événement. Les billets seront disponibles très prochainement ! Restez connectés sur nos réseaux pour ne pas louper l’info !
                        </p>
                    </div>
                    <div className="flex items-center justify-center align-middle space-x-2 text-muted-foreground">
                        <Users className="h-5 w-5 text-pink"/>
                        <span>Capacité limitée - Soyez les premiers à l'ouverture pour garantir votre place !</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)