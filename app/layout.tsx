import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo Magnusson | Portfolio",
  description: "Full-stack software engineer focused on building automated systems and clean, maintainable code. Available for projects and collaboration.",
  keywords: ["software engineer", "full-stack", "Python", "TypeScript", "backend", "frontend", "developer", "portfolio"],
  authors: [{ name: "Leo Magnusson" }],
  openGraph: {
    title: "Leo Magnusson | Portfolio",
    description: "Full-stack software engineer focused on building automated systems and clean, maintainable code.",
    type: "website",
    url: "https://github.com/69FOV",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}