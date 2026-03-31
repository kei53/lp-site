import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "業務効率化・IT転職相談 | 毎日のムダ作業、なくします",
  description:
    "Excel・RPA・業務改善で日々の手作業をもっとラクに。未経験からIT転職を目指す方の無料相談にも対応。法人の業務効率化から個人のキャリア相談まで、わかりやすくサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>{children}</body>
    </html>
  );
}
