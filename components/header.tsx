import Link from "next/link";
import Image from "next/image"
import Logo from "@/assets/images/logo-devfest.svg";


export const Header = () => (
    <header
        className="hidden min-[1400px]:block sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-center space-x-4">
            <div className="flex gap-6 md:gap-10 items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="rounded-full p-1.5">
                        <Image
                            src={Logo}
                            alt="DevFest Lyon Logo"
                            width={80}
                            height={35}
                        />
                    </div>
                </Link>
                <nav className="flex gap-2">
                    <Link href="#first-edition"
                          className="text-s text-center font-medium transition-colors hover:text-red hover:bg-red/5 px-8 py-3 rounded-lg">
                        Première édition
                    </Link>
                    <Link href="#about"
                          className="text-s text-center font-medium transition-colors hover:text-navy hover:bg-navy/5 px-8 py-3 rounded-lg">
                        DevFest Lyon
                    </Link>
                    <Link href="#sponsoring"
                          className="text-s text-center font-medium transition-colors hover:text-green hover:bg-green/5 px-8 py-3 rounded-lg">
                        Sponsoring
                    </Link>
                    <Link href="#call-for-papers"
                          className="text-s text-center font-medium transition-colors hover:text-navy hover:bg-green/5 px-8 py-3 rounded-lg">
                        CFP
                    </Link>
                    <Link href="#team"
                          className="text-s text-center font-medium transition-colors hover:text-yellow hover:bg-yellow/5 px-8 py-3 rounded-lg">
                        Équipe
                    </Link>
                    <Link href="#billetterie"
                          className="text-s text-center font-medium transition-colors hover:text-pink hover:bg-yellow/5 px-8 py-3 rounded-lg">
                        Billetterie
                    </Link>
                    <Link href="code-of-conduct"
                          className="text-s text-center font-medium transition-colors hover:text-pink hover:bg-pink/5 px-8 py-3 rounded-lg">
                        Code de conduite
                    </Link>
                </nav>
            </div>
        </div>
    </header>
);