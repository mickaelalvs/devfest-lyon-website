import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo-devfest.svg';
import { useState, useEffect, Fragment } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const is2025 = pathname?.startsWith('/2025');

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Nettoyer l'effet au démontage du composant
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Fragment>
      <header className="block sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
        <div className="container flex h-16 items-center justify-center max-w-full">
          <div className="w-full flex items-center justify-between min-w-0">
            <Link href={is2025 ? '/2025' : '/'} className="flex items-center space-x-2">
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

            {/* Desktop Navigation */}
            {is2025 && (
              <nav className="hidden md:flex gap-2 flex-shrink-0">
                <a
                  href="/2025#partners"
                  className="text-s text-center font-medium transition-colors hover:text-red hover:bg-red/5 px-8 py-3 rounded-lg my-auto"
                >
                  Nos sponsors
                </a>
                <Link
                  href="/2025/schedule"
                  className="text-s text-center font-medium transition-colors hover:text-navy hover:bg-green/5 px-8 py-3 rounded-lg my-auto"
                >
                  Programme
                </Link>
                <Link
                  href="/2025/jobboard"
                  className="text-s text-center font-medium transition-colors hover:text-yellow hover:bg-yellow/5 px-8 py-3 rounded-lg my-auto"
                >
                  Job Board
                </Link>
                <Link
                  href="/2025/code-of-conduct"
                  className="text-s text-center font-medium transition-colors hover:text-pink hover:bg-pink/5 px-8 py-3 rounded-lg my-auto"
                >
                  Code de conduite
                </Link>
              </nav>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-[9999]">
          {/* Header visible dans le menu */}
          <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-center">
              <div className="w-full flex items-center justify-between">
                <Link href={is2025 ? '/2025' : '/'} className="flex items-center space-x-2" onClick={closeMenu}>
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

                {/* Bouton fermer (croix) */}
                <button onClick={closeMenu} className="flex items-center justify-center w-8 h-8" aria-label="Fermer le menu">
                  <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground transform -translate-y-1/2 rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground transform -translate-y-1/2 -rotate-45"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation centrée */}
          {is2025 && (
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8">
              <a
                href="/2025#partners"
                onClick={closeMenu}
                className="text-2xl text-center font-medium transition-colors hover:text-red hover:bg-red/5 px-8 py-6 rounded-lg"
              >
                Nos sponsors
              </a>
              <Link
                href="/2025/schedule"
                onClick={closeMenu}
                className="text-2xl text-center font-medium transition-colors hover:text-navy hover:bg-green/5 px-8 py-6 rounded-lg"
              >
                Programme
              </Link>
              <Link
                href="/2025/jobboard"
                onClick={closeMenu}
                className="text-2xl text-center font-medium transition-colors hover:text-yellow hover:bg-yellow/5 px-8 py-6 rounded-lg"
              >
                Job Board
              </Link>
              <Link
                href="/2025/code-of-conduct"
                onClick={closeMenu}
                className="text-2xl text-center font-medium transition-colors hover:text-pink hover:bg-pink/5 px-8 py-6 rounded-lg"
              >
                Code de conduite
              </Link>
            </nav>
          )}
        </div>
      )}
    </Fragment>
  );
};
