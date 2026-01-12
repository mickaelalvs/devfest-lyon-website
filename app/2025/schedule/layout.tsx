import type {Metadata} from "next";

const title = "DevFest Lyon 2025 | Programme";
const description = "Découvrez le programme complet du DevFest Lyon 2025 : conférences, ateliers et sessions techniques sur les dernières technologies web, cloud, mobile et bien plus encore.";

export const metadata: Metadata = {
    title,
    description,
    keywords: ['DevFest Lyon', 'programme', 'conférences', 'ateliers', 'développeurs', 'technologies', 'agenda', 'schedule'],
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'fr-FR',
        images: [{ url: 'https://devfest.gdglyon.com/devfest-lyon.webp', width: 1200, height: 600 }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@devfestlyon',
        images: ['https://devfest.gdglyon.com/devfest-lyon.webp'],
    },
};

export default function ChildLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}