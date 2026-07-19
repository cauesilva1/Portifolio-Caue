import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-caue.vercel.app"),
  title: {
    default: "Caue Silva — Front-end Developer",
    template: "%s · Caue Silva",
  },
  description:
    "Front-end Developer in Toronto. React, Next.js, TypeScript. Open to full-time roles — on-site or remote.",
  keywords: [
    "Front-end Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Toronto",
    "Caue Silva",
  ],
  authors: [{ name: "Caue Silva" }],
  openGraph: {
    title: "Caue Silva — Front-end Developer",
    description:
      "Building clear, fast interfaces with React and Next.js. Based in Toronto.",
    type: "website",
    url: "https://portifolio-caue.vercel.app",
    siteName: "Caue Silva",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 1600,
        alt: "Caue Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caue Silva — Front-end Developer",
    description:
      "Building clear, fast interfaces with React and Next.js. Based in Toronto.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
