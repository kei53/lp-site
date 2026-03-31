"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "ITに詳しくなくても相談できますか？",
    a: "はい、まったく問題ありません。専門的な知識がなくても、現在の業務内容やお困りのことをそのままお話しいただくだけで大丈夫です。こちらで状況を整理しながら、わかりやすい言葉でご説明します。",
  },
  {
    q: "小さな相談でも大丈夫ですか？",
    a: "もちろんです。「この作業、もっとラクにならないかな？」「なんとなく転職に興味がある」といった漠然とした段階でも、ぜひご相談ください。一緒に整理するところから始めます。",
  },
  {
    q: "個人でも依頼できますか？",
    a: "はい、法人・個人どちらでも対応しています。フリーランスの方や個人事業主の方はもちろん、個人でIT転職を目指す方の相談も歓迎しています。",
  },
  {
    q: "相談だけで終わっても問題ありませんか？",
    a: "まったく問題ありません。相談の結果、すぐに依頼しなくてもOKです。方向性が整理できただけでも価値があると考えています。無理な勧誘は一切行いませんので、安心してご相談ください。",
  },
  {
    q: "対応エリアや対応方法を教えてください。",
    a: "基本的にオンライン（ビデオ通話・メール）でのご対応となりますので、全国どこからでもご相談いただけます。状況に応じて対面での対応も検討可能ですので、お気軽にご相談ください。",
  },
  {
    q: "どのくらいの期間で完成しますか？",
    a: "内容・規模・ご要望によって異なります。簡単なExcel VBAのツールであれば数日〜1週間程度、Webサイト制作は1〜2週間程度が目安です。詳しくはヒアリング後にお伝えします。",
  },
  {
    q: "納品後のサポートはありますか？",
    a: "はい、納品後も使い方のご不明点や軽微な修正についてはご相談いただけます。継続的なサポートが必要な場合は別途ご相談ください。",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 ${
        open ? "shadow-md border-primary-100" : "hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-inset rounded-2xl"
        aria-expanded={open}
      >
        <span className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-black mt-0.5">
          Q
        </span>
        <span className="flex-1 text-slate-800 font-semibold text-sm md:text-base leading-relaxed">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 text-primary-400 mt-0.5 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6l5 5 5-5" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-black mt-0.5">
            A
          </span>
          <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHeader
          badge="よくある質問"
          title="FAQ"
          description="よくいただくご質問をまとめました。他にも気になることがあれば、お気軽にお問い合わせください。"
        />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
