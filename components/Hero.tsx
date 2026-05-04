"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apple stili derinlik efektleri
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F9F8F6]">
      {/* Soft Arka Plan Katmanı */}
      {/* Soft Arka Plan Katmanı - Kontrast ve Okunabilirlik İçin Güncellendi */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 bg-black">
        <Image
          src="/hero.png"
          alt="Gelin Çiçeği Tasarımı"
          fill
          priority
          sizes="100vw"
          // Görselin kendi parlaklığını kıstık ve kontrastını artırdık
          className="object-cover brightness-[0.65] saturate-[0.8] contrast-[1.1] opacity-90"
        />
        
        {/* 1. Üst Karartma: Navbar'ın (Menünün) okunabilmesi için yukarıdan inen siyah degrade */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        
        {/* 2. Merkez Karartma: Ana metnin arkasını hafifçe koyulaştıran radyal veya düz ince bir katman */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 3. Alt Geçiş: Sayfanın altındaki krem rengi bölüme yumuşak geçiş için */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F9F8F6] to-transparent" />
      </motion.div>

      {/* Ana Metin Bloğu */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 block font-medium"
        >
          Kişiye Özel Tasarım Atölyesi
        </motion.span>
        
        <h1 className="text-5xl md:text-[100px] font-extralight tracking-tighter text-white leading-[0.9] mb-12 drop-shadow-sm">
          Zarafetin <br />
          <span className="italic font-light opacity-90">Yeni Formu</span>
        </h1>
        
        {/* Butonlar: Kusursuz Simetri ve Pill (Hap) Formu */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href="#koleksiyon"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-10 py-4 rounded-full text-[11px] uppercase font-medium tracking-[0.2em] transition-all duration-500 shadow-xl shadow-black/10"
          >
            Koleksiyonu Keşfet
          </motion.a>
          
          <motion.a
            href="#tasarla"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border border-white/60 text-white px-10 py-4 rounded-full text-[11px] uppercase font-medium tracking-[0.2em] transition-all duration-500 backdrop-blur-sm hover:border-white"
          >
            Çiçeğini Tasarla
          </motion.a>
        </div>
      </motion.div>

      {/* Apple-esque Kaydırma Göstergesi (Yazısız, Animasyonlu İnce Çizgi) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div 
          animate={{ height: ["0vh", "8vh", "0vh"], opacity: [0, 1, 0], y: [0, 20, 40] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-white/70" 
        />
      </motion.div>
    </section>
  );
}


