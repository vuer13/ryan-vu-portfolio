import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ryan Vu",
    description: "Ryan Vu portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
