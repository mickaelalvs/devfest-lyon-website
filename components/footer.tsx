"use client";

import Link from "next/link";
import Image from "next/image";
import {Linkedin} from "lucide-react";
import { usePathname } from "next/navigation";

import Logo from '../assets/images/logo-devfest.svg';
import BlueskyIcon from '../assets/icons/bluesky.svg';

export const Footer = () => {
    const pathname = usePathname();
    const is2025 = pathname?.startsWith('/2025');
    const basePath = is2025 ? '/2025' : '';

    return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-4">
                    <Link href={is2025 ? "/2025" : "/"} className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="DevFest Lyon Logo"
                            width={50}
                            height={35}
                        />
                        <span
                            className="inline-block font-bold bg-clip-text text-primary">
                  DevFest Lyon
                </span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Des talks captivants au cœur de la Ville des Lumières ✨
                    </p>
                </div>
                <div className="space-y-4">
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Liens</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href={is2025 ? "/2025" : "/"} className="text-muted-foreground hover:text-primary transition-colors">
                                Accueil
                            </Link>
                        </li>
                        {is2025 && (
                            <>
                                <li>
                                    <Link href="/2025/schedule" className="text-muted-foreground hover:text-red transition-colors">
                                        Programme
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/2025/jobboard" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Job Board
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/2025/code-of-conduct"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Code de conduite
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Nos réseaux</h3>
                    <div className="flex space-x-2">
                        <Link href="https://www.linkedin.com/company/devfest-lyon" target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-green transition-colors flex items-end">
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://bsky.app/profile/devfestlyon.bsky.social"
                              target="_blank" rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-red transition-colors flex items-end">
                            <Image src={BlueskyIcon} alt="Bluesky icon" width={20} height={20}/>
                            <span className="sr-only">BlueskyIcon</span>
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Email:{" "}
                        <Link href="mailto:contact@gdglyon.com" className="hover:text-pink transition-colors">
                            contact@gdglyon.com
                        </Link>
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} DevFest Lyon. All rights reserved.</p>
            </div>
        </div>
    </footer>
    );
}