import type { Metadata } from "next";
import Navbar from "../components/Navbar";
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
            <body className="bg-background text-foreground antialiased">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
