// src/components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    
    // استخراج المسار بدون اللغة الحالية
    const segments = pathname.split('/').filter(Boolean);
    
    // إزالة أول جزء إذا كان لغة
    if (segments.length > 0 && languages.includes(segments[0] as any)) {
      segments.shift(); // إزالة اللغة الحالية
    }
    
    // بناء المسار الجديد باللغة المختارة
    const newPath = `/${newLang}${segments.length ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
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
