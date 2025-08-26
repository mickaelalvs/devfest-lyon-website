import siiLogo from '@/assets/images/sponsors/sii.jpg';
import sogetiLogo from '@/assets/images/sponsors/sogeti.svg';
import agixisLogo from '@/assets/images/sponsors/agixis.svg';
import webnetLogo from '@/assets/images/sponsors/webnet.svg';
import decathlon from '@/assets/images/sponsors/Decathlon.svg';
// import indy from '@/assets/images/sponsors/Indy.png';
import peaks from '@/assets/images/sponsors/Peaks.webp';
import bedrock from '@/assets/images/sponsors/Bedrock.svg';

export interface Sponsor {
    name: string;
    logo: string;
    website: string;
}

export const silverSponsors: Sponsor[] = [
    {
        name: "Sogeti",
        logo: sogetiLogo.src,
        website: "https://www.fr.sogeti.com/"
    },
    {
        name: "Agixis",
        logo: agixisLogo.src,
        website: "https://www.agixis.com/"
    },
    {
        name: "SII",
        logo: siiLogo.src,
        website: "https://www.sii.fr"
    },
    {
        name: "Webnet",
        logo: webnetLogo.src,
        website: "https://www.webnet.fr",
    },
    {
        name: "Decathlon",
        logo: decathlon.src,
        website: "https://digital.decathlon.net/",
    },
    {
        name: "Peaks",
        logo: peaks.src,
        website: "https://peaks.fr/"
    },
    // {
    //     name: "Indy",
    //     logo: indy.src,
    //     website: "https://www.indy.fr/"
    // },
    {
        name: "Bedrock",
        logo: bedrock.src,
        website: "https://bedrockstreaming.com/"
    }
]; 