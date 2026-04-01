import SectionHeader from "@/components/ui/SectionHeader";

const cases = [
  {
    color: "blue",
    dot: "#378ADD",
    label: "Excel 集計作業",
    before: { value: "40", unit: "時間", sub: "/ 月" },
    after: { value: "2", unit: "時間", sub: "/ 月" },
    note: "月38時間の削減",
    afterBg: "#E6F1FB",
    afterColor: "#0C447C",
    afterSubColor: "#185FA5",
  },
  {
    color: "teal",
    dot: "#1D9E75",
    label: "日報・報告書作成",
    before: { value: "30", unit: "分", sub: "/ 日" },
    after: { value: "5", unit: "分", sub: "/ 日" },
    note: "自動生成で25分の短縮",
    afterBg: "#E1F5EE",
    afterColor: "#085041",
    afterSubColor: "#0F6E56",
  },
  {
    color: "amber",
    dot: "#BA7517",
    label: "データ転記・入力",
    before: { value: "ミス多発", unit: "", sub: "手作業" },
    after: { value: "ゼロに", unit: "", sub: "自動化" },
    note: "ヒューマンエラーを排除",
    afterBg: "#FAEEDA",
    afterColor: "#633806",
    afterSubColor: "#854F0B",
  },
  {
    color: "purple",
    dot: "#7F77DD",
    label: "IT転職相談",
    before: { value: "何から", unit: "", sub: "始めれば…" },
    after: { value: "3ヶ月で", unit: "", sub: "転職活動へ" },
    note: "明確なロードマップを提示",
    afterBg: "#EEEDFE",
    afterColor: "#3C3489",
    afterSubColor: "#534AB7",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader
          badge="導入イメージ"
          title="こんな改善ができます"
          description="※ 改善イメージです。効果は業務内容によって異なります。"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.dot }}
                />
                <span className="text-sm font-semibold text-slate-600">
                  {c.label}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400 mb-1">Before</p>
                  <p className="text-xl font-bold text-slate-700 leading-tight">
                    {c.before.value}
                    {c.before.unit && (
                      <span className="text-xs font-normal ml-0.5">
                        {c.before.unit}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{c.before.sub}</p>
                </div>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="flex-shrink-0 text-slate-300"
                >
                  <path
                    d="M3 9h12M10 4l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div
                  className="flex-1 rounded-xl p-3 text-center"
                  style={{ background: c.afterBg }}
                >
                  <p
                    className="text-xs mb-1 font-medium"
                    style={{ color: c.afterSubColor }}
                  >
                    After
                  </p>
                  <p
                    className="text-xl font-bold leading-tight"
                    style={{ color: c.afterColor }}
                  >
                    {c.after.value}
                    {c.after.unit && (
                      <span className="text-xs font-normal ml-0.5">
                        {c.after.unit}
                      </span>
                    )}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: c.afterSubColor }}
                  >
                    {c.after.sub}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center mt-2">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
