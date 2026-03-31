import SectionHeader from "@/components/ui/SectionHeader";

const solutions = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="13" />
        <path d="M10 16l4 4 8-8" />
      </svg>
    ),
    title: "業務のムダを見つける",
    description:
      "現在の業務フローをヒアリングし、どこに時間がかかっているか・どこでミスが起きやすいかを整理。改善の余地がある作業を明確にします。",
    tags: ["ヒアリング", "業務分析", "課題整理"],
    color: "from-blue-50 to-indigo-50",
    accent: "text-primary-600",
    border: "border-primary-100",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" />
        <path d="M10 16h12M16 10v12" />
      </svg>
    ),
    title: "自動化の仕組みをつくる",
    description:
      "Excel VBAやRPAを活用し、繰り返し作業を自動化。ミスが起きにくく、誰でも使いやすい仕組みを一緒に構築します。",
    tags: ["Excel VBA", "RPA", "ツール制作"],
    color: "from-sky-50 to-blue-50",
    accent: "text-sky-600",
    border: "border-sky-100",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26l8-8 4 4 8-12" />
        <circle cx="26" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
    title: "次の一歩を明確にする",
    description:
      "IT転職や学習を考えている方には、現状に合ったロードマップをご提案。「何から始めればいいか」をはっきりさせます。",
    tags: ["キャリア相談", "学習計画", "転職支援"],
    color: "from-violet-50 to-purple-50",
    accent: "text-violet-600",
    border: "border-violet-100",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="解決できること"
          title={`「困った」を、三つのステップで解決`}
          description="相談から課題整理、ツール制作まで。お客様の状況に合わせて柔軟にサポートします。"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative bg-gradient-to-br ${item.color} rounded-3xl p-7 border ${item.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-xs font-black text-slate-300 tracking-widest mb-4">
                {item.number}
              </div>
              <div className={`${item.accent} mb-4`}>{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/70 text-slate-600 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
