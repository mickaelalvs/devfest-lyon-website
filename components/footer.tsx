import Link from "next/link";
import Image from "next/image";
import {Github, Linkedin, Twitter, Youtube} from "lucide-react";

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
                            className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink">
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
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#terms"
                                  className="text-muted-foreground hover:text-foreground transition-colors">
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
                            <Twitter className="h-5 w-5"/>
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#linkedin" className="text-muted-foreground hover:text-green transition-colors">
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#github" className="text-muted-foreground hover:text-yellow transition-colors">
                            <Github className="h-5 w-5"/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="#youtube" className="text-muted-foreground hover:text-red transition-colors">
                            <Youtube className="h-5 w-5"/>
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
)