import {motion} from "framer-motion";
import {Mic2} from "lucide-react";
import {SectionLayout} from "@/components/common/sectionLayout";

export const Cfp2026 = () => (
    <SectionLayout id="cfp" pill="Appel à conférences" title="Vous avez quelque chose à partager ?" theme="green">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="flex flex-col items-center gap-6 mt-8 max-w-xl"
                >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-google-green/10">
                        <Mic2 className="w-10 h-10 text-google-green" />
                    </div>
                    <p className="text-xl text-muted-foreground">
                        Le Call for Papers du DevFest Lyon 2026 ouvrira prochainement.
                        Les dates seront communiquées très bientôt restez connecté·e·s !
                    </p>
                </motion.div>
            </motion.div>
    </SectionLayout>
)
