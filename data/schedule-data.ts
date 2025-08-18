import type {Talk, Break} from "@/types/schedule"

export const breaks: Break[] = [
    {
        time: "10:15 AM",
        endTime: "10:45 AM",
        title: "Pause",
        type: "break" as const,
    },
    {
        time: "12:05 PM",
        endTime: "1:30 PM",
        title: "Déjeuner",
        type: "break" as const,
    },
    {
        time: "3:50 PM",
        endTime: "4:20 PM",
        title: "Pause",
        type: "break" as const,
    },
    {
        time: "6:00 PM",
        endTime: "7:30 PM",
        title: "Meet & Greet",
        type: "break" as const,
    },
]

export const roomASchedule: Talk[] = [
    {
        time: "9:00 AM",
        endTime: "9:15 AM",
        title: "Ouverture",
        speakers: [{
            name: "L'équipe DevFest Lyon",
            avatar: "https://devfest.gdglyon.com/shortcut.png"
        }],
    },
    {
        time: "9:15 AM",
        endTime: "9:45 AM",
        title: "Keynote d'ouverture",
        speakers: [{
            name: "Anonymous",
            avatar: "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"
        }],
    },
    {
        time: "9:55 AM",
        endTime: "10:15 AM",
        title: "Démêler vrais produits et hallucinations, REX d’un agent téléphonique chercheur de chaussettes",
        theme: "📏 Data & AI",
        speakers: [
            {
                name: "Marie Terrier",
                avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHRX4a4Y8KA-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732268160555?e=2147483647&v=beta&t=TQo_3WBS4K6-gEg0c5ViJ8jYIUdcqY8RVS31GeJaDkA"
            },
        ],
        description: "Avez-vous déjà essayé de retrouver un produit au nom absurde dans un moteur de recherche ? Heureusement qu'il y a de l'auto-complétion, les filtres, les menus… Mais comment faire quand tout se passe au téléphone, sans écran, sans clics, juste avec la voix ?\n" +
            "\n" +
            "Il y a 18 mois, un client nous a lancé un défi : permettre à des pharmaciens de commander des produits aux noms imprononçables (des bas de contention) par téléphone, via un agent vocal, et de manière fluide.\n" +
            "\n" +
            "La solution ? Des LLMs, bien sûr, mais aussi beaucoup de travail sur la structuration des agents, la recherche full-text, et l’expérience vocale en temps réel.\n" +
            "\n" +
            "Ce retour d’expérience s’adresse à toutes celles et ceux qui s’intéressent à la recherche hybride (full-text + IA), les LLMs orchestrés en agents spécialisés, la voix comme interface utilisateur, et aux défis derrière la mise en production de ce type d’outil."
    },
    {
        time: "10:45 AM",
        endTime: "11:35 AM",
        title: "Let’s play Factorio",
        theme: "📝 Software Architecture",
        speakers: [{
            name: "Julien Wittouck",
            avatar: "https://gravatar.com/avatar/9028e87cd3b536db3b422aa3d50a159149db13ca4d8330708b82aa9cf7886f34?size=200"
        }],
        description: "Factorio est un jeu vidéo d'automatisation hautement addictif (croyez-en mes 300h de jeu).\n" +
            "\n" +
            "Le but est simple : le vaisseau spatial du joueur est échoué sur une planète extra-terrestre, il faut construire une fusée pour s'échapper, en utilisant toutes les ressources disponibles sur la planète.\n" +
            "\n" +
            "Le joueur construit alors une usine (d'où le nom du jeu) pour créer des matériaux de plus en plus complexes, jusqu'à pouvoir construire la fusée.\n" +
            "\n" +
            "Mais quel rapport avec la tech ?\n" +
            "\n" +
            "Architectures de code spaghetti, lasagna, refactoring. Urbanisation, ESB et micro-services. Métriques, alertes, root-cause analysis. Scalabilité horizontale, verticale, load-balancing. Charge, débit, performance. Sécurité, firewalls, DDoS.\n" +
            "\n" +
            "On peut retrouver tous ces concepts dans le jeu.\n" +
            "\n" +
            "Ce talk, intégralement réalisé dans le jeu, reprend et illustre ces différents concepts qui sont au coeur de nos métiers. Pour les débutants, ce sera l'occasion de comprendre ces concepts fondamentaux. Pour les plus expérimentés, ce sera l'occasion de les voir illustrés en dehors d'un schéma d'architecture ennuyeux.\n" +
            "\n" +
            "The Factory Must Grow."
    },
    {
        time: "11:45 AM",
        endTime: "12:05 PM",
        title: "C’était dans quel épisode déjà ? Bref, j’ai indexé une série culte",
        theme: "📊 Data & AI",
        speakers: [
            {name: "Tim Carry", avatar: "https://pbs.twimg.com/profile_images/601300425715908608/0Z1RJjQ8_normal.jpg"},
        ],
        description: "| - Mais si tu sais, c'est quand il dit \"Capitaine ! Capitaine ! Vous n'êtes pas le capitaine !\"\n" +
            "\n" +
            "On a tous·tes une série culte dont on connaît les répliques par cœur. Mais quand il faut retrouver la scène précise pour la montrer à un·e ami·e, on passe souvent plus de temps à chercher qu'à regarder la scène elle-même.\n" +
            "\n" +
            "La sortie de la saison 2 de Bref m'a motivé à chercher à résoudre ce problème pour une de mes séries préférées. J'ai donc développé brefsearch.com, un site qui me permet de retrouver (et revoir) n'importe quelle scène de la saison 1 de Bref, juste à partir de quelques mot clés.\n" +
            "\n" +
            "Dans ce talk, je vous montrerai comment transformer n'importe quelle playlist YouTube en une expérience de recherche immersive. On parlera d'outils en ligne de commande, de services en SaaS, d'optimisation front-end et un peu d'IA."
    },
    {
        time: "1:30 PM",
        endTime: "1:50 PM",
        title: "Les gardiens des données à l’ère de l’IA",
        theme: "📊 Data & AI",
        speakers: [{
            name: "Carmen Piciorus",
            avatar: "https://lh3.googleusercontent.com/a-/AOh14Ghvp2OiYIdWWmCf7opiM68dBR-gfKTkD8Q4rBAz9g=s96-c"
        }],
        description: "Bloquer les accès aux solutions d'intelligence artificielle par peur de fuite de données est-ce vraiment une solution ? A l’ère de l’IA, comment protéger les données confidentielles et le savoir-faire des entreprises ? L'OWASP, l'ANSSI mettent en garde sur les risques de fuite de données sans vraiment fournir les solutions. Dans un monde où les données sont le trésor le plus précieux des entreprises, comment les équipes de cybersécurité vont continuer à assurer la confidentialité des données? A La Poste, on pense qu'il faut plutôt apporter des solutions que de bloquer les accès. Les solutions autour de LLM Guard et Presidio nous aident à anonymiser les données et à en tirer profit des IAs, assurant que les données sensibles restent hors de portée des cybercriminels. LLM Guard permet de rajouter des contrôles sur les prompts d'entrée mais aussi sur les réponses des IAs, en protégeant ainsi contre les attaques type prompt injection et on peut même construire nos propres règles pour compléter. Je vous propose aussi une démo de Presidio sur comment anonymiser les données et comment détecter des données sensibles dans des images générées à partir d'une IA."
    },
    {
        time: "2:00 PM",
        endTime: "2:50 PM",
        title: "La révolution WebGPU : toute la puissance du GPU, sur le web et en dehors 🚀",
        theme: "📏 Frontend",
        speakers: [{name: "Julien Sulpis", avatar: "https://avatars2.githubusercontent.com/u/22420399?v=4"}],
        description: "Si je vous parle de GPU sur le web, vous pensez à ... ? WebGL ! L’API graphique qui est utilisée sur une bonne partie des sites Awwwards, Google Maps, Figma ou encore Tensorflow. Mais elle souffre d'un design un peu daté, celui de l’API OpenGL sortie en 1992. Depuis, d'autres APIs graphiques ont vu le jour (Vulkan, DirectX 12, Metal), mais elles n’étaient pas accessibles dans les navigateurs. Jusqu'à maintenant !\n" +
            "\n" +
            "Google, Apple et Mozilla ont développé conjointement WebGPU pour succéder à WebGL et amener les APIs graphiques modernes sur le web, et en dehors ! Je vous propose donc de découvrir les améliorations apportées sur le rendu graphique et le calcul sur GPU, avec des mesures de performance pour comparer les différentes implémentations.\n" +
            "\n" +
            "Des graphismes 3D aux simulations physiques en passant par l'IA ou le traitement d'image, vous aurez de quoi imaginer des cas d’utilisation possibles de cette API encore peu supportée, mais à l'avenir prometteur ✨"
    },
    {
        time: "3:00 PM",
        endTime: "3:50 PM",
        title: "45 min pour mettre son application à genoux : le guide complet du test de charge",
        theme: "🗃️ Backend",
        speakers: [{
            name: "Mathilde Lorrain",
            avatar: "https://pbs.twimg.com/profile_images/1662345960305852416/eAcbfTsc_400x400.jpg"
        }, {
            name: "Loïc Ortola",
            avatar: "https://lh3.googleusercontent.com/a-/AOh14GgeZqPtOh3atNLSXNKqUX39kXarOVbRtG4ED4wfGJA=s96-c"
        }],
        description: "“Le test de charge, c’est souvent celui qu’on fait trop tard”\n" +
            "\n" +
            "Dans notre quotidien, on a rencontré beaucoup de contextes où les équipes se sentaient démunies face à des incidents de prod, et n’avaient pas forcément la culture du test de charge.\n" +
            "\n" +
            "Quand on entend autour de nous qu’il faut tester son code, on parle la plupart du temps de Tests Unitaires ou d’Intégration. Et pourtant, à l’heure des architectures micro-services, il n’a jamais été aussi important de rester en maitrise de son système distribué. Dans un système critique, il est vital de connaitre ses limites et sa capacité, d’avoir une compétence sur ce qu’il se passe lorsqu’un système “chauffe”, et c’est là que les tests de charge prennent toute leur importance.\n" +
            "\n" +
            "Non seulement les équipes qu’on a formées au test de charge trouvent ça très ludique, mais surtout elles progressent beaucoup dans la maitrise de leur environnement technique (Threads, JVM, DB, configuration, isolation de bottlenecks etc…), et deviennent donc bien plus sensibles et résilientes aux enjeux de prod.\n" +
            "\n" +
            "L’objectif de ce talk est d’offrir cette première maitrise qui permettra à chacun de repartir avec une nouvelle compétence : la capacité de mettre en oeuvre un test de charge sur un environnement complexe (un service avec DB, une API, et de l’authentification SSO)."
    },
    {
        time: "4:20 PM",
        endTime: "5:10 PM",
        title: "Accessibilité : cochez les cases ✅… et ratez la cible 🎯",
        theme: "📏 Frontend",
        speakers: [{
            name: "Vanessa Strub",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocImyNZRfnm8rg5X3DQAg_cbJ0pWf4l2UMqkxVMO5-Tv-c0WMPScXg=s96-c"
        }, {
            name: "Gabriel Pillet",
            avatar: "https://avatars.githubusercontent.com/u/550548?v=4"
        }],
        description: "Non. Votre site n’est pas accessible parce que vous avez mis des balises alt sur toutes les images.\n" +
            "Non. Il ne l'est pas non plus parce qu’il a un score de 100 sur Lighthouse.\n" +
            "Non. Même en respectant à 95 % le RGAA, l’accessibilité réelle de votre site n’est pas assurée.\n" +
            "\n" +
            "Pourquoi, en 2025, tant de sites et d’applications restent-ils encore largement inaccessibles, malgré les lois, les standards et les bonnes intentions affichées ? Aujourd’hui, on estime à moins de 1% les sites réellement utilisables par les personnes en situation de handicap.\n" +
            "\n" +
            "Entre idées reçues, manque de formation et méconnaissance des usages réels, l’accessibilité reste trop souvent le parent pauvre du développement web. Et pourtant, la rendre concrète n’est ni si long, ni si coûteux. Le \"Design Universel\" est une démarche de qualité, qui profite à tout le monde : personnes porteuses d'un handicap, utilisatrices et utilisateurs valides, et même votre business !\n" +
            "\n" +
            "Dans cette conférence accessible à toutes et tous, nous montreront concrètement comment « rendre votre site accessible : vraiment ». Après un rappel sur les besoins des différents handicaps et un point sur les évolutions du RGAA en juin 2025, nous explorerons une démarche concrète à appliquer tout au long du cycle de développement. En insistant sur l'essentiel : savoir tester tout comme vos utilisateurs réels, en apprenant la maîtrise d’un lecteur d’écran.\n" +
            "\n" +
            "Animée par Vanessa, consultante et formatrice en accessibilité, et Gabriel, développeur fullstack, cette session s’adresse aux curieuses et curieux comme à celles et ceux qui veulent enfin passer à l’action, pour participer à rendre le monde numérique plus inclusif."
    },
    {
        time: "5:20 PM",
        endTime: "5:40 PM",
        title: "Embellir des QR Codes à l’ère de la GenAI",
        theme: "📊 Data & AI",
        speakers: [{
            name: "Raphael Semeteys",
            avatar: "https://media.licdn.com/dms/image/v2/D4E03AQG8TaSTBYe0LQ/profile-displayphoto-scale_200_200/B4EZgNm5Q1HoAg-/0/1752574957108?e=1758153600&v=beta&t=YanrMZgchZJDqayHiaPmbNUaQVN90YC3NVI6EEv__xs"
        }],
        description: "Découvrez comment l'intelligence artificielle générative (GenAI) révolutionne la personnalisation des QR Codes !\n" +
            "\n" +
            "Cette présentation met en lumière les fondements techniques des QR Codes et montre, via des démonstrations pratiques, comment des outils comme Stable Diffusion et ComfyUI permettent de créer des QR Codes uniques qui allient fonctionnalité et esthétique.\n" +
            "\n" +
            "Le tout en local sur un PC. Plongez dans un futur où chaque scan devient une expérience visuelle engageante."
    },
    {
        time: "5:45 PM",
        endTime: "6:00 PM",
        title: "Mot de la fin",
        speakers: [{
            name: "L'équipe DevFest Lyon",
            avatar: "https://devfest.gdglyon.com/shortcut.png"
        }],
    },
]

