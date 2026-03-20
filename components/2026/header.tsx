"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo-devfest.svg";
import {useState, useEffect, Fragment} from "react";

export const Header2026 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        {href: "#about", label: "À propos", className: "hover:text-google-blue hover:bg-google-blue/5"},
        {href: "#sponsoring", label: "Devenir sponsor", className: "hover:text-google-yellow hover:bg-google-yellow/5"},
        {href: "#cfp", label: "Appel à conférences", className: "hover:text-google-green hover:bg-google-green/5"},
        {href: "/code-of-conduct", label: "Code de conduite", className: "hover:text-google-red hover:bg-google-red/5"},
    ];

    return (
        <Fragment>
            <header className="block fixed top-0 z-40 w-full border-b transition-colors duration-300 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 overflow-hidden">
                <div className="container flex h-16 items-center justify-center max-w-full">
                    <div className="w-full flex items-center justify-between min-w-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="rounded-full p-1.5">
                                <Image src={Logo} alt="DevFest Lyon Logo" width={80} height={35} className="max-[650px]:w-20 max-[650px]:h-10 max-[650px]:p-0" />
                            </div>
                        </Link>

                        <nav className="hidden md:flex gap-2 shrink-0">
                            {navLinks.map(({href, label, className}) => (
                                <a key={href} href={href} className={`text-s text-center font-medium transition-colors px-8 py-3 rounded-lg my-auto ${className}`}>
                                    {label}
                                </a>
                            ))}
                        </nav>

                        <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 shrink-0" aria-label="Toggle menu">
                            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-9999">
                    <div className="w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                        <div className="container flex h-16 items-center justify-center">
                            <div className="w-full flex items-center justify-between">
                                <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
                                    <div className="rounded-full p-1.5">
                                        <Image src={Logo} alt="DevFest Lyon Logo" width={80} height={35} className="max-[650px]:w-20 max-[650px]:h-10 max-[650px]:p-0" />
                                    </div>
                                </Link>
                                <button onClick={closeMenu} className="flex items-center justify-center w-8 h-8" aria-label="Fermer le menu">
                                    <div className="relative w-6 h-6">
                                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground transform -translate-y-1/2 rotate-45"></span>
                                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground transform -translate-y-1/2 -rotate-45"></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8">
                        {navLinks.map(({href, label, className}) => (
                            <a key={href} href={href} onClick={closeMenu} className={`text-2xl text-center font-medium transition-colors px-8 py-6 rounded-lg ${className}`}>
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </Fragment>
    );
};
