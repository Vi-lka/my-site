import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Providers from "@/components/providers";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { ViewTransitions } from 'next-view-transitions'
import Script from 'next/script';
// import { ReactScan } from "@/components/providers/react-scan";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: locale as Locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
 
  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <Script crossOrigin='anonymous' src="//unpkg.com/react-scan/dist/auto.global.js"></Script>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
          {/* <ReactScan /> */}
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}