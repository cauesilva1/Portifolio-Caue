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
    default: "Caue Silva — Software Developer",
    template: "%s · Caue Silva",
  },
  description:
    "Software Developer in Toronto. React, Next.js, TypeScript. Currently shipping at Consultare Software. Seeking a junior role.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Toronto",
    "Caue Silva",
    "Consultare Software",
  ],
  authors: [{ name: "Caue Silva" }],
  openGraph: {
    title: "Caue Silva — Software Developer",
    description:
      "Software Developer in Toronto, strongest in React, Next.js, and TypeScript. Seeking a junior role.",
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
    title: "Caue Silva — Software Developer",
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
