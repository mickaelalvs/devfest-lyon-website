import {motion} from "framer-motion";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Partners = () => (
    <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-pink/5">
        <div className="container px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2 flex flex-col items-center justify-center gap-2">
                    <div className="inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm text-yellow">Our Supporters</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow">
                        Our Partners
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Thanks to our amazing sponsors who make DevFest Lyon possible.
                    </p>
                </div>
                <div className="space-y-10 mt-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-foreground">Platinum Sponsors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="flex items-center justify-center p-6 bg-background rounded-xl shadow-lg border border-muted/20 hover:border-primary/20 transition-colors"
                                >
                                    <Image
                                        src={`/placeholder.svg?height=80&width=200&text=Sponsor+${i + 1}`}
                                        alt={`Platinum Sponsor ${i + 1}`}
                                        width={200}
                                        height={80}
                                        className="max-h-20"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-foreground">Gold Sponsors</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="flex items-center justify-center p-4 bg-background rounded-xl shadow-md border border-muted/20 hover:border-yellow/20 transition-colors"
                                >
                                    <Image
                                        src={`/placeholder.svg?height=60&width=150&text=Sponsor+${i + 4}`}
                                        alt={`Gold Sponsor ${i + 1}`}
                                        width={150}
                                        height={60}
                                        className="max-h-16"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="relative p-8 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-yellow/10 to-red/10 backdrop-blur-xs"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Become a Sponsor</h3>
                            <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
                                Interested in sponsoring DevFest Lyon? Get visibility for your brand and connect with top
                                developers.
                            </p>
                            <Button
                                size="lg"
                                className="bg-linear-to-r from-yellow to-red hover:opacity-90 text-white border-0"
                                asChild
                            >
                                <Link href="#sponsor">Sponsorship Packages</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
)