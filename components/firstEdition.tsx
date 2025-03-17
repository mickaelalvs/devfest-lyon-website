import {motion} from "framer-motion";
import Image from "next/image";
import {Calendar, MapPin, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const FirstEdition = () => (
    <section id="first-edition" className="w-full py-12 md:py-24 lg:py-32 bg-yellow/5">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
                <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                    <div className="inline-block rounded-lg bg-red/10 px-3 py-1 text-sm text-red">Looking Back</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red">
                        First Edition Highlights
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Relive the memories from our inaugural DevFest Lyon event.
                    </p>
                </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-background rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative h-48">
                        <Image
                            src="/placeholder.svg?height=200&width=400&text=First+Edition"
                            alt="First Edition"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Date & Time</h3>
                        <div className="flex items-center mb-4">
                            <Calendar className="h-5 w-5 text-red mr-2" />
                            <span>April 10, 2024 | 9:00 AM - 6:00 PM</span>
                        </div>
                        <p className="text-muted-foreground">
                            Our first edition was a full day of tech talks, workshops, and networking opportunities.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-background rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative h-48">
                        <Image
                            src="/placeholder.svg?height=200&width=400&text=Venue"
                            alt="Venue"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Location</h3>
                        <div className="flex items-center mb-4">
                            <MapPin className="h-5 w-5 text-yellow mr-2" />
                            <span>Centre de Congrès de Lyon</span>
                        </div>
                        <p className="text-muted-foreground">
                            Located in the heart of Lyon, our venue provided the perfect setting for innovation and
                            collaboration.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-background rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative h-48">
                        <Image
                            src="/placeholder.svg?height=200&width=400&text=Attendees"
                            alt="Attendees"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Attendance</h3>
                        <div className="flex items-center mb-4">
                            <Users className="h-5 w-5 text-green mr-2" />
                            <span>500+ Developers & Tech Enthusiasts</span>
                        </div>
                        <p className="text-muted-foreground">
                            Our inaugural event brought together developers, designers, and tech leaders from across France.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex justify-center"
            >
                <Button className="bg-gradient-to-r from-red to-yellow hover:opacity-90 text-white border-0" asChild>
                    <Link href="#gallery">View Photo Gallery</Link>
                </Button>
            </motion.div>
        </div>
    </section>
);