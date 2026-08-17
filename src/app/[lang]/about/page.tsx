// src/app/[lang]/about/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: { lang: string } }) {
  // نجلب اللغة الحالية (مثل en, ar, it)
  const lang = params.lang || 'en';
  // نجلب ملف الترجمة الخاص بهذه اللغة
  const t = getTranslation(lang as any);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* العنوان الرئيسي للصفحة (مترجم) */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">{t.about.title}</h1>
      
      {/* الوصف التفصيلي (مترجم) */}
      <p className="text-lg text-gray-700 leading-relaxed">
        {t.about.desc}
      </p>

      <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-xl font-semibold text-green-700">🌿 لماذا Olibea؟</h2>
        <p className="text-gray-700 mt-2">
          نحن نؤمن بأن شجرة الزيتون هي هدية الطبيعة الخالدة. 
          يهدف موقعنا إلى جمع كل ما تحتاج معرفته عن الزيتون في مكان واحد، 
          بدءاً من طرق الزراعة وصولاً إلى أحدث الأبحاث عن فوائده الصحية، 
          وكل ذلك بأكثر من 7 لغات لتصل المعلومة لكل شعوب العالم.
        </p>
      </div>
    </div>
  );
}
