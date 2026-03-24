import { SponsorJobs } from '@/types/jobboard';
import peaks from '@/assets/images/sponsors/Peaks.webp';

export const peaksJobs: SponsorJobs = {
  sponsorName: 'Peaks',
  sponsorLogo: peaks.src,
  sponsorWebsite: 'https://peaks.fr/',
  jobs: [
    {
      id: 'peaks-1',
      slug: 'peaks-developpeur-node-react',
      title: 'Développeur·euse Node - React H/F',
      company: 'Peaks',
      description:
        "Peaks est un partenaire conseil spécialisé dans la création de solutions numériques innovantes. Nous cherchons aujourd'hui un·e développeur·euse Node / React pour rejoindre notre équipe JavaScript.",
      fullDescription:
        "Peaks est un partenaire conseil spécialisé dans la création de solutions numériques innovantes. Organisés en communautés techniques, nous partageons notre curiosité, nos savoirs et notre passion pour la tech. Chaque consultant·e choisit ses missions selon ses compétences et ses aspirations, avec des parcours sur-mesure et des opportunités de formation continue pour progresser techniquement et professionnellement.\n\nNous cherchons aujourd'hui un·e développeur·euse Node / React pour rejoindre notre équipe JavaScript. Vous jouerez un rôle clé dans le développement d'une nouvelle solution innovante de cybersécurité en mode SaaS. C'est une opportunité unique de participer à toutes les étapes du projet, de la conception au développement, et de façonner un produit en pleine émergence.\n\nSi vous êtes passionné·e par l'innovation, que vous aimez relever des défis, venez nous rencontrer et découvrez Peaks !",
      applyUrl: 'https://www.hellowork.com/fr-fr/emplois/72250868.html',
    },
    {
      id: 'peaks-2',
      slug: 'peaks-consultant-developpeur-java',
      title: 'Consultant·e Développeur·euse - Lead - Architecte Java H/F',
      company: 'Peaks',
      description:
        'Peaks est un partenaire conseil spécialisé dans la création de solutions numériques innovantes. Nous recherchons des développeur·euses et ingénieur·e·s Java pour intervenir sur des projets variés et stimulants.',
      fullDescription:
        "Peaks est un partenaire conseil spécialisé dans la création de solutions numériques innovantes. Organisés en communautés techniques, nous partageons notre curiosité, nos savoirs et notre passion pour la tech. Chaque consultant·e choisit ses missions selon ses compétences et ses aspirations, avec des parcours sur-mesure et des opportunités de formation continue pour progresser techniquement et professionnellement.\n\nNous recherchons des développeur·euses et ingénieur·e·s Java pour intervenir sur des projets variés et stimulants. Vous évoluerez dans des environnements modernes et collaboratifs, en interaction avec les équipes produit, DevOps, QA et architecture, et aurez l'opportunité de contribuer à des projets concrets et à fort impact.\n\nSi vous aimez relever des défis techniques, apprendre et rejoindre une communauté de passionné·e·s, venez découvrir Peaks !",
      responsibilities: [
        'Création de microservices',
        "Refonte d'applications critiques",
        'Développement de plateformes web, mobiles, cloud-native ou back-end',
      ],
      applyUrl: 'https://www.hellowork.com/fr-fr/emplois/65024790.html',
    },
  ],
};
