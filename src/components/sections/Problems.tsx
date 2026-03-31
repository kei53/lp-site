import SectionHeader from "@/components/ui/SectionHeader";

const problems = [
  {
    icon: "🔄",
    text: "毎日同じExcel作業を繰り返している",
  },
  {
    icon: "⚠️",
    text: "手作業が多くてミスが起きやすい",
  },
  {
    icon: "🤔",
    text: "VBAやRPAを使いたいけど、何から始めればいいかわからない",
  },
  {
    icon: "🏢",
    text: "業務改善したいけど、社内に相談できる人がいない",
  },
  {
    icon: "💼",
    text: "IT業界に興味はあるけど、自分に向いているかわからない",
  },
  {
    icon: "📚",
    text: "未経験から転職したいけど、何を学べばいいかわからない",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="こんなお悩みありませんか？"
          title="あなたの「困った」に、寄り添います"
          description="業務の現場でよく聞かれるお悩みを集めました。小さな悩みも、ぜひ気軽にご相談ください。"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all duration-200`}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{problem.icon}</span>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance message */}
        <div className="reveal mt-10 bg-primary-50 border border-primary-100 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-primary-800 font-bold text-base md:text-lg">
            専門知識がなくても大丈夫です。まずは現状を話すだけでOKです。
          </p>
          <p className="text-primary-600 text-sm mt-2">
            どんな小さな相談でも、丁寧にお聞きします。
          </p>
        </div>
      </div>
    </section>
  );
}
