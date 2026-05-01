"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // <-- Tıklama için Link'i ekledik!
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";

// Sanity'den gelecek ürünün veri tipini tanımlıyoruz
export type Product = {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource;
  slug: string; 
};

export default function FeaturedCollection({
  products,
}: {
  products: Product[];
}) {
  return (
    <section id="koleksiyon" className="py-24 bg-floral-bg">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light tracking-tight text-floral-text"
        >
          İmza{" "}
          <span className="text-floral-primary font-normal">Koleksiyon</span>
        </motion.h2>
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-12 pb-12">
        {products.map((item) => (
          // KARTLARI LINK İLE SARMALADIK VE DİNAMİK YÖNLENDİRMEYİ VERDİK:
          <Link 
            href={item.slug ? `/urun/${item.slug}` : `#`} 
            key={item._id} 
            className="snap-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-w-[85vw] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden group cursor-pointer bg-floral-accent/20"
            >
              {item.image && (
                <Image
                  src={urlFor(item.image)
                    .width(800)
                    .height(1200)
                    .fit("crop")
                    .url()}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-floral-text/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-2xl font-normal text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 font-light text-sm tracking-wide line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
        <div className="min-w-[2vw] md:min-w-[4vw] shrink-0" />
      </div>
    </section>
  );
}