import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight, Users} from "lucide-react";
import Image from "next/image";

export const Register = () => (
    <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-red/5">
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-4"
                >
                    <div className="space-y-2 flex flex-col items-start gap-2">
                        <div className="inline-block rounded-lg bg-pink/10 px-3 py-1 text-sm text-pink">
                            Limited Spots Available
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink">
                            Register for DevFest Lyon 2025
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Secure your spot at the biggest developer event in Lyon. Early bird tickets available now!
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-red to-pink hover:opacity-90 text-white border-0 group"
                            asChild
                        >
                            <Link href="#tickets">
                                Get Your Ticket
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-pink text-pink hover:bg-pink/10" asChild>
                            <Link href="#group-tickets">Group Tickets</Link>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="h-5 w-5 text-pink" />
                        <span>Limited capacity - Register early to secure your spot</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red to-pink rounded-lg blur opacity-30"></div>
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            width={600}
                            height={400}
                            alt="DevFest Lyon Attendees"
                            className="relative rounded-lg object-cover shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)