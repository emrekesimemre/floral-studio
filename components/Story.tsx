"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="hikaye" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Sol Taraf: Görsel (Mock Atölye/Zanaat Görseli) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative h-[500px] md:h-[650px] rounded-2xl overflow-hidden bg-floral-bg"
        >
          <Image 
            src="https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=1000&auto=format&fit=crop" 
            alt="Atölye ve El Emeği" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Sağ Taraf: Metin ve Tipografi */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-floral-text mb-8">
            Doğanın fısıltısı, <br />
            <span className="text-floral-primary font-normal">el emeğiyle </span> buluşuyor.
          </h2>
          
          <div className="space-y-6 text-floral-text/70 font-light leading-relaxed md:text-lg tracking-wide">
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
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-[1px] bg-floral-primary mt-12 origin-left"
          />
        </motion.div>

      </div>
    </section>
  );
}