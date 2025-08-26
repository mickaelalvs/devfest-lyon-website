import sqliLogo from '@/assets/images/sponsors/sqli.webp';
import exotec from '@/assets/images/sponsors/Exotec.png';

export interface Sponsor {
    name: string;
    logo: string;
    website: string;
}

export const goldSponsors: Sponsor[] = [
    {
        name: "SQLI",
        logo: sqliLogo.src,
        website: "https://www.sqli.com"
    },
    {
        name: "Exotec",
        logo: exotec.src,
        website: "https://www.exotec.com/fr/",
    }
]; 