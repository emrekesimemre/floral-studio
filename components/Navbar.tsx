"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  // Sayfa aşağı kaydıkça arka planın opasitesini artırıyoruz
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  if (pathname.startsWith("/studio")) return null;

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 h-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-light tracking-widest text-white mix-blend-difference">
          S T U D I O <span className="text-floral-primary font-normal">.</span>
        </Link>

        <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white mix-blend-difference">
          <Link href="#koleksiyon" className="hover:opacity-50 transition-opacity">Koleksiyon</Link>
          <Link href="#tasarla" className="hover:opacity-50 transition-opacity">Tasarla</Link>
          <Link href="#hikaye" className="hover:opacity-50 transition-opacity">Hikayemiz</Link>
          <Link href="#iletisim" className="hover:opacity-50 transition-opacity">İletişim</Link>
        </nav>
      </div>
    </motion.header>
  );
}