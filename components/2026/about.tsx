import { motion } from 'framer-motion';
import { Calendar, Handshake, Mic2, Users } from 'lucide-react';
import { SectionLayout } from '@/components/common/sectionLayout';

export const About2026 = () => (
  <SectionLayout id="about" pill="C'est quoi cet événement ?" title="À propos de DevFest Lyon" theme="blue">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-muted-foreground md:text-xl pt-4">
          Organisée par l'association DevFest Lyon et portée par le Google Developer Group (GDG) Lyonnais, la deuxième édition du DevFest
          Lyon revient pour une nouvelle journée de partage et d'échanges autour de thématiques techniques dans la région lyonnaise.
        </p>
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-foreground pb-4">À quoi s'attendre ?</h3>
          <ul className="ml-0 sm:ml-6 space-y-4 text-muted-foreground text-xl">
            <li className="flex justify-center align-middle gap-2">
              <Users className="h-6 w-6 text-google-red" />
              <span>400 personnes intéressées par les technologies et défis de demain</span>
            </li>
            <li className="flex justify-center align-middle gap-2">
              <Calendar className="h-6 w-6 text-google-blue" />
              <span>Une journée entière de conférences</span>
            </li>
            <li className="flex justify-center align-middle gap-2">
              <Mic2 className="h-6 w-6 text-google-green" />
              <span>Des talks techniques d'expert·e·s</span>
            </li>
            <li className="flex justify-center align-middle gap-2">
              <Handshake className="h-6 w-6 text-google-yellow" />
              <span>Du partage avec des passionné·e·s de la tech</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </SectionLayout>
);
