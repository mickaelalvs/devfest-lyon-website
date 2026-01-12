"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getJobBySlug, getSponsorBySlug } from "@/lib/jobboard";

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const job = getJobBySlug(slug);
    const sponsor = getSponsorBySlug(slug);

    if (!job || !sponsor) {
        notFound();
    }

    const getSponsorColor = (sponsorName: string) => {
        const colorMap: Record<string, { border: string; bg: string; button: string; title: string }> = {
            "Peaks": { border: "border-pink/30", bg: "bg-pink/10", button: "bg-pink text-pink-foreground hover:bg-pink/90", title: "text-pink" },
            "Zenika": { border: "border-red/30", bg: "bg-red/10", button: "bg-red text-red-foreground hover:bg-red/90", title: "text-red" },
            "Webnet": { border: "border-red/30", bg: "bg-red/10", button: "bg-red text-red-foreground hover:bg-red/90", title: "text-red" },
            "Agixis": { border: "border-primary/30", bg: "bg-primary/10", button: "bg-primary text-primary-foreground hover:bg-primary/90", title: "text-primary" },
            "Sogeti": { border: "border-primary/30", bg: "bg-primary/10", button: "bg-primary text-primary-foreground hover:bg-primary/90", title: "text-primary" },
            "SQLI": { border: "border-navy/30", bg: "bg-navy/10", button: "bg-navy text-navy-foreground hover:bg-navy/90", title: "text-navy" },
            "Bedrock": { border: "border-yellow/30", bg: "bg-yellow/10", button: "bg-yellow text-yellow-foreground hover:bg-yellow/90", title: "text-yellow" },
            "Indy": { border: "border-navy/30", bg: "bg-navy/10", button: "bg-navy text-navy-foreground hover:bg-navy/90", title: "text-navy" },
        };

        // Couleurs par défaut pour les autres sponsors
        const defaultColors = [
            { border: "border-primary/30", bg: "bg-primary/10", button: "bg-primary text-primary-foreground hover:bg-primary/90", title: "text-primary" },
            { border: "border-green/30", bg: "bg-green/10", button: "bg-green text-green-foreground hover:bg-green/90", title: "text-green" },
            { border: "border-yellow/30", bg: "bg-yellow/10", button: "bg-yellow text-yellow-foreground hover:bg-yellow/90", title: "text-yellow" },
        ];

        return colorMap[sponsorName] || defaultColors[0];
    };

    const colorScheme = getSponsorColor(sponsor.sponsorName);

    // Données structurées JSON-LD pour le SEO
    const jobPostingSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.fullDescription || job.description,
        identifier: {
            "@type": "PropertyValue",
            name: job.company,
            value: job.id,
        },
        datePosted: job.publishedDate || new Date().toISOString(),
        employmentType: job.type || "FULL_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: job.company,
            sameAs: sponsor.sponsorWebsite,
        },
        jobLocation: job.location ? {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
            },
        } : undefined,
        baseSalary: job.salary ? {
            "@type": "MonetaryAmount",
            currency: "EUR",
            value: {
                "@type": "QuantitativeValue",
                value: job.salary,
            },
        } : undefined,
        ...(job.applyUrl && {
            url: job.applyUrl,
        }),
        ...(job.contactEmail && {
            email: job.contactEmail,
        }),
    };

    // Nettoyer l'objet des valeurs undefined
    const cleanSchema = JSON.parse(JSON.stringify(jobPostingSchema));

    return (
        <main className="min-h-screen">
            <Script
                id="job-posting-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
            />
            <Header />
            <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-yellow/5 to-pink/5">
                <div className="container px-4 md:px-6">
                    <div className="mb-8">
                        <Link 
                            href="/2025/jobboard" 
                            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                        >
                            ← Retour au Job Board
                        </Link>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Logo du sponsor */}
                        <div className="flex items-center justify-center mb-12 h-36">
                            <a
                                href={sponsor.sponsorWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity h-full flex items-center"
                            >
                                <Image
                                    src={sponsor.sponsorLogo}
                                    alt={sponsor.sponsorName}
                                    width={sponsor.sponsorName === "Decathlon" ? 360 : 240}
                                    height={144}
                                    className={`object-contain h-full w-auto ${sponsor.sponsorName === "Decathlon" ? "max-w-[360px]" : "max-w-[240px]"}`}
                                />
                            </a>
                        </div>

                        {/* Card principale */}
                        <Card className={`${colorScheme.border} ${colorScheme.bg} border-4`}>
                            <CardHeader>
                                <div>
                                    <CardTitle className={`text-3xl mb-2 ${colorScheme.title}`}>
                                        {job.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {job.company}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Description */}
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {job.fullDescription || job.description}
                                    </p>
                                </div>

                                {/* Responsabilités */}
                                {job.responsibilities && job.responsibilities.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Responsabilités</h3>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                            {job.responsibilities.map((resp, index) => (
                                                <li key={index}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Compétences requises */}
                                {job.skills && job.skills.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Compétences requises</h3>
                                        {job.skills.length > 4 ? (
                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                {job.skills.map((skill, index) => (
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="flex flex-wrap gap-2">
                                                {job.skills.map((skill, index) => (
                                                    <Badge key={index} variant="outline">{skill}</Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Prérequis */}
                                {job.requirements && job.requirements.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Prérequis</h3>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Avantages */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Avantages</h3>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                            {job.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Informations complémentaires */}
                                {job.additionalInfo && (
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Informations complémentaires</h3>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {job.additionalInfo}
                                        </p>
                                    </div>
                                )}

                                {/* Grille d'informations */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                                    {job.location && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                                            <p className="font-medium">{job.location}</p>
                                        </div>
                                    )}
                                    {job.remote && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Télétravail</p>
                                            <p className="font-medium">
                                                {typeof job.remote === 'boolean' 
                                                    ? (job.remote ? 'Oui' : 'Non')
                                                    : job.remote
                                                }
                                            </p>
                                        </div>
                                    )}
                                    {job.experience && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Expérience</p>
                                            <p className="font-medium">{job.experience}</p>
                                        </div>
                                    )}
                                    {job.salary && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Salaire</p>
                                            <p className="font-medium">{job.salary}</p>
                                        </div>
                                    )}
                                    {job.contractDuration && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Durée du contrat</p>
                                            <p className="font-medium">{job.contractDuration}</p>
                                        </div>
                                    )}
                                    {job.startDate && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Date de début</p>
                                            <p className="font-medium">{job.startDate}</p>
                                        </div>
                                    )}
                                    {job.publishedDate && (
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Date de publication</p>
                                            <p className="font-medium">{formatDate(job.publishedDate)}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Contact */}
                                {(job.contactEmail || job.contactName || job.contactPhone) && (
                                    <div className="pt-4 border-t">
                                        <h3 className="font-semibold text-lg mb-2">Contact</h3>
                                        <div className="space-y-2 text-muted-foreground">
                                            {job.contactName && (
                                                <p><span className="font-medium">Nom:</span> {job.contactName}</p>
                                            )}
                                            {job.contactEmail && (
                                                <p>
                                                    <span className="font-medium">Email:</span>{' '}
                                                    <a href={`mailto:${job.contactEmail}`} className="text-primary hover:underline">
                                                        {job.contactEmail}
                                                    </a>
                                                </p>
                                            )}
                                            {job.contactPhone && (
                                                <p>
                                                    <span className="font-medium">Téléphone:</span>{' '}
                                                    <a href={`tel:${job.contactPhone}`} className="text-primary hover:underline">
                                                        {job.contactPhone}
                                                    </a>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Bouton de candidature */}
                                {(job.applyUrl || job.contactEmail) && (
                                    <div className="pt-6">
                                        <Button
                                            asChild
                                            size="lg"
                                            className={`w-full md:w-auto ${colorScheme.button}`}
                                        >
                                            {job.contactEmail ? (
                                                <a href={`mailto:${job.contactEmail}?subject=Candidature - ${job.title}`}>
                                                    Postuler maintenant
                                                </a>
                                            ) : (
                                                <a
                                                    href={job.applyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Postuler maintenant
                                                </a>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Autres offres du sponsor */}
                        {sponsor.jobs.filter(j => j.slug !== job.slug).length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-2xl font-bold mb-6 text-center">Les autres offres de {sponsor.sponsorName}</h2>
                                <div className="flex flex-wrap justify-center gap-6">
                                    {sponsor.jobs
                                        .filter(j => j.slug !== job.slug)
                                        .map((otherJob) => (
                                            <Card 
                                                key={otherJob.id} 
                                                className={`w-full max-w-md md:w-[calc(50%-0.75rem)] ${colorScheme.border} ${colorScheme.bg} border-2 hover:shadow-lg transition-shadow flex flex-col`}
                                            >
                                                <CardHeader>
                                                    <CardTitle className={`text-xl ${colorScheme.title}`}>
                                                        {otherJob.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-base">
                                                        {otherJob.company}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-1">
                                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                                        {otherJob.description}
                                                    </p>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className={`w-full ${colorScheme.button} border-current hover:bg-current/10`}
                                                    >
                                                        <Link href={`/2025/jobboard/${otherJob.slug}`}>
                                                            Voir l'offre
                                                        </Link>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

