import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslation, getLanguageFromPath, languages } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = (params.lang || 'en') as any;
  const t = getTranslation(lang);

  return {
    title: 'Olibea – Olive Tree Resource',
    description: t.hero?.subtitle || 'Discover the secrets of olive oil, leaves, and fruits.',
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
        it: '/it',
        fr: '/fr',
        ja: '/ja',
        zh: '/zh',
        ko: '/ko',
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = (params.lang || 'en') as any;
  const t = getTranslation(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="alternate" hrefLang="x-default" href="https://olibea.com/" />
        {languages.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://olibea.com/${l}`}
          />
        ))}
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header lang={lang} />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer lang={lang} />
        </div>
      </body>
    </html>
  );
}
