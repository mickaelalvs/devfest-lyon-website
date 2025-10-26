import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobboard - DevFest Lyon 2024",
    description: "Découvrez les offres d'emploi de nos sponsors - DevFest Lyon 2024",
};

export default function JobBoardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
