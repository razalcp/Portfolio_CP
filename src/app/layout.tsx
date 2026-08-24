import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Razal CP | Full Stack Developer — React, Next.js, Node.js & NestJS",
  description:
    "Full-stack MERN developer with professional experience building production web applications at Dignizant Technologies — enterprise POS systems, insurance software and international client collaboration. React, Next.js, Node.js, NestJS, SQL & MongoDB.",
  keywords: [
    "Razal CP",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "NestJS",
    "Node.js",
  ],
  authors: [{ name: "CP Razal Nazim" }],
  openGraph: {
    title: "Razal CP | Full Stack Developer",
    description:
      "Full-stack developer with production experience — React, Next.js, Node.js, NestJS, Prisma, SQL & MongoDB. Currently building production web applications at Dignizant Technologies.",
    type: "website",
    images: [
      {
        url: "/razal-photo.png",
        width: 1536,
        height: 1536,
        alt: "Razal CP — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Razal CP | Full Stack Developer",
    description:
      "Full-stack MERN developer with professional production experience at Dignizant Technologies.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base font-sans">{children}</body>
    </html>
  );
}
