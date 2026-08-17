// src/components/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';
import { languages } from '@/lib/i18n';

const languageNames: Record<string, string> = {
  en: '🇬🇧 English',
  ar: '🇸🇦 العربية',
  it: '🇮🇹 Italiano',
  fr: '🇫🇷 Français',
  ja: '🇯🇵 日本語',
  zh: '🇨🇳 中文',
  ko: '🇰🇷 한국어',
};

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const path = window.location.pathname.split('/').slice(2).join('/');
    router.push(`/${newLang}${path ? '/' + path : ''}`);
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      className="bg-green-700 text-white rounded px-3 py-1 border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {languageNames[lang]}
        </option>
      ))}
    </select>
  );
}
