import { getTranslation } from '@/lib/i18n';

export default async function BenefitsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="prose prose-green max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800">{t.benefits.title}</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-700">{t.benefits.heart}</h2>
          <p>{t.benefits.heartDesc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-yellow-700">{t.benefits.anti}</h2>
          <p>{t.benefits.antiDesc}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow col-span-2">
          <h2 className="text-xl font-semibold text-purple-700">{t.benefits.brain}</h2>
          <p>{t.benefits.brainDesc}</p>
        </div>
      </div>
    </div>
  );
}
