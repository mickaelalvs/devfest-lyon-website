"use client";

import { Button } from "@/components/ui/button";
import {
    Calendar,
    Users,
    Building2,
    ChevronRight,
    MapPin,
    Clock,
    ArrowRight,
    Youtube,
    Github,
    Linkedin,
    Twitter, Badge
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
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
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-yellow/20 rounded-full blur-3xl"
                    />

                    <div className="flex flex-col items-center space-y-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-2"
                        >
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-green to-yellow blur-xl opacity-30 rounded-full"></div>
                                <Image
                                    src="/placeholder.svg?height=120&width=240"
                                    alt="DevFest Lyon Logo"
                                    width={240}
                                    height={120}
                                    className="mx-auto relative"
                                />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-green to-yellow">
                                DevFest Lyon 2025
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Join the biggest developer conference in Lyon for a day of learning, networking, and fun.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-6"
                        >
                            <Button size="lg" className="bg-primary hover:bg-primary/90 group" asChild>
                                <Link href="#register">
                                    Register Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-green text-green hover:bg-green/10" asChild>
                                <Link href="#about">Learn More</Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center justify-center space-x-4 mt-8"
                        >
                            <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Calendar className="h-5 w-5 text-red" />
                                <span className="text-foreground">April 15, 2025</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                <MapPin className="h-5 w-5 text-yellow" />
                                <span className="text-foreground">Lyon, France</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* First Edition Section */}
            <section id="first-edition" className="w-full py-12 md:py-24 lg:py-32 bg-yellow/5">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                    >
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-red/10 px-3 py-1 text-sm text-red">Looking Back</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red to-yellow">
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

            {/* About Section */}
            {/* About Section */}
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-green">
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

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-[#527CBE]/10 via-[#32A953]/10 to-[#F8AB09]/10" id="team">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-green/10 px-3 py-1 text-sm text-green">Our Amazing Team</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green to-yellow">
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

            {/* Partners Section */}
            <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-pink/5">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm text-yellow">Our Supporters</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow to-red">
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
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow/10 to-red/10 backdrop-blur-sm"></div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">Become a Sponsor</h3>
                                    <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
                                        Interested in sponsoring DevFest Lyon? Get visibility for your brand and connect with top
                                        developers.
                                    </p>
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-yellow to-red hover:opacity-90 text-white border-0"
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

            {/* Register Section */}
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
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-pink/10 px-3 py-1 text-sm text-pink">
                                    Limited Spots Available
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red to-pink">
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

            {/* Footer */}
            <footer className="w-full border-t bg-background py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="bg-primary rounded-full p-1.5">
                                    <Image
                                        src="/placeholder.svg?height=32&width=32"
                                        alt="DevFest Lyon Logo"
                                        width={32}
                                        height={32}
                                        className="h-6 w-6"
                                    />
                                </div>
                                <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink">
                  DevFest Lyon
                </span>
                            </Link>
                            <p className="text-sm text-muted-foreground">
                                The biggest developer conference in Lyon, organized by the GDG Lyon community.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#first-edition" className="text-muted-foreground hover:text-red transition-colors">
                                        First Edition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#team" className="text-muted-foreground hover:text-green transition-colors">
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#partners" className="text-muted-foreground hover:text-yellow transition-colors">
                                        Partners
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#register" className="text-muted-foreground hover:text-red transition-colors">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Legal</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#code-of-conduct"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Code of Conduct
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Connect</h3>
                            <div className="flex space-x-4">
                                <Link href="#twitter" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#linkedin" className="text-muted-foreground hover:text-green transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="#github" className="text-muted-foreground hover:text-yellow transition-colors">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="#youtube" className="text-muted-foreground hover:text-red transition-colors">
                                    <Youtube className="h-5 w-5" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Email:{" "}
                                <Link href="mailto:contact@devfestlyon.com" className="hover:text-pink transition-colors">
                                    contact@devfestlyon.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} DevFest Lyon. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}