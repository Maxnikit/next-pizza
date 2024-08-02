import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

// TODO Сделать адаптивную вёрстку
// TODO улучшить семантику (nav, section, article и т.д.)
// TODO Разработать Dashboard
// TODO скачать изображения товаров и поместить в public
