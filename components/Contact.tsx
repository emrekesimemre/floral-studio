"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 bg-floral-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light tracking-tight text-floral-text mb-8"
        >
          Hayalinizdeki tasarımı <br />
          <span className="text-floral-primary font-normal">birlikte yaratalım.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-floral-text/70 font-light mb-12 leading-relaxed"
        >
          Özel günlerinize eşlik edecek aranjmanlar veya atölyemiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz. Bandırma ve çevresi için elden teslim, diğer bölgeler için özenli kargo seçeneklerimiz bulunmaktadır.
        </motion.p>

        {/* Butonların hemen üstüne eklenecek teslimat notu */}
<motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="mb-10 p-4 border-y border-floral-accent/30"
>
  <p className="text-xs md:text-sm tracking-[0.2em] text-floral-text/50 uppercase italic">
    Bandırma, Manyas ve çevre ilçelere aynı gün elden teslimat <br className="hidden md:block" /> 
    Tüm Türkiye'ye özel korumalı paketleme ile kargo seçeneği
  </p>
</motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* WhatsApp Butonu */}
          <a 
            href="https://wa.me/905067876301" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-floral-primary text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-floral-primary-hover transition-colors duration-300"
          >
            WhatsApp'tan Ulaşın
          </a>
          
          {/* Instagram Butonu */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-transparent border border-floral-text text-floral-text px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-floral-text hover:text-white transition-colors duration-300"
          >
            Instagram'da Keşfedin
          </a>
        </motion.div>
      </div>
    </section>
  );
}