export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "サービス一覧", href: "#services" },
    { label: "ご相談の流れ", href: "#flow" },
    { label: "料金案内", href: "#pricing" },
    { label: "よくある質問", href: "#faq" },
    { label: "無料相談", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h12M9 3l6 6-6 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-base">
                スマートワーク姫路
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              業務効率化・IT転職相談のサポートサービス。
              <br />
              現場で使える仕組みづくりを、わかりやすくご支援します。
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} スマートワーク姫路. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
