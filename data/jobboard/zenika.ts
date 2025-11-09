import { SponsorJobs } from '@/types/jobboard';
import zenikaLogo from '@/assets/images/sponsors/Zenika.svg';

export const zenikaJobs: SponsorJobs = {
    sponsorName: "Zenika",
    sponsorLogo: zenikaLogo.src,
    sponsorWebsite: "https://zenika.com/",
    jobs: [
        {
            id: "zenika-1",
            slug: "zenika-consultant-devops-cloud",
            title: "Consultant·e DevOps",
            company: "Zenika",
            description: "En tant que Consultant·e DevOps Cloud, tu joueras un rôle clé dans l'accompagnement de nos clients pour bâtir des environnements robustes et collaboratifs.",
            fullDescription: "En tant que Consultant·e DevOps Cloud, tu joueras un rôle clé dans l'accompagnement de nos clients pour bâtir des environnements robustes et collaboratifs. Concrètement, cela signifie :",
            responsibilities: [
                "Accompagner nos clients dans leur transformation DevOps en mettant à profit ton expertise sur AWS.",
                "Développer et maintenir des infrastructures Cloud automatisées avec Terraform et d'autres outils d'IaC.",
                "Intégrer les bonnes pratiques DevSecOps dans les pipelines CI/CD avec GitLab.",
                "Superviser le RUN des environnements Cloud, en garantissant leur performance, leur résilience et leur sécurité.",
                "Participer activement à la revue de code et promouvoir les meilleures pratiques.",
                "Rédiger et maintenir des documentations techniques claires et actualisées.",
                "Fédérer et inspirer les équipes pour les amener vers l'excellence en partageant activement tes connaissances."
            ],
            skills: [
                "Gestion de pipelines (Gitlab)",
                "Visualisation des métriques (Prometheus, Grafana)",
                "Containerisation (Docker)",
                "Orchestration de containers (Kubernetes)",
                "Clouds publiques (AWS, Google Cloud, OVH, etc)",
                "Terraform",
                "IaC"
            ],
            applyUrl: "https://jobs.zenika.com/jobs/5513460-consultant-e-devops-cloud"
        },
        {
            id: "zenika-2",
            slug: "zenika-consultant-fullstack-js",
            title: "Consultant·e Full Stack",
            company: "Zenika",
            description: "En tant que Consultant·e Fullstack Javascript, tu joueras un rôle clé dans l'accompagnement de nos clients pour bâtir des environnements robustes et collaboratifs.",
            fullDescription: "En tant que Consultant·e Fullstack Javascript, tu joueras un rôle clé dans l'accompagnement de nos clients pour bâtir des environnements robustes et collaboratifs. Concrètement, cela signifie :",
            responsibilities: [
                "Concevoir et optimiser des architectures techniques sur-mesure pour intégrer et déployer des solutions de manière fluide et continue",
                "Intervenir sur tout le processus d'un projet Agile : de la conception à la livraison, avec une attention portée aux tests et à la qualité, tout en respectant les bonnes pratiques Craft",
                "Participer à la définition des fonctionnalités et de la roadmap",
                "Contribuer aux choix techniques et à l'amélioration continue de la codebase",
                "Développer de nouvelles fonctionnalités avec un fort souci de qualité, performance et maintenabilité",
                "Participer aux rituels d'équipe et à l'effort de delivery des projets",
                "Écrire et maintenir des tests automatisés"
            ],
            skills: [
                "Back-end: Node.js (Nest.js, Express.js)",
                "Bases de données relationnelles / non relationnelles (Postgre, Mongo DB, ...)",
                "Front-end: Frameworks réactifs (React, Next.js, Angular, Vue.JS, Svelte...)",
                "CSS: CSS Modules, CSS-in-JS, Tailwind...",
                "Outils: Vite / Webpack, Storybook, ...",
                "Testing & Qualité logicielle: Tests unitaires, intégration, end-to-end",
                "Testing Library, Gherkin, Playwright / Cypress",
                "Bonnes pratiques Craft",
                "DevOps & Cloud: CI/CD (GitHub Actions, GitLab)",
                "Environnements Cloud / Serverless (AWS, GCP, Azure…)",
                "Infrastructure as Code (Terraform, CloudFormation…)"
            ],
            additionalInfo: "L'environnement technique est très varié, mais pas besoin de tout connaître pour venir chez Zenika !",
            applyUrl: "https://jobs.zenika.com/jobs/6674507-consultant-e-fullstack-js-confirme"
        }
    ]
};

