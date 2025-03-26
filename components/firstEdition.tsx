import {motion} from "framer-motion";
import Image from "next/image";
import {Calendar, Clock, MapPin} from "lucide-react";
import Embarcadere from "@/assets/images/embarcadere.png";

const fadeInUp = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.5}
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const FirstEdition = () => (
    <section id="first-edition" className="w-full py-12 md:py-24 lg:py-32 bg-yellow/5">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
                <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                    <div className="inline-block rounded-lg bg-red/10 px-3 py-1 text-sm text-red">
                        Première édition
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red">
                        Toutes les informations sur la première édition
                    </h2>
                </div>
            </motion.div>

            <div className="mx-auto grid max-w-6xl items-center py-12 lg:grid-cols-[3fr_2fr] lg:gap-12 gap-12">
                <motion.div
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{opacity: 0, x: 20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                >
                    <Image
                        src={Embarcadere}
                        alt="Conference Venue"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    className="space-y-8 sm:ml-10"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >
                    <motion.div
                        className="flex items-start space-x-4"
                        variants={fadeInUp}
                    >
                        <Calendar className="h-6 w-6 text-[#527CBE] mt-1"/>
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-3xl font-bold text-primary mb-2">Date</h3>
                            <p className="text-xl font-semibold">28 novembre 2025</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-start space-x-4"
                        variants={fadeInUp}
                    >
                        <MapPin className="h-6 w-6 text-[#32A953] mt-1"/>
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-3xl font-bold text-green mb-2">Lieu</h3>
                            <p className="text-xl font-semibold">L’Embarcadère</p>
                            <p className="text-xl font-semibold">13 bis Quai Rambaud 69002 Lyon</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-start space-x-4"
                        variants={fadeInUp}
                    >
                        <Clock className="h-6 w-6 text-[#F8AB09] mt-1"/>
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-3xl font-bold text-yellow mb-2">Horaires</h3>
                            <p className="text-xl font-semibold">9h à 18h30</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);