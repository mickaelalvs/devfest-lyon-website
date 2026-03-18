import { SponsorJobs } from '@/types/jobboard';
import indy from '@/assets/images/sponsors/Indy.png';

export const indyJobs: SponsorJobs = {
  sponsorName: 'Indy',
  sponsorLogo: indy.src,
  sponsorWebsite: 'https://www.indy.fr/',
  jobs: [
    {
      id: 'indy-1',
      slug: 'indy-developpeur-fullstack-nodejs-vuejs',
      title: 'Développeur·euse Fullstack NodeJS & VueJS',
      company: 'Indy',
      location: 'Lyon',
      type: 'CDI',
      description:
        "Le·a pur·e développeur·euse fullstack n'existe pas, tu as sûrement une appétence plus ou moins forte pour le back ou le front mais tu aimes avoir cette vue d'ensemble sur l'ensemble de la chaîne de développement. C'est le cas pour nos 60 développeurs·euses répartis en différentes squads.",
      fullDescription:
        "Notre équipe :\n\nLe·a pur·e développeur·euse fullstack n'existe pas, tu as sûrement une appétence plus ou moins forte pour le back ou le front mais tu aimes avoir cette vue d'ensemble sur l'ensemble de la chaîne de développement.\n\nC'est le cas pour nos 60 développeurs·euses répartis en différentes squads. Tu arriveras dans une équipe fortement orientée sur la qualité et la lisibilité du code.\n\nToute l'équipe participe également à la vision et à la qualité du produit. Enfin, nous travaillons en mode agile, chaque squad s'organise comme elle veut soit en scrum soit en kanban. Avoir plusieurs mises en production par jour ne nous fait pas peur car l'intégration et le déploiement continu font partie intégrante de notre mode de fonctionnement.\n\nNous adorons avoir rapidement le retour de nos utilisateurs, ici tu verras directement le résultat ce ton travail car celui-ci aura un vrai impact.\n\nNos projets :\n\nNotre forte croissance nous entraîne aujourd'hui à travailler sur la scalabilité et la performance de notre application. Mais ce n'est pas tout ! Si tu aimes travailler sur des nouvelles fonctionnalités et des nouveaux projets alors tu es encore une fois bienvenu !\n\nChez nous, même s'il y a, un engineering manager par squad, chacun prend l'ownership sur son développement. Ce sera à toi de te responsabiliser pour développer le meilleur code possible et le plus lisible. Tu seras encouragé à proposer des nouvelles choses et des innovations.",
      responsibilities: [
        'Tu réalises des services en Node.js avec des API REST',
        "Tu participes à la définition de l'architecture technique d'une start-up en pleine croissance",
        'Tu crées des composants Vue.js pour la web app principale',
        'Tu travailles tant sur des produits existants pour les perfectionner que sur des nouveaux produits',
        "Tu participes à l'innovation et proposes des nouvelles méthodes, technologies",
        "Tu audites l'application et es force de proposition pour consolider la sécurité et la scalabilité",
      ],
      skills: ['NodeJS (Express & Fastify)', 'VueJS', 'MongoDB', 'Javascript / Typescript', 'Heroku', 'AWS', 'Github CI', 'Storybook'],
      applyUrl: 'https://www.welcometothejungle.com/fr/companies/indy/jobs/developpeur-euse-fullstack-nodejs-vuejs',
    },
    {
      id: 'indy-2',
      slug: 'indy-software-engineer-developer-experience',
      title: 'Software Engineer - Developer Experience (H/F)',
      company: 'Indy',
      location: 'Lyon',
      type: 'CDI',
      description:
        "En binôme avec David, Staff Engineer DevX, et directement rattaché au CTO, tu seras responsable de fluidifier et améliorer le quotidien de tous les développeur·euses d'Indy, en construisant et maintenant les outils qui soutiennent nos workflows.",
      fullDescription:
        "En binôme avec David, Staff Engineer DevX, et directement rattaché au CTO, tu seras responsable de fluidifier et améliorer le quotidien de tous les développeur·euses d'Indy, en construisant et maintenant les outils qui soutiennent nos workflows (outillage dev, CI/CD, plateformes cloud, monitoring…).\n\nTu seras directement responsable d'échanger avec les développeur·euses pour identifier leurs besoins et la meilleure manière d'y répondre.\n\nTu pourras compter sur la Guilde DevX qui rassemble des développeur·euses des différentes squads produit pour t'aider à diffuser les bonnes pratiques DevX dans les équipes, et pour accompagner les évolutions nécessaires de l'outillage.",
      responsibilities: [
        "Maintien de la plateforme interne : monitoring et alerting, ajout d'apps, suivi des coûts, gestion des prestataires, etc.",
        "Amélioration continue de l'expérience développeur·euse : outillage du monorepo (pnpm, nx, vite), CI/CD (GitHub Actions), suivi des dépendances, monitoring, performance des outils (ESLint, TS, etc.)",
        'Support transverse : sécurité, gestion des droits, gestion des secrets, incidents, accompagnement sur les sujets transverses comme la facturation électronique',
      ],
      skills: [
        'Heroku',
        'AWS',
        'Aiven',
        'Monorepo (pnpm, nx, vite)',
        'CI/CD (GitHub Actions)',
        'ESLint',
        'TypeScript',
        'Monitoring et alerting',
      ],
      additionalInfo:
        'Tu travailleras sur un environnement pragmatique et sans "usine à gaz" : ici pas de Kubernetes ou d\'Infra as Code complexe. Nous utilisons des solutions simples et efficaces (Heroku, AWS, Aiven, etc.).\n\nExemples de projets à ton arrivée :\n\n• Optimiser la performance des environnements de développement (ex. temps de lint/build/CI)\n• Accompagner le déploiement de la réforme de facturation électronique (Factur-X, PDP…)\n\nKPIs & indicateurs de succès :\n\n• Satisfaction des développeur·euses (via feedback Slack, sondage, etc.)\n• Performance de la CI/CD, des outils dev, et du time-to-prod\n• Maîtrise des coûts liés aux plateformes et outillages',
      applyUrl: 'https://www.welcometothejungle.com/fr/companies/indy/jobs/devx-h-f_lyon',
    },
  ],
};
