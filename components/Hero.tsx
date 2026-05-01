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
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <Image
          // Daha soft, pastel tonlarda bir gelin çiçeği görseli
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
          alt="Gelin Çiçeği Tasarımı"
          fill
          priority
          className="object-cover brightness-[0.9] saturate-[0.8] contrast-[0.9]"
        />
        {/* Yumuşak Geçiş Overlay: Sayfanın altıyla bütünleşmesi için */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#F9F8F6]" />
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
        
        <h1 className="text-5xl md:text-[100px] font-extralight tracking-tighter text-white leading-[0.9] mb-10 drop-shadow-sm">
          Zarafetin <br />
          <span className="italic font-light opacity-90">Yeni Formu</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.a
            href="#koleksiyon"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/90 backdrop-blur-md text-black px-12 py-4 rounded-full text-[13px] font-medium tracking-wide hover:bg-white transition-all duration-500 shadow-xl shadow-black/5"
          >
            Koleksiyonu Keşfet
          </motion.a>
          
          <motion.a
            href="#tasarla"
            className="text-white text-[13px] font-light tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-all duration-500"
          >
            Sana Özel Çiçeği Tasarla
          </motion.a>
        </div>
      </motion.div>

      {/* Apple-esque Kaydırma Göstergesi */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}