// src/app/[lang]/benefits/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function BenefitsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">{t.benefits.title}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
          <h2 className="text-xl font-semibold text-red-700">{t.benefits.heart}</h2>
          <p className="text-gray-600 mt-2">غني بالدهون الأحادية غير المشبعة ومضادات الأكسدة القوية التي تحمي القلب وتقلل الكوليسترول الضار.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-yellow-700">{t.benefits.anti}</h2>
          <p className="text-gray-600 mt-2">يحتوي على مركب الأوليوكانثال الذي له تأثير مضاد للالتهابات شبيه بالإيبوبروفين.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 col-span-2">
          <h2 className="text-xl font-semibold text-purple-700">{t.benefits.brain}</h2>
          <p className="text-gray-600 mt-2">يساعد في الحماية من التدهور المعرفي المرتبط بالعمر وأمراض الزهايمر بفضل مضادات الأكسدة القوية.</p>
        </div>
      </div>
    </div>
  );
}
