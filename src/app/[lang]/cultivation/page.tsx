import { getTranslation } from '@/lib/i18n';

export default async function CultivationPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="prose prose-green max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800">{t.cultivation.title}</h1>
      <ul className="list-disc pl-6 space-y-3 mt-4 text-lg">
        <li>{t.cultivation.soil}</li>
        <li>{t.cultivation.sun}</li>
        <li>{t.cultivation.water}</li>
      </ul>
      <div className="mt-8 p-6 bg-green-50 rounded-lg">
        <p className="text-gray-700">
          🌳 The olive tree is one of the oldest cultivated trees in history, with a lifespan of 400–600 years.
        </p>
      </div>
    </div>
  );
}
