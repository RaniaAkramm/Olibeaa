import { getTranslation } from '@/lib/i18n';

export default function Footer({ lang }: { lang: string }) {
  const t = getTranslation(lang as any);

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Olibea. {t.footer.rights}</p>
        <p className="text-xs text-gray-400 mt-1">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
