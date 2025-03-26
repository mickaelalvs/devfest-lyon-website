import {motion} from "framer-motion";
import Image from "next/image";

import Mickael from "@/assets/images/team/mickael-alves.jpeg";
import Olivier from "@/assets/images/team/olivier-perez.jpeg";
import Anthony from "@/assets/images/team/anthony-donnet.jpeg";
import Pascaline from "@/assets/images/team/pascaline-larose.jpeg";
import Michael from "@/assets/images/team/michael-da-silva.jpeg";
import Margaux from "@/assets/images/team/margaux-pirat.jpeg";

export const Team = () => {
    const teamMembers = [
        {
            name: "Mickaël Alves",
            role: "Président",
            image: Mickael,
            color: "#527CBE"
        },
        {
            name: "Olivier Perez",
            role: "Vice-Président",
            image: Olivier,
            color: "#32A953"
        },
        {
            name: "Anthony Donnet",
            role: "Trésorier",
            image: Anthony,
            color: "#F8AB09"
        },
        {
            name: "Pascaline Larose",
            role: "Vice-Trésorière",
            image: Pascaline,
            color: "#E84436"
        },
        {
            name: "Michaël Da Silva",
            role: "Secrétaire",
            image: Michael,
            color: "#EE7CAD"
        },
        {
            name: "Margaux Pirat",
            role: "Communication",
            image: Margaux,
            color: "#223364"
        }
    ];

    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    }

    return (
        <section className="py-20 bg-green/5" id="team">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                        <div className="inline-block rounded-lg bg-green/10 px-3 py-1 text-sm text-green">L'équipe
                            organisatrice
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-green">
                            Rencontrez notre équipe
                        </h2>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-x-30 md:gap-y-30 mt-8 pt-16"
                    >
                        {teamMembers.map((member, i) => (
                            <motion.div key={i} variants={item} className="flex flex-col items-center space-y-3 group">
                                <div className="relative">
                                    <div className="relative h-48 w-48 sm:h-36 sm:w-36 md:h-48 md:w-48 overflow-hidden rounded-full bg-background"
                                         style={{borderColor: member.color, borderWidth: '5px'}}>
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={250}
                                            height={250}
                                            className="object-cover transition-transform group-hover:scale-110 duration-300"
                                        />
                                    </div>
                                    <span
                                        className="absolute -top-2 left-2/3 text-nowrap -translate-x-1/2 transform rotate-12 z-10 px-8 py-1 text-l font-bold text-white rounded-4xl"
                                        style={{
                                            backgroundColor: member.color,
                                        }}>
                                            {member.role}
                                        </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="leading-none text-foreground font-bold text-2xl"
                                        style={{color: member.color}}>{member.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}