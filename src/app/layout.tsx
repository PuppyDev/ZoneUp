import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ZoneUp",
    description: "Clone ClickUp Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const bodyStyles = {
        "--global-actions-bar-height": "56px",
    } as React.CSSProperties;

    return (
        <ClerkProvider>
            <html lang="en" className="dark">
                <body style={bodyStyles} className={clsx(inter.className, "h-screen")}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
