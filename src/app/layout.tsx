import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/layout/ProgressBar";
import Preloader from "@/components/animations/Preloader";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LJ ng Taguig",
    template: "%s | LJ ng Taguig",
  },
  description:
    "My personal portfolio website showcases my skills, projects, and experiences in web development and design.",
  keywords: [
    "LJ ng Taguig",
    "Dyter LJ Federiz",
    "portfolio",
    "web development",
    "web design",
    "projects",
    "skills",
    "experiences",
  ],
  authors: [{ name: "Dyter LJ Federiz", url: "https://ljngtaguig-xi.vercel.app/" }],
  creator: "Dyter LJ Federiz",
  verification: {
    google: "dCvJGHn0bZM7enxFcHuXi82DlyelxmUJDwkjSj5hin0",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://ljngtaguig-xi.vercel.app/",
    title: "LJ ng Taguig",
    description:
      "My personal portfolio website showcases my skills, projects, and experiences in web development and design.",
    siteName: "LJ ng Taguig",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const THEME_INIT_SCRIPT = `
  (() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
      document.documentElement.classList.toggle('dark', isDark);
    } catch (error) {}
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </head>
      <body className="min-h-screen bg-zinc-50">
        <Preloader />
  <script
    dangerouslySetInnerHTML={{
      __html: THEME_INIT_SCRIPT,
    }}
  />

  <ProgressBar />
  <Analytics />

  {children}
</body>
    </html>
  );
}