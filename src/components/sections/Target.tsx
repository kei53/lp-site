import SectionHeader from "@/components/ui/SectionHeader";

const corporateItems = [
  "Excelでの手作業が多く、業務を効率化したい",
  "毎回同じデータ入力・転記作業で時間を取られている",
  "ミスが起きやすい作業を仕組みで解決したい",
  "VBAやRPAに興味があるが、どこから手をつければいいかわからない",
  "社内にIT・自動化に詳しい人がいない",
];

const personalItems = [
  "未経験からIT業界への転職を考えている",
  "ExcelやVBAなど、仕事で使えるITスキルを身につけたい",
  "プログラミングを学び始めたが、方向性に迷っている",
  "自分に合った学習方法や働き方を相談したい",
  "まず何から始めればいいか整理したい",
];

function TargetCard({
  type,
  emoji,
  title,
  subtitle,
  items,
  delay,
}: {
  type: "corporate" | "personal";
  emoji: string;
  title: string;
  subtitle: string;
  items: string[];
  delay: number;
}) {
  const colors =
    type === "corporate"
      ? {
          bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
          border: "border-primary-100",
          badge: "bg-primary-100 text-primary-700",
          check: "text-primary-500",
          title: "text-primary-800",
        }
      : {
          bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
          border: "border-emerald-100",
          badge: "bg-emerald-100 text-emerald-700",
          check: "text-emerald-500",
          title: "text-emerald-800",
        };

  return (
    <div
      className={`reveal reveal-delay-${delay} ${colors.bg} border ${colors.border} rounded-3xl p-8`}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{emoji}</span>
        <div>
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${colors.badge} mb-1`}
          >
            {subtitle}
          </span>
          <h3 className={`text-xl font-bold ${colors.title}`}>{title}</h3>
        </div>
      </div>

      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <svg
              className={`${colors.check} flex-shrink-0 mt-0.5`}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.15" />
              <path
                d="M5.5 9l2.5 2.5 4.5-5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Target() {
  return (
    <section id="target" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="こんな方におすすめ"
          title="法人・個人、どちらにも対応します"
          description="業務課題を持つ企業・個人事業主から、IT転職を目指す方まで幅広くサポートします。"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <TargetCard
            type="corporate"
            emoji="🏢"
            title="法人・個人事業主の方"
            subtitle="業務効率化"
            items={corporateItems}
            delay={1}
          />
          <TargetCard
            type="personal"
            emoji="👤"
            title="IT転職を目指す個人の方"
            subtitle="IT転職・スキルアップ"
            items={personalItems}
            delay={2}
          />
        </div>
      </div>
    </section>
  );
}
