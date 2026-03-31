"use client";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-primary-200">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              無料相談受付中
            </span>

            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
              まず、話してみませんか。
            </h2>

            <p className="text-primary-200 text-base md:text-lg leading-relaxed mb-3">
              「こんな相談でもいいのかな？」と思ったときが、ご連絡のタイミングです。
            </p>
            <p className="text-primary-300 text-sm mb-10">
              業務効率化の相談・IT転職の相談、どちらもお気軽にどうぞ。
            </p>

            {/* Contact form placeholder */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-8 text-left">
              <p className="text-white/80 text-sm mb-5 text-center font-medium">
                以下のボタンからお問い合わせください
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-xs mb-1">お名前</p>
                  <p className="text-white/70 text-sm">（フォームで入力）</p>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-xs mb-1">メールアドレス</p>
                  <p className="text-white/70 text-sm">（フォームで入力）</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl px-4 py-3 mb-5">
                <p className="text-white/50 text-xs mb-1">ご相談内容</p>
                <p className="text-white/70 text-sm">（フォームで入力）</p>
              </div>
              <button
                className="w-full bg-white text-primary-700 font-bold py-4 rounded-xl hover:bg-primary-50 transition-colors duration-200 text-base shadow-md active:scale-95"
                onClick={() => alert("お問い合わせフォームは準備中です。")}
              >
                無料で相談する →
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-200">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
                </svg>
                完全無料で相談可能
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="7" cy="7" r="6" />
                  <path d="M7 4v3l2 2" />
                </svg>
                返信は1〜2営業日以内
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7l4 4 6-6" />
                </svg>
                勧誘・押し売りは一切なし
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
