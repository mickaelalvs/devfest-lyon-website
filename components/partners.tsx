import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { goldSponsors } from '@/data/sponsors/gold';
import { silverSponsors } from '@/data/sponsors/silver';
import { meetAndGreetSponsors } from '@/data/sponsors/meetAndGreet';

import Google from '@/assets/images/sponsors/google.webp';

export const Partners = () => (
  <section id="partners" className="w-full px-10 py-12 md:py-24 lg:py-32 bg-yellow/5">
    <div className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div className="space-y-2 flex flex-col items-center justify-center gap-2">
          <div className="inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm text-yellow">Ils soutiennent l'événement</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow">Nos sponsors</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Merci à nos sponsors qui rendent possible le DevFest Lyon.
          </p>
        </div>
        <div className="space-y-10 mt-8 w-full pt-15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-5xl font-bold text-foreground pb-6">
              Sponsors <span className="uppercase font-black text-yellow-400">Gold</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goldSponsors.map((sponsor, i) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 py-10 bg-background rounded-xl shadow-lg border border-muted/20 hover:border-primary/20 transition-colors"
                >
                  <motion.div key={i} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={300} height={200} className="max-h-20 object-contain" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mt-15"
          >
            <h3 className="text-4xl font-bold text-foreground pb-6">
              Sponsors <span className="uppercase font-black text-gray-500">Silver</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {silverSponsors.map((sponsor, i) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-10 bg-background rounded-xl shadow-md border border-muted/20 hover:border-yellow/20 transition-colors"
                >
                  <motion.div key={i} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={150} height={50} className="max-h-20 !h-auto max-w-180" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mt-15"
          >
            <h3 className="text-4xl font-bold text-foreground pb-6">
              Sponsor <span className="uppercase font-black text-lime-600">Meet & Greet</span>
            </h3>
            <div className="flex items-center justify-center">
              {meetAndGreetSponsors.map((sponsor, i) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-10 bg-background rounded-xl shadow-md border border-muted/20 hover:border-yellow/20 transition-colors"
                >
                  <motion.div key={i} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={250} height={50} className="max-h-25 !h-auto" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mt-15"
          >
            <h3 className="text-4xl font-bold text-foreground pb-6">
              Nos<span className="uppercase font-black text-pink"> partenaires</span>
            </h3>
            <div className="flex items-center justify-center">
              <Link
                key="Google"
                href="https://developers.google.com/community/devfest?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-10 bg-background rounded-xl shadow-md border border-muted/20 hover:border-yellow/20 transition-colors"
              >
                <motion.div key="Google" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <Image src={Google} alt="Google logo" width={250} height={50} className="max-h-25 !h-auto" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
