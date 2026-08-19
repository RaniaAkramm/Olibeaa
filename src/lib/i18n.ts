import { translations, defaultLanguage, languages, type Language } from './translations';

export function getTranslation(lang: Language) {
  return translations[lang] || translations[defaultLanguage];
}

export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && languages.includes(segments[0] as Language)) {
    return segments[0] as Language;
  }
  return defaultLanguage;
}

export function getPathWithoutLang(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && languages.includes(segments[0] as Language)) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

export { translations, defaultLanguage, languages };
export type { Language };
