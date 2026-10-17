
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

// Police arabe et latine
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// URL du site marketing
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://go.codevaerp.online";

// SEO et métadonnées
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CodevaERP | برنامج إدارة المحلات في موريتانيا",
    template: "%s | CodevaERP",
  },

  description:
    "CodevaERP نظام لإدارة المبيعات والمخزون والمشتريات وديون الزبائن والمحاسبة، مصمم للمحلات والمؤسسات في موريتانيا.",

  applicationName: "CodevaERP",

  keywords: [
    "CodevaERP",
    "برنامج إدارة المحلات",
    "برنامج محاسبة موريتانيا",
    "إدارة المخزون",
    "إدارة المبيعات",
    "دفتر الديون الذكي",
    "نظام نقاط البيع",
    "برنامج تجاري موريتانيا",
    "ERP Mauritanie",
    "Logiciel de gestion Mauritanie",
  ],

  authors: [{ name: "Codeva Solution" }],
  creator: "Codeva Solution",
  publisher: "Codeva Solution",

  // Icône personnalisée CodevaERP
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
  },

  // Indexation Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Partage sur WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "ar_MR",
    url: siteUrl,
    siteName: "CodevaERP",
    title: "CodevaERP — تجارتك منظمة، قراراتك أوضح",
    description:
      "نظام متكامل لإدارة المبيعات والمخزون والديون والمحاسبة للمؤسسات والمحلات الموريتانية.",
  },

  // URL officielle
  alternates: {
    canonical: siteUrl,
  },
};

// Configuration responsive et thème clair
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} min-h-screen bg-[#F8FAFC] text-[#092C4C] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
