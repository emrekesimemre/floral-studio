"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Üst Mikro Başlık */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block font-medium"
        >
          Bizimle Tanışın
        </motion.span>

        {/* Ana Başlık - İtalik ve Serifli Vurgu Geri Geldi */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tighter text-zinc-900 mb-8"
        >
          Hayalinizdeki tasarımı <br />
          <span className="text-floral-primary italic font-serif">birlikte yaratalım.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[14px] md:text-[15px] text-zinc-500 font-light mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Özel günlerinize eşlik edecek aranjmanlar veya atölyemiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz. 
        </motion.p>

        {/* Zarif Kargo/Teslimat Notu (Çizgili kaba kutu yerine minimal metin) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-12 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-zinc-400"
        >
          <span>✦ Bandırma ve Çevresine Elden Teslim</span>
          <span className="hidden md:block opacity-30">|</span>
          <span>Tüm Türkiye'ye Özenli Kargo ✦</span>
        </motion.div>

        {/* Butonlar - Premium Hiyerarşi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          {/* Ana Eylem: Siyah Asil Buton */}
          <a 
            href="https://wa.me/905067876301" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-zinc-800 shadow-xl shadow-zinc-900/10 transition-all duration-300"
          >
            WhatsApp'tan Ulaşın
          </a>
          
          {/* İkincil Eylem: Transparan Çerçeveli Buton */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border border-zinc-200 text-zinc-600 px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300"
          >
            Instagram'da Keşfedin
          </a>
        </motion.div>
      </div>
    </section>
  );
}