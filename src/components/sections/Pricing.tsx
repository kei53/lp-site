import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const plans = [
  {
    emoji: "💬",
    title: "IT転職 無料相談",
    price: "無料",
    priceNote: "完全無料・何度でも",
    description: "未経験からIT業界を目指す方に向けた無料の個別相談です。",
    points: [
      "転職の方向性・職種選びのアドバイス",
      "学習ステップのロードマップ提案",
      "現状の整理とネクストアクションの明確化",
      "オンライン（ビデオ通話）対応",
    ],
    cta: "無料で相談する",
    highlight: false,
    badge: null,
  },
  {
    emoji: "🔍",
    title: "業務効率化 相談",
    price: "相談無料",
    priceNote: "ツール制作は別途お見積もり",
    description: "業務内容をヒアリングし、改善の方向性を一緒に考えます。",
    points: [
      "業務フロー・課題のヒアリング",
      "改善・自動化の方向性の提案",
      "ツール制作が必要な場合は個別お見積もり",
      "小規模な作業から対応可能",
    ],
    cta: "相談してみる",
    highlight: true,
    badge: "人気",
  },
  {
    emoji: "⚙️",
    title: "RPA・VBA / Web制作",
    price: "内容に応じてご案内",
    priceNote: "まずはお気軽にご相談ください",
    description: "ご要望・規模・工数をもとに個別にお見積もりします。",
    points: [
      "Excel VBA・RPAツール制作",
      "業務用アプリの開発",
      "ホームページ・LP制作",
      "納品後のサポートも対応",
    ],
    cta: "見積もりを相談する",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="料金案内"
          title="まずは相談から。費用は内容に応じてご案内"
          description="IT転職相談は完全無料。業務効率化の相談も無料で受け付けています。ツール制作などは内容に応じて個別にご案内します。"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-primary-600 text-white shadow-xl shadow-primary-200"
                  : "bg-slate-50 border border-slate-100 hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-black px-4 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div className="mb-5">
                <span className="text-3xl">{plan.emoji}</span>
              </div>

              <h3
                className={`text-base font-bold mb-1 ${
                  plan.highlight ? "text-white" : "text-slate-800"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.highlight ? "text-primary-200" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-1">
                <span
                  className={`text-2xl font-black ${
                    plan.highlight ? "text-white" : "text-slate-800"
                  }`}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={`text-xs mb-6 ${
                  plan.highlight ? "text-primary-200" : "text-slate-400"
                }`}
              >
                {plan.priceNote}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={
                        plan.highlight ? "text-primary-200 flex-shrink-0 mt-0.5" : "text-primary-400 flex-shrink-0 mt-0.5"
                      }
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" opacity="0.2" />
                      <path
                        d="M4.5 7.5l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={plan.highlight ? "text-primary-100" : "text-slate-600"}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.highlight ? "outline" : "primary"}
                className={
                  plan.highlight
                    ? "border-white text-white hover:bg-white/10 w-full"
                    : "w-full"
                }
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <p className="text-slate-400 text-sm">
            ※ 料金は内容・規模によって異なります。まずはお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
