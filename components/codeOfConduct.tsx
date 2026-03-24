import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface CodeOfConductProps {
  backUrl?: string;
}

export const CodeOfConduct = ({ backUrl = '/' }: CodeOfConductProps) => (
  <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
      <Link href={backUrl} className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 text-xl">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à l&apos;accueil
      </Link>

      <div className="space-y-2 pt-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Code de conduite</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-navy rounded-full"></div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-12"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Notre engagement</h2>
        <p className="text-muted-foreground leading-relaxed">
          En tant que membres, contributeur·trice·s et dirigeant·e·s, nous nous engageons à faire de la participation à notre communauté une
          expérience sans harcèlement, quel que soit l&apos;âge, la taille corporelle, le handicap visible ou invisible, l&apos;appartenance
          ethnique, les caractéristiques sexuelles, l&apos;identité et l&apos;expression de genre, le niveau d&apos;expérience,
          l&apos;éducation, le statut socio-économique, la nationalité, l&apos;apparence personnelle, la race, la religion, ou
          l&apos;identité et l&apos;orientation sexuelle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Nous nous engageons à agir et interagir de manière à contribuer à une communauté ouverte, accueillante, diversifiée, inclusive et
          saine.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Nos critères</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Exemples de comportements qui contribuent à créer un environnement positif :</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Faire preuve d&apos;empathie et de bienveillance envers les autres</li>
              <li>Être respectueux des opinions, points de vue et expériences divergents</li>
              <li>Donner et recevoir avec grâce les critiques constructives</li>
              <li>
                Assumer ses responsabilités et s&apos;excuser auprès des personnes affectées par nos erreurs et apprendre de ces expériences
              </li>
              <li>
                Se concentrer sur ce qui est le meilleur non pas uniquement pour nous en tant qu&apos;individu, mais aussi pour
                l&apos;ensemble de la communauté
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Exemples de comportements inacceptables :</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                L&apos;utilisation de langage ou d&apos;images sexualisés et d&apos;attentions ou d&apos;avances sexuelles de toute nature
              </li>
              <li>Le trolling, les commentaires insultants ou désobligeants et les attaques personnelles ou d&apos;ordre politique</li>
              <li>Le harcèlement en public ou en privé</li>
              <li>
                La publication d&apos;informations privées d&apos;autrui, telle qu&apos;une adresse postale ou une adresse électronique,
                sans leur autorisation explicite
              </li>
              <li>Toute autre conduite qui pourrait raisonnablement être considérée comme inappropriée dans un cadre professionnel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Responsabilités d&apos;application</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les dirigeant·e·s de la communauté sont chargé·e·s de clarifier et de faire respecter nos normes de comportements acceptables et
          prendront des mesures correctives appropriées et équitables en réponse à tout comportement qu&apos;ils ou elles jugent
          inapproprié, menaçant, offensant ou nuisible.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les dirigeant·e·s de la communauté ont le droit et la responsabilité de supprimer, modifier ou rejeter les commentaires, les
          contributions, le code, les modifications de wikis, les rapports d&apos;incidents ou de bogues et autres contributions qui ne sont
          pas alignés sur ce code de conduite, et communiqueront les raisons des décisions de modération lorsque cela est approprié.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Portée</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ce code de conduite s&apos;applique à tous les espaces communautaires de DevFest Lyon, et s&apos;applique également lorsqu&apos;un
          individu représente officiellement la communauté dans les espaces publics. Les exemples de représentation de notre communauté
          incluent l&apos;utilisation d&apos;une adresse e-mail officielle, la publication via un compte de réseau social officiel ou
          l&apos;intervention en tant que représentant·e désigné·e lors d&apos;un événement en ligne ou hors-ligne.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Application</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les cas de comportements abusifs, harcelants ou tout autre comportement inacceptable peuvent être signalés aux dirigeant·e·s de la
          communauté responsables de l&apos;application du code de conduite à <span className="text-primary">contact@gdglyon.com</span>.
          Toutes les plaintes seront examinées et feront l&apos;objet d&apos;une enquête rapide et équitable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Tous les dirigeant·e·s de la communauté sont tenus de respecter la vie privée et la sécurité des personnes ayant signalé un
          incident.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Directives d&apos;application</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les dirigeant·e·s de communauté suivront ces directives d&apos;application sur l&apos;impact communautaire afin de déterminer les
          conséquences de toute action qu&apos;ils jugent contraire au présent code de conduite :
        </p>

        <div className="space-y-6 mt-4">
          <div className="bg-background rounded-lg border p-4">
            <h3 className="font-bold text-lg mb-2">1. Correction</h3>
            <p className="text-muted-foreground">
              <strong>Impact communautaire</strong> : Utilisation de langage inapproprié ou tout autre comportement jugé non professionnel
              ou indésirable dans la communauté.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Conséquence</strong> : Un avertissement écrit et privé de la part des dirigeant·e·s de la communauté, clarifiant la
              nature de la violation et expliquant pourquoi le comportement était inapproprié. Des excuses publiques peuvent être demandées.
            </p>
          </div>

          <div className="bg-background rounded-lg border p-4">
            <h3 className="font-bold text-lg mb-2">2. Avertissement</h3>
            <p className="text-muted-foreground">
              <strong>Impact communautaire</strong> : Une violation par un seul incident ou une série d&apos;actions.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Conséquence</strong> : Avertissement avec conséquences pour le comportement continu. Aucune interaction avec les
              personnes concernées, y compris l&apos;interaction non sollicitée avec ceux et celles qui sont chargé·e·s de
              l&apos;application de ce code de conduite, pendant une période déterminée. Cela comprend l&apos;évitement des interactions
              dans les espaces communautaires ainsi que sur les canaux externes comme les médias sociaux. Le non-respect de ces conditions
              peut conduire à un bannissement temporaire ou permanent.
            </p>
          </div>

          <div className="bg-background rounded-lg border p-4">
            <h3 className="font-bold text-lg mb-2">3. Bannissement temporaire</h3>
            <p className="text-muted-foreground">
              <strong>Impact communautaire</strong> : Une violation grave des normes communautaires, notamment un comportement inapproprié
              soutenu.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Conséquence</strong> : Bannissement temporaire de toute interaction ou communication avec la communauté pendant une
              période déterminée. Aucune interaction publique ou privée avec les personnes concernées, y compris les interactions non
              sollicitées avec celles et ceux qui appliquent ce code de conduite, n&apos;est autorisée pendant cette période. Le non-respect
              de ces conditions peut conduire à un bannissement permanent.
            </p>
          </div>

          <div className="bg-background rounded-lg border p-4">
            <h3 className="font-bold text-lg mb-2">4. Bannissement permanent</h3>
            <p className="text-muted-foreground">
              <strong>Impact communautaire</strong> : Démontrer un schéma récurrent de violation des normes de la communauté, y compris un
              comportement inapproprié soutenu, le harcèlement d&apos;un individu, ou l&apos;agression ou le dénigrement de catégories
              d&apos;individus.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Conséquence</strong> : Bannissement permanent de toute interaction publique au sein de la communauté.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Attribution</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ce code de conduite est adapté du{' '}
          <a href="https://www.contributor-covenant.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Contributor Covenant
          </a>
          , version 2.0, disponible à{' '}
          <a
            href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
          </a>
          .
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il est également adapté de celui défini par l'association{' '}
          <a href="https://www.lyonjs.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            LyonJS 🦁
          </a>{' '}
          et{' '}
          <a href="https://nantesjs.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            NantesJS 🙏🏼
          </a>
          .
        </p>
      </section>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
      <Link href={backUrl} className="inline-flex items-center text-xl text-muted-foreground hover:text-primary transition-colors mt-18">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à l&apos;accueil
      </Link>
    </motion.div>
  </div>
);
