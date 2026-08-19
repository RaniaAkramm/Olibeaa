'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslation, languages } from '@/lib/i18n';

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname();
  const t = getTranslation(lang as any);

  const navItems = [
    { key: 'home', path: `/${lang}` },
    { key: 'benefits', path: `/${lang}/benefits` },
    { key: 'cultivation', path: `/${lang}/cultivation` },
    { key: 'uses', path: `/${lang}/uses` },
    { key: 'about', path: `/${lang}/about` },
  ];

  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
          🌿 Olibea
        </Link>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              className={`hover:text-green-200 transition ${pathname === item.path ? 'underline underline-offset-4' : ''}`}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </Link>
          ))}
          <LanguageSwitcher currentLang={lang} />
        </nav>
      </div>
    </header>
  );
}
