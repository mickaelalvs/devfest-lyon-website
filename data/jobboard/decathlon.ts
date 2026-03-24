import { SponsorJobs } from '@/types/jobboard';
import decathlon from '@/assets/images/sponsors/Decathlon.svg';

export const decathlonJobs: SponsorJobs = {
  sponsorName: 'Decathlon',
  sponsorLogo: decathlon.src,
  sponsorWebsite: 'https://digital.decathlon.net/',
  jobs: [
    {
      id: 'decathlon-1',
      slug: 'decathlon-chef-projet-embarque',
      title: 'Chef de Projet Embarqué',
      company: 'Decathlon',
      description:
        'Nous recherchons un profil chef de projet embarqué confirmé, capable de piloter plusieurs projets dans une organisation matricielle pour développer des logiciels embarqués pour des composants électroniques intégrés dans divers produits sportifs.',
      fullDescription:
        "Et si la Tech nous permettait de réinventer le sport de demain et de devenir la plus grande plateforme numérique sportive ? C'est l'objectif que nous nous fixons chez Decathlon.\n\n\"Rendre durablement les plaisirs et les bienfaits du sport accessibles au plus grand nombre\" est notre mission depuis toujours. Une vocation qui atteint aujourd'hui son paroxysme en augmentant l'expérience du sport par les technologies et en répondant aux besoins de nos 500 millions d'utilisateurs à travers le monde.\n\nDECATHLON accélère sa transformation digitale avec la mise en place d'une solution IOT qui permettra de faire vivre à nos sportifs de nouvelles expériences enrichies créées par nos marques et Sports Signés.\n\nL'équipe Connected Sports Platform a été créée pour répondre à ces enjeux. Celle-ci s'occupe de l'ensemble de la stack technique allant du cloud à l'embarqué en passant par le mobile fournissant une solution complète à nos utilisateurs.\n\nSur la partie embarquée, nous sommes polyvalents et participons du design hardware jusqu'au développement des couches logicielles et protocolaires. Le tout est réalisé avec un accent fort sur la qualité et la cybersécurité.\n\nLes projets consistent à développer des logiciels embarqués pour des composants électroniques intégrés dans divers produits sportifs (vélos électriques, appareils de fitness, cible de fléchette, etc …), afin d'y apporter des fonctions de connectivité. Ces produits représentent des volumes annuels de 10 000 à 100 000 unités, pour un chiffre d'affaires total d'environ 200 M€.",
      responsibilities: [
        'Piloter plusieurs projets dans une organisation matricielle',
        "Travailler directement avec plusieurs équipes projets Decathlon, composées de 2 à 6 talents spécialisés dans l'embarqué (Architecte, Tech Lead, Développeur·euses logiciel, QA/QE, DevSecOps)",
        'Collaborer avec des fournisseurs dans le cadre de projets délégués',
        'Être responsable de la bonne livraison des projets, en toute autonomie',
        'Prendre les décisions nécessaires pour garantir la qualité, le respect des coûts, les délais et les fonctionnalités demandées',
      ],
      skills: [
        'Microcontrôleurs : ESP32, STM32',
        "Système d'exploitation : FreeRTOS",
        'Technologies Embarquées/Radio : CAN, BLE, GPRS, UMTS, LTE-M, WIFI',
        'Intégration et Déploiement Continus (CI/CD)',
        'Outils de Développement : GitHub, SonarCloud, BlackDuck',
        'Contexte DevSecOps : Approche "you build it, you run it"',
        'Méthodologie : Agilité au cœur du processus de création logicielle',
        'Outils Collaboratifs : Confluence, Jira, Miro, gSuite',
      ],
      requirements: [
        "Maîtrise approfondie du cycle de développement en V, couvrant l'intégralité d'un projet industriel à forte composante électronique : depuis l'avant-projet, le cadrage, le prototypage, les phases de développement, la mise en production, jusqu'aux phases de run",
        'Connaissance solide des outils et pratiques de gestion de projet : WBS pour le cadrage, diagrammes de Gantt pour la planification, gestion des coûts, de la qualité, des risques, de la communication et des parties prenantes',
        'Grande autonomie et connaissance des cycles de développement Agile',
        'Solides compétences relationnelles',
        'Compétences techniques : connaissance des systèmes embarqués temps réel sur microcontrôleurs (MCU) et des protocoles de communication spécifiques, en particulier le BLE',
        "Maîtrise du français et de l'anglais. La maîtrise du chinois est un atout",
        'Certification en gestion de projet (ex: PMI-PMP) est un plus',
      ],
      benefits: [
        '2 jours de télétravail par semaine',
        "Possibilité de travailler dans l'un des bureaux de Decathlon Digital à Lille, Paris",
        'Matériel fourni en accord avec tes missions et nos engagements sociétaux (Mac, Windows, ou Chromebooks)',
        "Une équipe de projet locale au sein d'un réseau mondial (possibilité de carrière internationale)",
        'Développement des compétences et accompagnement (diversité des projets, certifications techniques dès la première année, formations internes et externes, etc.)',
        "Package de rémunération (participation des employés aux actions de l'entreprise, bonus mensuels/trimestriels)",
      ],
      remote: '2 jours de télétravail par semaine',
      location: 'Lille ou Paris',
      contactEmail: 'ludovic.lemarchand@decathlon.com',
      applyUrl: 'https://digital.decathlon.net/carrieres',
    },
    {
      id: 'decathlon-2',
      slug: 'decathlon-network-engineer',
      title: 'Network Engineer / Network DevOps / Cloud Network Specialist',
      company: 'Decathlon',
      description:
        'Au cœur de la stratégie de Decathlon, notre Équipe Network est en première ligne avec une mission claire : "securely connect everything". Nous recherchons activement plusieurs profils passionnés pour piloter la transformation de notre réseau vers un modèle NaaS (Network as a Service) global, sécurisé et performant.',
      fullDescription:
        'Au cœur de la stratégie de Decathlon, notre Équipe Network est en première ligne avec une mission claire : "securely connect everything". Nous recherchons activement plusieurs profils passionnés pour les rôles de Network Engineer, Network DevOps et Cloud Network Specialist afin de piloter la transformation de notre réseau vers un modèle NaaS (Network as a Service) global, sécurisé et performant.',
      responsibilities: [
        'Ingénierie & Architecture : Concevoir, déployer et maintenir des solutions réseau critiques dans une architecture hybride et multi-cloud',
        "DevOps & Automation : Développer les outils de notre infrastructure critique et piloter l'industrialisation des opérations réseaux via l'Infrastructure as Code et les pratiques GitOps/CI-CD",
        "Sécurité App & Périphérique : Assurer la sécurité et l'évolution des composants d'exposition de nos applications et des composants d'accès interne au SI",
        "Performance & Expertise : Intervenir en tant qu'expert·e sur les incidents majeurs pour garantir des SLA optimums et contribuer à la résilience de l'infrastructure réseau globale",
      ],
      skills: [
        'Automation & IaC : Python, Terraform, Ansible, Git, CI/CD',
        'Cloud Networking : AWS/GCP',
        'Sécurité & Accès : NAC, PKI, Fortinet, ZTNA, WAF, Proxy SaaS, DNS, Load balancing',
        'Réseaux : Backbone, LAN/WLAN, SDWAN, BGP',
        'Opérations & Support : Ticketing, Observabilité, Scripting, Post-mortem',
      ],
      requirements: [
        'Tu es passionné·e par les rouages du réseau et tu as une solide expérience en ingénierie (RUN et BUILD), idéalement dans des environnements hybrides ou multi-cloud',
        "Tu es convaincu·e que l'avenir passe par le code et tu maîtrises les outils d'automatisation",
        "Tu es reconnu·e pour ta curiosité, ta proactivité et ton esprit d'équipe",
        'Tu es orienté·e solution et as à cœur de satisfaire tes utilisateurs',
        "Tu as un excellent relationnel pour communiquer avec tous types d'interlocuteurs",
        'Tu évolues avec aisance dans un environnement Agile et international',
        "Tu maîtrises couramment l'anglais à l'oral comme à l'écrit (B2 minimum)",
        "Si tu crois que le sport est une source d'énergie, de dépassement et de cohésion, tu es déjà dans notre état d'esprit !",
      ],
      benefits: [
        '2 jours de télétravail par semaine',
        "Possibilité de travailler dans l'un des bureaux de Decathlon Digital à Lille ou Paris",
        'Matériel fourni en accord avec tes missions et nos engagements sociétaux (Mac, Windows)',
        "Possibilité d'évolutions et de mobilité interne au sein d'un groupe international",
        'Développement des compétences et accompagnement (diversité des projets, certifications techniques dès la première année, formations internes et externes, etc.)',
        'Package de rémunération (actionnariat salarié, bonus mensuels/trimestriels)',
      ],
      remote: '2 jours de télétravail par semaine',
      location: 'Lille ou Paris',
      contactEmail: 'damien.bastid@decathlon.com',
      applyUrl: 'https://digital.decathlon.net/carrieres',
    },
  ],
};
