import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLayout } from '@/components/common/sectionLayout';

export const Register2026 = () => (
  <SectionLayout id="billetterie" pill="Billetterie" title="S'inscrire au DevFest Lyon 2026" theme="red">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center align-middle space-y-4"
      >
        <p className="max-w-150 text-muted-foreground md:text-xl">
          La billetterie ouvrira prochainement. Suivez-nous sur LinkedIn pour être informé·e de l'ouverture des inscriptions !
        </p>
        <div className="flex items-center justify-center mt-8">
          <Button size="lg" className="bg-google-red hover:bg-google-red/90 group font-semibold" asChild>
            <Link href="https://www.linkedin.com/company/devfest-lyon" target="_blank" rel="noopener noreferrer">
              Suivez-nous sur LinkedIn
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </SectionLayout>
);
