import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const services = [
  {
    emoji: "💬",
    label: "IT転職",
    badge: "無料",
    title: "IT転職 無料相談",
    description:
      "未経験からIT業界を目指したい方向けの無料相談。何を学べばいいか、どんな働き方があるか、今の自分に必要な準備を一緒に整理します。",
    points: [
      "転職の方向性・職種選びのアドバイス",
      "必要なスキルと学習ステップの整理",
      "未経験でも目指せるキャリアの話",
    ],
    accentColor: "bg-emerald-50 border-emerald-100",
    labelColor: "bg-emerald-100 text-emerald-700",
    badgeColor: "bg-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    emoji: "🔍",
    label: "業務改善",
    badge: "相談無料",
    title: "業務効率化 相談",
    description:
      "普段の業務内容をヒアリングし、改善できそうな作業や自動化の方向性を提案します。まずは話を聞かせてください。",
    points: [
      "業務フロー・課題のヒアリング",
      "自動化・効率化の方向性の提案",
      "ツール導入の見積もり・ロードマップ",
    ],
    accentColor: "bg-blue-50 border-blue-100",
    labelColor: "bg-blue-100 text-blue-700",
    badgeColor: "bg-primary-500",
    iconBg: "bg-blue-100",
  },
  {
    emoji: "⚙️",
    label: "ツール制作",
    badge: "要見積",
    title: "RPA・Excel VBA ツール制作",
    description:
      "定型作業や繰り返し業務を減らすためのツールを制作します。現場に合わせた実用的な仕組みを構築します。",
    points: [
      "Excel入力・集計作業の自動化",
      "データ整形・転記の自動化",
      "日報・集計レポートの効率化",
    ],
    accentColor: "bg-amber-50 border-amber-100",
    labelColor: "bg-amber-100 text-amber-700",
    badgeColor: "bg-amber-500",
    iconBg: "bg-amber-100",
  },
  {
    emoji: "🌐",
    label: "Web制作",
    badge: "要見積",
    title: "アプリ・ホームページ 制作",
    description:
      "業務用の簡易アプリや、事業紹介用のホームページ制作に対応します。小規模なものから柔軟に対応可能です。",
    points: [
      "会社・事業紹介サイトの制作",
      "業務用のシンプルなWebアプリ",
      "既存サイトのリニューアルにも対応",
    ],
    accentColor: "bg-violet-50 border-violet-100",
    labelColor: "bg-violet-100 text-violet-700",
    badgeColor: "bg-violet-500",
    iconBg: "bg-violet-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="サービス一覧"
          title="提供しているサービス"
          description="相談だけでもOKです。まずは状況を教えてください。必要に応じてご提案します。"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${service.iconBg} rounded-2xl flex items-center justify-center text-2xl`}
                  >
                    {service.emoji}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${service.labelColor}`}
                  >
                    {service.label}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold text-white px-3 py-1.5 rounded-full ${service.badgeColor}`}
                >
                  {service.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <svg
                      className="text-primary-400 mt-0.5 flex-shrink-0"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" opacity="0.15" />
                      <path
                        d="M4.5 7.5l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <Button href="#contact" size="lg">
            サービスについて相談する
          </Button>
        </div>
      </div>
    </section>
  );
}