export const roomBSchedule: Talk[] = [
    {
        time: "9:55 AM",
        endTime: "10:15 AM",
        title: "L’API viewTransition : une révolution pour le web ?",
        theme: "📏 Frontend",
        speakers: [
            {
                name: "Théo Gianella",
                avatar: "https://lh3.googleusercontent.com/a/ACg8ocJa895bxi87TFcNsEPk4B44wFtCDttC2sPJdhhxt-Cj4Q=s96-c"
            },
        ],
        description: "Vous aimeriez pouvoir ajouter des animations à votre front-end web afin de proposer une expérience plus fluide à vos utilisateurs mais vous êtes découragés par la complexité de la tâche ? Vous maîtrisez comme personne transitions CSS, keyframes et animations FLIP mais vous en avez marre de gérer les problèmes d'interface et d'accessibilité causés par ces techniques ? Vous développez un site multi-pages full-stack plus traditionnel (rails, express, laravel...) et vous aimeriez améliorer la navigation entre les différentes pages de votre site ?\n" +
            "\n" +
            "Pour résoudre tous ces problèmes et plus encore, venez découvrir l'API viewTransition. Grâce à elle, vous pouvez déléguer au navigateur l'essentiel du travail d'animation et réaliser des transitions entre les différents états de votre application devient un jeu d'enfant, même entre des documents HTML différents (🤯) !\n" +
            "\n" +
            "Au programme, je montrerai comment fonctionne cette API et quelles sont les meilleures pratiques pour l'utiliser dans tous les contextes. Nous verrons ensemble que l'API viewTransition permet de dépasser des obstacles jusqu'ici infranchissables dans le développement web !"
    },
    {
        time: "10:45 AM",
        endTime: "11:35 AM",
        title: "Docker Bake, élégance et standardisation pour le build de vos images Docker",
        theme: "🔧 Cloud, Infra & DevOps",
        speakers: [{name: "Mazlum Tosun", avatar: "https://avatars.githubusercontent.com/tosun-si"}],
        description: "Construire des images Docker, nous sommes nombreux à le faire avec la bonne vieille commande docker build. Ça marche, mais ça peut vite devenir verbeux, peu lisible, et pénible à maintenir, surtout lorsque l'on doit gérer plusieurs architectures comme ARM et AMD, ou passer à l’échelle dans une CI.\n" +
            "\n" +
            "Bonne nouvelle : Docker a introduit Docker Bake, une façon standard, élégante et efficace de décrire vos builds avec du HCL ou du YAML. C’est propre, lisible, modulaire et surtout pensé pour l’automatisation.\n" +
            "\n" +
            "Bake étant basé sur Buildx, les temps de build sont optimisés.\n" +
            "\n" +
            "Dans ce talk, nous commencerons par la méthode classique : deux images, du multi-archi, un peu de lourdeur. Puis nous referons tout ça avec Docker Bake : des variables, des targets, une config unique et une publication dans une registry sur le cloud.\n" +
            "\n" +
            "Nous verrons comment tout ça tourne en local, puis dans une CI comme Cloud Build, GitHub Actions et Gitlab CI.\n" +
            "\n" +
            "Après ce talk, vous aurez (on l’espère !) envie de laisser tomber vos docker build à rallonge pour adopter Docker Bake dans vos projets et rendre vos builds plus simples, élégants et efficaces."
    },
    {
        time: "11:45 AM",
        endTime: "12:05 PM",
        title: "Déchaînez le Chaos : Tester la résilience de votre application avec Chaos Monkey",
        theme: "🗃️ Backend",
        speakers: [
            {name: "Erwan Le Tutour", avatar: "https://avatars.githubusercontent.com/u/21158564?v=4"},
        ],
        description: "Les systèmes modernes sont de plus en plus complexes, distribués et imprévisibles. Face à cette réalité, une question se pose : comment s’assurer que votre application peut survivre à l’inattendu ?\n" +
            "\n" +
            "C’est là qu’intervient le Chaos Engineering, une discipline qui consiste à introduire volontairement des perturbations pour tester la robustesse et la résilience des systèmes avant qu’un incident réel ne survienne.\n" +
            "\n" +
            "Dans ce talk, nous explorerons comment Chaos Monkey for Spring Boot permet de simuler des comportement inattendu au sein de votre application Spring Boot ."
    },
    {
        time: "1:30 PM",
        endTime: "1:50 PM",
        title: "Coder plus pour coder moins : outils maison, IA et carnet de notes pour doubler l’efficacité",
        theme: "📝 Software Architecture",
        speakers: [{
            name: "Penin Edouard",
            avatar: "https://lh6.googleusercontent.com/-mY-SiNs7Nr8/AAAAAAAAAAI/AAAAAAAAAgE/A9RQJVWC23g/photo.jpg"
        }],
        description: "« Ça ne devrait pas être aussi compliqué. »\n" +
            "\n" +
            "Tout est parti de là. Je test-drivais un nouvel endpoint, noyé sous un code qui n'avait rien à voir avec le problème à résoudre et, ce jour-là, c'était trop.\n" +
            "\n" +
            "Ce talk, c'est le résultat de ma quête pour reprendre le contrôle.\n" +
            "\n" +
            "Comment ? En développent (littéralement) mon propre arsenal:\n" +
            "\n" +
            "Framework et outils sur mesure\n" +
            "Scripts d'automatisation avec Playwright\n" +
            "Une touche de \"vibe coding\"\n" +
            "Coder plus d'abord pour coder moins ensuite.\n" +
            "\n" +
            "Ou plutôt: pour coder plus là où ça compte, concentrer ma charge mentale sur là où elle est vraiment utile pour maximiser mon impact.\n" +
            "\n" +
            "Je vous montrerais tout ce que j'ai développé, ce qui a marché et ce qui a été une perte de temps et, surtout, ma stratégie pour détecter les points d'améliorations.\n" +
            "\n" +
            "Mon objectif ? Vous partager ces solutions et, mieux encore, vous donner envie de lancer votre propre quête!"
    },
    {
        time: "2:00 PM",
        endTime: "2:50 PM",
        title: "Et si votre prochain script… c’était un prompt ? Découvrez GenAIScript!",
        theme: "📊 Data & AI",
        speakers: [{name: "Yohan Lasorsa", avatar: "https://avatars0.githubusercontent.com/u/593151?v=4"}],
        description: "Il fut un temps où jQuery a révolutionné le développement web: fini les galères de compatibilité entre navigateurs, place à la simplicité et à l'efficacité. Les développeurs pouvaient enfin se concentrer sur leur app, pas sur les bugs.\n" +
            "\n" +
            "Aujourd’hui, l’IA vit une phase similaire. Les modèles évoluent à toute vitesse, les outils se multiplient... et les agents IA ajoutent une nouvelle couche de complexité. Pas facile de suivre, encore moins d’en tirer vraiment parti!\n" +
            "\n" +
            "Et si on pouvait automatiser des tâches fastidieuses, avec les dernières avancées de l'IA, comme par exemples des agents et outils MCP, sans se plonger dans des frameworks obscurs? Juste avec du JS simple et familier? C’est exactement ce que propose GenAIScript: un outil qui ne ressemble à aucun autre, qui vous permet d’utiliser l’IA comme si vous écriviez du code classique. Les prompts deviennent des snippets réutilisables, les workflows multi-agents se codent comme des fonctions, et tout devient plus fluide.\n" +
            "\n" +
            "Dans ce talk (spoiler: il y aura principalement du live-coding), vous découvrirez comment rendre l'automatisation à base d'IA aussi naturelle que d’écrire du JS. Code reviews, generation de changelog, veille techno, refactoring... pas besoin d’être expert en IA pour gagner du temps au quotidien!"
    },
    {
        time: "3:00 PM",
        endTime: "3:50 PM",
        title: "Développer un opérateur Kubernetes en Java, challenge accepted !",
        theme: "🔧 Cloud, Infra & DevOps",
        speakers: [{name: "Stéphane Philippart", avatar: "https://avatars0.githubusercontent.com/u/26224751?v=4"}],
        description: "Il n'est plus, je pense, nécessaire de présenter Kubernetes tellement il fait parti du paysage informatique. Avec sa généralisation, de nouveaux types de développements et de patterns sont apparus. Lors de ce talk j'aborderai l'un d'eux : les opérateurs.\n" +
            "\n" +
            "Merveilleux assistants, aptes à faire énormément de choses. Mais voilà, les nombreuses documentations que l'on trouve tournent principalement autour d'un langage : Go. Ce n'est pas que cela ne me plaise pas, mais l'idée est de pouvoir aussi le faire avec un autre langage que je connais et utilisé par de nombreuses équipes de développement : Java.\n" +
            "\n" +
            "Lors de ce talk, je vous présenterai, de manière simple, la notion des opérateurs au sein de Kubernetes : à quoi ils servent et comment ils évoluent dans l'éco-système Kubernetes. Nous verrons qu'ils peuvent être de simples aides à l'installation ou à la mise à jour d'une application au sein de Kubernetes mais aussi aller beaucoup plus loin en devenant de vrais Ops pour gérer vos applications pour vous !\n" +
            "\n" +
            "Puis, nous développerons un opérateur ensemble et en Java : un bon Hello World nous permettant de prendre en main le SDK Java mais aussi les différents éléments présentés au début du talk.\n" +
            "\n" +
            "Enfin, nous essaierons de nous projeter vers un opérateur faisant un peu plus que Hello World afin de voir si vraiment il sait faire de l'Ops !\n" +
            "\n" +
            "A la fin de ce talk, vous aurez les différents éléments pour savoir si vous avez besoin développer un opérateur, comment le développer, et choisir entre le faire en Java ou dans un autre langage !"
    },
    {
        time: "4:20 PM",
        endTime: "5:10 PM",
        title: "Construire des serveurs MCP plus intelligents : approches génériques vs. spécifiques au domaine",
        theme: "📊 Data & AI",
        speakers: [{
            name: "Horacio Gonzalez",
            avatar: "https://lh4.googleusercontent.com/-6krIgoWnkGk/AAAAAAAAAAI/AAAAAAABR4o/EJH0Fh-m16k/photo.jpg"
        }],
        description: "Les Modèles de Langage de Grande Taille (LLMs) sont puissants, mais sans une direction claire, ils peuvent ressembler à un stagiaire brillant mais distrait. C’est là que les serveurs MCP (Model Context Protocol) entrent en jeu, fournissant une méthode structurée pour que les LLMs interagissent avec vos données, outils et APIs.\n" +
            "\n" +
            "Dans cette session, nous explorerons les deux principales variantes de serveurs MCP : génériques et spécifiques au domaine. Les serveurs MCP génériques sont comme des autoroutes ouvertes : polyvalents mais chaotiques, permettant aux LLMs d'explorer n'importe quelle source de données. Les serveurs MCP spécifiques au domaine, en revanche, ressemblent davantage à des visites guidées : optimisés, sécurisés, mais moins flexibles.\n" +
            "\n" +
            "Nous plongerons dans des exemples concrets, comme l’utilisation d’un serveur MCP PostgreSQL pour des requêtes ouvertes, par opposition à un serveur MCP spécifique au domaine optimisé pour RAGmonsters. Vous verrez comment ces deux approches influencent les performances, la sécurité et l’expérience des développeurs.\n" +
            "\n" +
            "Mais ce n’est pas que de la théorie. Nous vous montrerons les avantages et les inconvénients pratiques de chaque approche et comment choisir (ou construire) celle qui convient le mieux à votre prochain projet. Que vous souhaitiez créer un chatbot polyvalent ou un assistant IA spécialisé, cette présentation vous donnera les outils pour le rendre plus intelligent.\n" +
            "Rejoignez-nous pour découvrir comment exploiter la puissance des LLMs avec des serveurs MCP, sans perdre le contrôle."
    },
    {
        time: "5:20 PM",
        endTime: "5:40 PM",
        title: "Comment trois jeunes spéléologues sont descendus dans les entrailles de Linux",
        theme: "🔧 Software Architecture",
        speakers: [{
            name: "Florian Forestier",
            avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:qxjqqquraxm6u4gdlptoqivb/bafkreibuavpdvfwzceojwxjxjpjvxjfrruezuh7a3bxxybl6fpqczgyrsm@jpeg"
        }],
        description: "S'il y a bien un projet utilisé à l'échelle mondiale, c'est le Kernel Linux. Un énorme morceau de code, que celles et ceux qui en ont entendu parler considèrent comme un code mystique, inaccessible au commun des mortels. Il n'en est pourtant rien : derrière ce nom qui rebute, se cache en réalité du code, des gens, des communautés. Et comme tout code, on y retrouve des features à coder, des bugs à corriger, des smells à nettoyer.\n" +
            "\n" +
            "Aujourd'hui, je vous propose de vous faire découvrir comment nous avons découvert, investigué, troubleshooté, corrigé, et proposé à la communauté un correctif pour un bug vieux de six ans dans le Kernel ; et ce sans expérience précédente sur cet énorme morceau de code.\n" +
            "\n" +
            "Et rassurez-vous ; le code le plus compliqué que vous allez voir aujourd'hui, c'est un if de deux lignes. Aucune connaissance n'est requise, nous reprenons tout de zéro pour devenir des héros !"
    },
]

export const lunchTalk: Talk = {
    time: "12:30 PM",
    endTime: "1:20 PM",
    title: "Speechless Live Original ✨",
    theme: "Autre 😍",
    speakers: [{
        name: "Jean-francois Garreau",
        avatar: "https://pbs.twimg.com/profile_images/1722992762981593088/JSeOp1pY_400x400.jpg"
    }],
    description: "Speechless Live est un show unique en france. Initialement créé dans la Silicon Valley, il s'exporte maintenant dans le monde et a posé ses valises à Nantes depuis 2017. Cettte session hors norme s'exporte maintenant dans les différentes conférences de France afin d'offrir un temps de pause bien mérité pour les neurones.\n" +
        "\n" +
        "L'objectif est simple : faire s'affronter des speakers.euses dans un exercice d'improvisation ! Au programme :\n" +
        "3 speakers.euses\n" +
        "2 Juré.ées\n" +
        "Un thème tiré au sort\n" +
        "Un sujet donné par le public\n" +
        "Des slides sans queue ni tête imposées\n" +
        "\n" +
        "Cette session est donc avant tout une performance et un bon moyen de se détendre entre 2 conférences techniques"
}
