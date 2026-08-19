// src/app/[lang]/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
      </section>

      {/* Benefits Preview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
          <h3 className="text-xl font-semibold text-green-700">{t.benefits.heart}</h3>
          <p className="text-gray-600 mt-2">{t.benefits.heartDesc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
          <h3 className="text-xl font-semibold text-yellow-700">{t.benefits.anti}</h3>
          <p className="text-gray-600 mt-2">{t.benefits.antiDesc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
          <h3 className="text-xl font-semibold text-purple-700">{t.benefits.brain}</h3>
          <p className="text-gray-600 mt-2">{t.benefits.brainDesc}</p>
        </div>
      </section>
    </div>
  );
}
