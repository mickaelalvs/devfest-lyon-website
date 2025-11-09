import type { Metadata } from "next";

const title = "Jobboard | DevFest Lyon 2025";
const description = "Découvrez les offres d'emploi de nos sponsors du DevFest Lyon 2025. Explorez les opportunités de carrière dans les entreprises tech qui soutiennent notre événement et postulez directement.";

export const metadata: Metadata = {
    title,
    description,
    keywords: ['DevFest Lyon', 'jobboard', 'offres emploi', 'recrutement', 'développeurs', 'tech jobs', 'carrière', 'sponsors'],
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

export default function JobBoardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
