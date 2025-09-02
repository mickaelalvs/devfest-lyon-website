import type {Metadata} from "next";

const title = "DevFest Lyon 2025 | Programme";

export const metadata: Metadata = {
    title,
};

export default function ChildLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}