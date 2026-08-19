// src/app/[lang]/about/page.tsx
import { getTranslation } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'en';
  const t = getTranslation(lang as any);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{t.about.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{t.about.desc}</p>
      <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-xl font-semibold text-green-700">🌿 مهمتنا</h2>
        <p className="text-gray-700 mt-2">نؤمن بأن شجرة الزيتون هي هدية الطبيعة الخالدة. نهدف إلى جمع كل ما تحتاج معرفته عن الزيتون في مكان واحد، بدءاً من الزراعة وصولاً إلى الفوائد الصحية، بسبع لغات مختلفة.</p>
      </div>
    </div>
  );
}
