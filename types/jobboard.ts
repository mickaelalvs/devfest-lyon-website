export interface JobOffer {
    // Champs requis
    id: string;
    slug: string;
    title: string;
    company: string;
    description: string; // Description courte pour la card
    
    // Champs optionnels - Informations de base
    location?: string;
    type?: string; // CDI, CDD, Stage, Alternance, etc.
    fullDescription?: string; // Description complète pour la page détail
    publishedDate?: string; // Date de publication
    applyUrl?: string;
    
    // Champs optionnels - Détails supplémentaires
    salary?: string; // Ex: "45k-60k€", "Selon profil"
    remote?: boolean | string; // Télétravail: true/false ou "Hybride", "100% remote", etc.
    experience?: string; // Ex: "3-5 ans", "Junior", "Senior"
    skills?: string[]; // Liste des compétences requises
    benefits?: string[]; // Liste des avantages
    contractDuration?: string; // Ex: "6 mois", "12 mois"
    startDate?: string; // Date de début souhaitée
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    requirements?: string[]; // Liste des prérequis/requis
    responsibilities?: string[]; // Liste des responsabilités
    additionalInfo?: string; // Informations complémentaires
}

export interface SponsorJobs {
    sponsorName: string;
    sponsorLogo: string;
    sponsorWebsite: string;
    jobs: JobOffer[];
}

