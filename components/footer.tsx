import Link from "next/link";
import Image from "next/image";
import {Linkedin, Twitter} from "lucide-react";

import Logo from '../assets/images/logo-devfest.svg';

export const Footer = () => (
    <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="DevFest Lyon Logo"
                            width={50}
                            height={35}
                        />
                        <span
                            className="inline-block font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-pink">
                  DevFest Lyon
                </span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Des talks captivants au cœur de la Ville des Lumières ✨
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
                            <Link href="#first-edition"
                                  className="text-muted-foreground hover:text-red transition-colors">
                                First Edition
                            </Link>
                        </li>
                        <li>
                            <Link href="#team" className="text-muted-foreground hover:text-green transition-colors">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href="#partners"
                                  className="text-muted-foreground hover:text-yellow transition-colors">
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
                            <Link href="#privacy"
                                  className="text-muted-foreground hover:text-foreground transition-colors">
                                Politique de confidentialité
                            </Link>
                        </li>
                        <li>
                            <Link href="#terms"
                                  className="text-muted-foreground hover:text-foreground transition-colors">
                                Conditions d'utilisation
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#code-of-conduct"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Code de conduite
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Connect</h3>
                    <div className="flex space-x-4">
                        <Link href="https://www.linkedin.com/company/devfest-lyon" className="text-muted-foreground hover:text-green transition-colors">
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://x.com/devfestlyon" className="text-muted-foreground hover:text-red transition-colors">
                            <Twitter className="h-5 w-5"/>
                            <span className="sr-only">X</span>
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
)