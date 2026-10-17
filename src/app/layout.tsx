
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodevaERP | برنامج إدارة المحلات في موريتانيا",
  description:
    "نظام CodevaERP لإدارة المبيعات والمخزون والمشتريات والديون والمحاسبة للمتاجر والمؤسسات الموريتانية.",
  keywords: [
    "برنامج إدارة المحلات",
    "برنامج محاسبة موريتانيا",
    "إدارة المخزون",
    "دفتر الديون",
    "برنامج المبيعات",
    "CodevaERP",
    "ERP Mauritanie",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "CodevaERP — تجارتك تحت السيطرة",
    description: "نظام واحد لإدارة تجارتك بثقة وسهولة.",
    locale: "ar_MR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
