// src/app/[lang]/cultivation/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function CultivationPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">{t.cultivation.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="border-b pb-3">
          <h2 className="text-xl font-semibold text-blue-700">🌱 التربة المناسبة</h2>
          <p className="text-gray-600 mt-1">{t.cultivation.soil}</p>
        </div>
        <div className="border-b pb-3">
          <h2 className="text-xl font-semibold text-yellow-700">☀️ الإضاءة</h2>
          <p className="text-gray-600 mt-1">{t.cultivation.sun}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-cyan-700">💧 الري</h2>
          <p className="text-gray-600 mt-1">{t.cultivation.water}</p>
        </div>
      </div>
    </div>
  );
}
