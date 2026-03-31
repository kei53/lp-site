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
  title: "スマートワーク姫路 | 業務効率化・IT転職相談",
  description:
    "姫路・兵庫エリアの業務効率化・IT転職相談。Excel・RPA・VBAで手作業を自動化。未経験からIT転職を目指す方の無料相談も対応。",
  keywords: "業務効率化, IT転職, Excel自動化, RPA, VBA, 姫路, 兵庫, 無料相談",
  openGraph: {
    title: "スマートワーク姫路 | 業務効率化・IT転職相談",
    description:
      "姫路・兵庫エリアの業務効率化・IT転職相談。Excel・RPA・VBAで手作業を自動化。",
    url: "https://あなたのドメイン",
    siteName: "スマートワーク姫路",
    locale: "ja_JP",
    type: "website",
  },
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
