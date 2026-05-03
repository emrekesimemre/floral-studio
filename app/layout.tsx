import "./globals.css";
import Navbar from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sayebloom.com"),
  title: "Saye Bloom | Kişiye Özel Çiçek ve Tasarım Atölyesi",
  description: "Modern ve minimalist çiçek tasarımları, gelin buketleri ve kurutulmuş çiçek aranjmanları. Bandırma ve çevresine özel butik hizmet.",
  keywords: ["çiçek tasarımı", "gelin buketi", "Bandırma çiçek", "Manyas çiçek", "butik çiçekçi", "kişiye özel tasarım", "saye bloom"],
  openGraph: {
    title: "Saye Bloom | Tasarım Atölyesi",
    description: "Zarafetin yeni formuyla tanışın.",
    url: "https://sayebloom.com",
    siteName: "Saye Bloom",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      {/* antialiased sınıfı Apple stili o pürüzsüz yazı render'ını sağlar */}
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}