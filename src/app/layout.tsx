import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FirstIssue.xyz — Your First OSS Contribution Starts Here",
  description:
    "Stop scrolling GitHub for hours. We surface quality good first issues filtered by language, difficulty, and repo health — then help you turn contributions into a portfolio that gets you hired.",
  openGraph: {
    title: "FirstIssue.xyz",
    description: "Curated good first issues. OSS portfolio builder. Get hired.",
    siteName: "FirstIssue.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
