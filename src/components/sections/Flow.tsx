import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    description:
      "フォームまたはメールでお気軽にご連絡ください。どんな小さなご相談でも歓迎します。",
    icon: "📬",
  },
  {
    step: "02",
    title: "ヒアリング",
    description:
      "現状の業務内容や課題、目標についてお話を聞かせてください。オンライン・メールどちらでも対応可能です。",
    icon: "🗣️",
  },
  {
    step: "03",
    title: "ご提案",
    description:
      "ヒアリング内容をもとに、改善の方向性や取り組み方をわかりやすくご提案します。",
    icon: "📋",
  },
  {
    step: "04",
    title: "制作・サポート開始",
    description:
      "合意いただいた内容で作業を進めます。進捗はこまめに共有し、途中の変更にも柔軟に対応します。",
    icon: "⚙️",
  },
  {
    step: "05",
    title: "納品・改善",
    description:
      "成果物をお渡し後も、使い方のサポートや改善のご相談に対応します。",
    icon: "✅",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHeader
          badge="ご相談の流れ"
          title="相談から完成まで、丁寧にサポート"
          description="はじめての方でも安心してご利用いただけるよう、ステップを分かりやすくご説明します。"
        />

        <div className="mt-12 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-100" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-5 items-start`}
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-[78px] h-[78px] bg-white border-2 border-primary-200 rounded-2xl flex flex-col items-center justify-center shadow-sm z-10 relative">
                    <span className="text-2xl mb-0.5">{step.icon}</span>
                    <span className="text-[10px] font-black text-primary-400 tracking-wider">
                      STEP {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 flex-1 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary-500 tracking-widest">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
