"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  // Apple Glass Effect - Arka plan
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  if (pathname.startsWith("/studio")) return null;

  return (
    <>
      <motion.header
        // Menü açıkken arka planı şeffaf tutuyoruz ki menü içeriğiyle çakışmasın
        style={{ 
          backgroundColor: isOpen ? "transparent" : backgroundColor, 
          backdropBlur: isOpen ? "none" : backdropBlur 
        }}
        // Z-index'i en tepeye (100) alıyoruz ki hiçbir şey üstüne binemesin
        className="fixed top-0 z-[100] w-full transition-all duration-300 h-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className={`text-xl md:text-2xl font-light tracking-widest transition-all duration-300 ${
              isOpen ? "text-floral-text mix-blend-normal" : "text-white mix-blend-difference"
            }`}
          >
            S T U D I O <span className="text-floral-primary font-normal">.</span>
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white mix-blend-difference">
            <Link href="#koleksiyon" className="hover:opacity-50 transition-opacity">Koleksiyon</Link>
            <Link href="#tasarla" className="hover:opacity-50 transition-opacity">Tasarla</Link>
            <Link href="#hikaye" className="hover:opacity-50 transition-opacity">Hikayemiz</Link>
            <Link href="#iletisim" className="hover:opacity-50 transition-opacity">İletişim</Link>
          </nav>

          {/* Hamburger Butonu */}
          <button
            className="md:hidden relative flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {/* 
                ÖNEMLİ: isOpen ise mix-blend-difference'ı tamamen siliyoruz (normal renge dönüyoruz)
                Böylece beyaz arka planda siyah çizgiler kesin görünür olur.
            */}
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "bg-floral-text" : "bg-white mix-blend-difference"
              }`} 
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }} 
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "bg-floral-text" : "bg-white mix-blend-difference"
              }`} 
            />
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} 
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "bg-floral-text" : "bg-white mix-blend-difference"
              }`} 
            />
          </button>
        </div>
      </motion.header>

      {/* Menü Katmanı - Z-index'i Header'dan (100) bir tık altta (90) tutuyoruz */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F9F8F6] z-[90] flex flex-col items-center justify-center gap-8 text-2xl font-light text-floral-text"
          >
            <Link href="#koleksiyon" onClick={() => setIsOpen(false)} className="hover:text-floral-primary transition-colors tracking-tighter">Koleksiyon</Link>
            <Link href="#tasarla" onClick={() => setIsOpen(false)} className="hover:text-floral-primary transition-colors tracking-tighter">Çiçeğini Tasarla</Link>
            <Link href="#hikaye" onClick={() => setIsOpen(false)} className="hover:text-floral-primary transition-colors tracking-tighter">Hikayemiz</Link>
            <Link href="#iletisim" onClick={() => setIsOpen(false)} className="hover:text-floral-primary transition-colors tracking-tighter">İletişim</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}