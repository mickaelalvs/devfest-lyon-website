import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const title = "DevFest Lyon 2025";
const description = "Le Devfest Lyon, le rassemblement de la communauté tech une fois par an dans la ville des lumières 🦁";

export const metadata: Metadata = {
    metadataBase: new URL('https://devfest.gdglyon.com'),
    title,
    description,
    keywords: ['DevFest', 'DevFest Lyon', 'conférence développeurs', 'technologies web', 'React', 'Typescript', 'programmation', 'cloud', 'mobile', 'ateliers', 'conférences', 'google developer groups', 'devfest'],
    robots: 'index,follow',
    manifest: '/site.webmanifest',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/shortcut.png',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                sizes: '32x32',
                url: 'favicon-32x32.png',
            },
            {
                rel: 'icon',
                sizes: '16x16',
                url: 'favicon-16x16.png',
            },
        ],
    },
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'fr-FR',
        images: [{ url: `https://devfest.gdglyon.com/devfest-lyon.webp`, width: 1200, height: 600 }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@devfestlyon',
        images: [`https://devfest.gdglyon.com/devfest-lyon.webp`],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
