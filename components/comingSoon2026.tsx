import Image from 'next/image';
import Logo from '@/assets/images/logo-devfest.svg';
import { Linkedin } from 'lucide-react';

export const ComingSoon2026 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-12 animate-in fade-in zoom-in duration-700">
          <Image src={Logo} alt="DevFest Lyon Logo" width={300} height={130} className="w-64 md:w-80" priority />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="gradient-text">DevFest Lyon 2026</span>
        </h1>

        <div className="space-y-6 mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">🚀 En préparation...</p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            La prochaine édition du DevFest Lyon se prépare ! Restez connectés pour ne rien manquer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://www.linkedin.com/company/devfest-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-6 h-6" />
            Suivez-nous sur LinkedIn
          </a>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">Envie de revivre l'édition 2025 ?</p>
          <a
            href="/2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            Voir l'édition 2025
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
