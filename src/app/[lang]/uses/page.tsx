// src/app/[lang]/uses/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function UsesPage({ params }: { params: { lang: string } }) {
  // نجلب اللغة الحالية (مثل en, ar, it)
  const lang = params.lang || 'en';
  // نجلب ملف الترجمة الخاص بهذه اللغة
  const t = getTranslation(lang as any);

  return (
    <div className="max-w-4xl mx-auto">
      {/* العنوان الرئيسي للصفحة (مترجم) */}
      <h1 className="text-3xl font-bold text-green-800 mb-6">{t.uses.title}</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* 1. استخدامات الطهي */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold text-orange-700">{t.uses.cooking}</h2>
          <p className="text-gray-600 mt-2">
            يستخدم زيت الزيتون في القلي، التتبيل، وإعداد الصلصات والمخبوزات.
          </p>
        </div>

        {/* 2. استخدامات التجميل */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500">
          <h2 className="text-xl font-semibold text-pink-700">{t.uses.beauty}</h2>
          <p className="text-gray-600 mt-2">
            مرطب طبيعي للبشرة، مضاد للشيخوخة، ومزيل فعال للمكياج.
          </p>
        </div>

        {/* 3. الطب التقليدي */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
          <h2 className="text-xl font-semibold text-indigo-700">{t.uses.traditional}</h2>
          <p className="text-gray-600 mt-2">
            استخدمت أوراق الزيتون منذ القدم لعلاج الالتهابات والألم والسكري.
          </p>
        </div>
      </div>
    </div>
  );
}
