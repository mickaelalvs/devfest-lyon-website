import {motion} from "framer-motion";
import Image from "next/image";

export const About = () => (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        About the Event
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                        About DevFest Lyon
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        DevFest Lyon is a community-led developer event focusing on Google technologies and beyond. Join us
                        for a day of sessions, workshops, and networking with experts in Android, Web, Cloud, Machine
                        Learning, and more.
                    </p>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">What to expect:</h3>
                        <ul className="ml-6 space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                <span>Technical talks from expert speakers</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green flex-shrink-0"></span>
                                <span>Hands-on workshops and codelabs</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-yellow flex-shrink-0"></span>
                                <span>Networking opportunities with fellow developers</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-red flex-shrink-0"></span>
                                <span>Swag and surprises</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink rounded-lg blur opacity-30"></div>
                        <Image
                            src="/placeholder.svg?height=400&width=600"
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