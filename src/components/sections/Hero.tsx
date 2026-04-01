"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 40, suffix: "時間", label: "月の削減時間（集計業務）" },
  { value: 95, suffix: "%", label: "ヒューマンエラー削減率" },
  { value: 3, suffix: "営業日", label: "最短導入期間" },
];

const automationItems = [
  "Excel 集計・転記",
  "日報・報告書作成",
  "データ入力作業",
  "請求書処理",
  "在庫管理",
  "メール定型文",
  "スケジュール管理",
  "売上集計レポート",
];

export default function Hero() {
  const [currentItem, setCurrentItem] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentItem((prev) => (prev + 1) % automationItems.length);
        setVisible(true);
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2744 100%)" }}>

      {/* グリッドパターン（控えめ） */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(148,197,253,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,197,253,0.05) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* 柔らかいグロー */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)" }}
      />

      {/* 回路ライン装飾 */}
      <svg className="absolute right-0 top-0 w-96 h-full opacity-[0.07] pointer-events-none" viewBox="0 0 300 800" fill="none">
        <path d="M300 0 L220 0 L220 80 L140 80 L140 200 L80 200 L80 380 L140 380 L140 480 L220 480 L220 660 L300 660" stroke="#93c5fd" strokeWidth="1.5"/>
        <circle cx="220" cy="80" r="4" fill="#93c5fd"/>
        <circle cx="140" cy="200" r="4" fill="#93c5fd"/>
        <circle cx="80" cy="380" r="4" fill="#93c5fd"/>
        <circle cx="140" cy="480" r="4" fill="#93c5fd"/>
        <path d="M300 160 L260 160 L260 280 L180 280 L180 420 L120 420 L120 560" stroke="#a5b4fc" strokeWidth="1"/>
        <circle cx="260" cy="160" r="3" fill="#a5b4fc"/>
        <circle cx="180" cy="280" r="3" fill="#a5b4fc"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="max-w-3xl">

          {/* バッジ */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border"
            style={{
              background: "rgba(59,130,246,0.12)",
              borderColor: "rgba(147,197,253,0.25)",
              animation: "fadeUp 0.6s ease 0.1s both"
            }}>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: "#93c5fd" }}>
              業務自動化・IT転職 無料相談受付中
            </span>
          </div>

          {/* メインコピー */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ animation: "fadeUp 0.6s ease 0.2s both", color: "#f0f9ff" }}>
            <span className="block text-base md:text-lg font-semibold mb-3 tracking-[0.25em] uppercase"
              style={{ color: "#7dd3fc" }}>
              Automate Your Work
            </span>
            あなたの仕事を、<br />
            <span style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              ロボットに任せませんか？
            </span>
          </h1>

          {/* ローテーションテキスト */}
          <div className="flex flex-wrap items-center gap-3 mb-6"
            style={{ animation: "fadeUp 0.6s ease 0.3s both" }}>
            <span className="text-base md:text-lg" style={{ color: "#94a3b8" }}>
              今すぐ自動化できる：
            </span>
            <span
              className="text-base md:text-lg font-bold px-3 py-1 rounded-lg border"
              style={{
                color: "#93c5fd",
                background: "rgba(59,130,246,0.1)",
                borderColor: "rgba(147,197,253,0.2)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {automationItems[currentItem]}
            </span>
          </div>

          {/* サブコピー */}
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "#94a3b8", animation: "fadeUp 0.6s ease 0.4s both" }}>
            Excel・RPA・VBAで繰り返し作業を自動化。
            社内にIT担当がいなくても、わかりやすくサポートします。
            未経験からIT転職を目指す方の無料相談にも対応。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{ animation: "fadeUp 0.6s ease 0.5s both" }}>
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-4 text-base text-white transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(90deg, #2563eb, #6366f1)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
              }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
                <path d="M2 7l7 5 7-5"/>
              </svg>
              無料で相談する
            </a>
            <a href="#services"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-4 text-base transition-all duration-200 active:scale-95"
              style={{
                color: "#cbd5e1",
                border: "1.5px solid rgba(148,163,184,0.3)",
                background: "rgba(255,255,255,0.04)",
              }}>
              サービスを見る
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </a>
          </div>

          {/* 数字 */}
          <div className="grid grid-cols-3 gap-3 md:gap-4"
            style={{ animation: "fadeUp 0.6s ease 0.6s both" }}>
            {stats.map((stat, i) => (
              <div key={i}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(148,197,253,0.12)",
                }}>
                <p className="text-2xl md:text-3xl font-black mb-1" style={{ color: "#e0f2fe" }}>
                  <CountUp target={stat.value} suffix={stat.suffix} duration={1800 + i * 200} />
                </p>
                <p className="text-xs leading-snug" style={{ color: "#64748b" }}>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 下フェード */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,23,42,0.4))" }}
      />
    </section>
  );
}
