"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="hikaye" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Sol Taraf: Görsel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          // DEĞİŞİKLİK: Mobilde h-[400px] yaparak ekranı boğmasını engelledik
          className="w-full md:w-1/2 relative h-[400px] md:h-[700px] rounded-xl overflow-hidden shadow-2xl shadow-black/5"
        >
          <Image 
            src="/story.jpg" 
            alt="Saye Bloom Atölye" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
          />
        </motion.div>

        {/* Sağ Taraf: Metin ve Tipografi */}
       <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          // DEĞİŞİKLİK: Mobilde görsel ile metin arasına biraz nefes boşluğu (mt-4)
          className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-medium">
            Hikayemiz · Bandırma
          </span>

          {/* DEĞİŞİKLİK: leading-[1.1] sadece md (masaüstü) için bırakıldı, mobilde leading-tight ile nefes aldırıldı */}
          <h2 className="text-[2.5rem] leading-tight md:text-5xl lg:text-6xl font-extralight tracking-tighter text-zinc-900 mb-8 md:leading-[1.1]">
            Doğanın fısıltısı, <br />
            <span className="text-floral-primary italic font-serif">el emeğiyle </span> <br className="hidden md:block"/> buluşuyor.
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-zinc-500 font-light leading-relaxed md:leading-[2.2em] text-[14px] tracking-wide">
            <p>
              Her bir aranjman, doğanın en saf halini ve mevsimlerin değişken ruhunu yansıtmak üzere özenle seçiliyor. Bizim için tasarım, sadece estetik bir form yaratmak değil; aynı zamanda bir hissi, bir anıyı kalıcı kılmaktır.
            </p>
            <p>
              Atölyemizde, kurutulmuş dokuların zamansızlığı ile taze yaprakların canlılığını harmanlıyor; en özel günlerinize eşlik edecek, tamamen size özgü hikayeler tasarlıyoruz.
            </p>
          </div>

          {/* İnce ve zarif bir imza/çizgi detayı */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1px] bg-floral-primary/40 mt-14 origin-left"
          />
        </motion.div>

      </div>
    </section>
  );
}