import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero-gradient">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full opacity-60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-20 lg:py-28 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full px-4 py-2 mb-8 shadow-sm"
            style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm text-primary-600 font-semibold">
              業務効率化・IT転職 無料相談受付中
            </span>
          </div>

          {/* Main copy */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-6"
            style={{ animation: "fadeUp 0.6s ease 0.2s both" }}
          >
            毎日のムダ作業、
            <br />
            <span className="text-primary-600">なくします。</span>
          </h1>

          {/* Sub copy */}
          <p
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4"
            style={{ animation: "fadeUp 0.6s ease 0.3s both" }}
          >
            Excel・RPA・業務改善で、日々の手作業をもっとラクに。
            <br className="hidden md:block" />
            未経験から&ldquo;仕事で使えるIT&rdquo;を目指す人の相談にも対応します。
          </p>

          {/* Supporting text */}
          <p
            className="text-sm md:text-base text-slate-500 leading-relaxed mb-10"
            style={{ animation: "fadeUp 0.6s ease 0.4s both" }}
          >
            法人の業務効率化相談から、個人向けのIT転職無料相談まで。
            <br className="hidden md:block" />
            現場で使える仕組みづくりを、わかりやすくサポートします。
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
          >
            <Button href="#contact" size="lg" className="shadow-lg">
              <svg
                className="mr-2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M2 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                <path d="M2 7l7 5 7-5" />
              </svg>
              無料で相談する
            </Button>
            <Button href="#services" variant="outline" size="lg">
              サービスを見る
              <svg
                className="ml-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Feature pills */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-3"
          style={{ animation: "fadeUp 0.6s ease 0.65s both" }}
        >
          {[
            "✓ Excel・VBA自動化",
            "✓ RPAツール導入",
            "✓ IT転職無料相談",
            "✓ ホームページ制作",
            "✓ 業務フロー改善",
          ].map((item) => (
            <span
              key={item}
              className="bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-600 text-sm px-4 py-2 rounded-full shadow-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "fadeIn 0.6s ease 1s both" }}
      >
        <div className="flex flex-col items-center gap-1.5 text-slate-400">
          <span className="text-xs">スクロール</span>
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
            <div
              className="w-1 h-2 bg-slate-400 rounded-full"
              style={{
                animation: "float 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
