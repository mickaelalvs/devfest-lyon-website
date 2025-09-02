import Link from "next/link";
import Image from "next/image"
import Logo from "@/assets/images/logo-devfest.svg";


export const Header = () => (
    <header
        className="block sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-center">
            <div className="w-full flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="rounded-full p-1.5">
                        <Image
                            src={Logo}
                            alt="DevFest Lyon Logo"
                            width={80}
                            height={35}
                            className="max-[650px]:w-20 max-[650px]:h-10 max-[650px]:p-0"
                        />
                    </div>
                </Link>
                <nav className="flex gap-2">
                    <Link href="/"
                          className="text-s text-center font-medium transition-colors hover:text-red hover:bg-red/5 px-8 py-3 rounded-lg my-auto max-[650px]:px-2 max-[650px]:py-2 max-[650px]:text-xs">
                        Accueil
                    </Link>
                    <Link href="/schedule"
                          className="text-s text-center font-medium transition-colors hover:text-navy hover:bg-green/5 px-8 py-3 rounded-lg my-auto max-[650px]:px-2 max-[650px]:py-2 max-[650px]:text-xs">
                        Programme
                    </Link>
                    <Link href="code-of-conduct"
                          className="text-s text-center font-medium transition-colors hover:text-pink hover:bg-pink/5 px-8 py-3 rounded-lg my-auto max-[650px]:px-2 max-[650px]:py-2 max-[650px]:text-xs">
                        Code de conduite
                    </Link>
                </nav>
            </div>
        </div>
    </header>
);