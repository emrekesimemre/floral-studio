"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

export interface SanityProduct {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: any; 
}

export default function FeaturedCollection({ products }: { products: SanityProduct[] }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  if (!products || products.length === 0) {
    return (
      <section id="koleksiyon" className="py-32 bg-[#F9F8F6] text-center">
        <p className="text-zinc-500 font-light">Koleksiyon verileri yükleniyor veya henüz eklenmedi...</p>
      </section>
    );
  }

  return (
    <section id="koleksiyon" className="py-24 md:py-32 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık Alanı */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-medium">
            Saye Bloom Seçkisi
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">
            İmza <span className="text-floral-primary italic font-serif">Koleksiyon</span>
          </h2>
        </motion.div>

        {/* 
            Kritik Değişiklik Burası: 
            Mobilde flex + yatay scroll (overflow-x-auto), masaüstünde grid.
            -mx-6 ve px-6 ile scroll'un ekranın dışına kadar taşmasını sağladık.
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 md:gap-12 pb-10 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {products.map((item) => (
            <motion.div 
              variants={itemVariants} 
              key={item._id}
              // Mobilde %85 genişlik (yandaki kartın ucu görünsün), masaüstünde normal (min-w-0)
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0"
            >
              <Link 
                href={`/urun/${item.slug}`} 
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm mb-6 md:mb-8">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <h3 className="text-[13px] md:text-[14px] font-medium tracking-[0.2em] text-zinc-900 uppercase mb-3 transition-colors duration-300 group-hover:text-floral-primary">
                    {item.title}
                  </h3>
                  <p className="text-[12px] font-light tracking-widest text-zinc-500 italic">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}