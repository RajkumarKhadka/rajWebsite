import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

// Inter — clean humanist body font (Google Fonts)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// JetBrains Mono — technical accent labels (Google Fonts)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Clash Display is loaded via @font-face in globals.css (served from /public)

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  title: "Raj Kumar Khadka — Computer Engineer | IT Infrastructure & AI",
  description:
    "Raj Kumar Khadka is a Computer Engineer from Nepal with hands-on experience in IT infrastructure, AI/ML, SAP HANA, Docker, CI/CD, and web development. Currently at BizHub Consulting Services.",
  keywords: [
    "Raj Kumar Khadka",
    "Computer Engineer Nepal",
    "IT Infrastructure Nepal",
    "AI ML Nepal",
    "SAP HANA Nepal",
    "Docker CI/CD Nepal",
    "Web Development Nepal",
    "Nepal Engineering College",
    "BizHub Consulting",
    "Software Engineer Nepal",
  ],
  authors: [{ name: "Raj Kumar Khadka", url: "https://rajkumark.com.np" }],
  creator: "Raj Kumar Khadka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajkumark.com.np",
    title: "Raj Kumar Khadka — Computer Engineer | IT Infrastructure & AI",
    description:
      "Hands-on Computer Engineer from Nepal — IT infrastructure, AI/ML, SAP HANA, and web development.",
    siteName: "Raj Kumar Khadka",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar Khadka — Computer Engineer | IT Infrastructure & AI",
    description:
      "Hands-on Computer Engineer from Nepal — IT infrastructure, AI/ML, and web development.",
    creator: "@rajkhadka_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
