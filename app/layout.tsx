import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "S T U D I O | Kişiye Özel Çiçek ve Tasarım Atölyesi",
  description: "Modern ve minimalist çiçek tasarımları, gelin buketleri ve kurutulmuş çiçek aranjmanları. Bandırma ve çevresine özel butik hizmet.",
  keywords: ["çiçek tasarımı", "gelin buketi", "Bandırma çiçek", "Manyas çiçek", "butik çiçekçi", "kişiye özel tasarım"],
  openGraph: {
    title: "S T U D I O | Tasarım Atölyesi",
    description: "Zarafetin yeni formuyla tanışın.",
    url: 'https://seninsiten.com', // Deploy sonrası burayı güncellersin
    siteName: 'Studio',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}