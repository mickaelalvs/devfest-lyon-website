import {motion} from "framer-motion";
import Image from "next/image";
import {Badge} from "lucide-react";

export const Team = () => {
    const teamMembers = [
        {
            name: "Emma Laurent",
            role: "Organizer",
            image: "",
            color: "#527CBE"
        },
        {
            name: "Thomas Dubois",
            role: "Tech Lead",
            image: "",
            color: "#32A953"
        },
        {
            name: "Sophie Martin",
            role: "Community",
            image: "",
            color: "#F8AB09"
        },
        {
            name: "Lucas Bernard",
            role: "Designer",
            image: "",
            color: "#E84436"
        },
        {
            name: "Marie Chen",
            role: "Developer",
            image: "",
            color: "#EE7CAD"
        },
        {
            name: "Alex Rivera",
            role: "Marketing",
            image: "",
            color: "#527CBE"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="py-20 bg-green/5" id="team">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                    <div className="inline-block rounded-lg bg-green/10 px-3 py-1 text-sm text-green">Our Amazing Team</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-green">
                        Meet Our Team
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        The passionate volunteers behind DevFest Lyon who make this event possible.
                    </p>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8"
                >
                    {teamMembers.map((member, i) => (
                        <motion.div key={i} variants={item} className="flex flex-col items-center space-y-3 group">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-green to-yellow rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative h-28 w-28 overflow-hidden rounded-full bg-background">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        width={112}
                                        height={112}
                                        className="object-cover transition-transform group-hover:scale-110 duration-300"
                                    />
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 transform">
                                        <Badge className="bg-green text-white border-0 shadow-lg">{member.role}</Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium leading-none text-foreground">{member.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
    )
}