import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    description,
    price,
    category,
    image
  }`;

  const product = await client.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9F8F6]"> {/* Zemin rengini ana sayfa ile uyumlu krem yaptık */}
      
      {/* Üst Navigasyon - Marka Bütünlüğü Sağlandı */}
      <nav className="w-full px-6 py-10 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-800 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Koleksiyona Dön
        </Link>
        <Link href="/" className="text-xl md:text-2xl font-light tracking-widest text-zinc-900">
          S A Y E <span className="text-floral-primary font-normal">.</span>
        </Link>
      </nav>

      {/* Ürün Detay Bölümü */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-16 flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start">
        
        {/* Sol Taraf: Görsel */}
        <div className="w-full md:w-1/2 relative h-[45vh] md:h-[75vh] rounded-2xl md:rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-black/5">
          {product.image && (
            <Image 
              src={urlFor(product.image)
                .width(1200)
                .height(1600)
                .fit("crop")
                .url()} 
              alt={product.title} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Sağ Taraf: Tipografi ve Bilgiler */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pt-10">
          
          {/* Kategori */}
          {product.category && (
            <span className="text-[10px] md:text-[11px] text-zinc-400 font-medium tracking-[0.3em] uppercase mb-4 block">
              {product.category.replace("-", " ")}
            </span>
          )}
          
          {/* Başlık - capitalize eklendi */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tighter text-zinc-900 mb-6 capitalize leading-[1.1]">
            {product.title}
          </h1>

          {/* Fiyat */}
          {product.price && (
            <div className="text-2xl md:text-3xl font-light text-zinc-800 mb-8 flex items-baseline gap-1">
              {product.price} <span className="text-sm text-zinc-400 font-normal tracking-widest">₺</span>
            </div>
          )}

          {/* Ayırıcı Çizgi */}
          <div className="w-16 h-[1px] bg-zinc-200 mb-8" />

          {/* Açıklama - Daha ferah satır aralıkları */}
          <p className="text-[14px] md:text-[15px] text-zinc-500 font-light leading-[2.2em] mb-12 whitespace-pre-wrap max-w-lg">
            {product.description}
          </p>

          {/* Aksiyon Butonu - Siyah Premium Buton */}
          <a 
            href={`https://wa.me/905067876301?text=${encodeURIComponent(`Merhaba, "${product.title}" tasarımı hakkında bilgi almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-zinc-800 shadow-xl shadow-zinc-900/10 transition-all duration-300 text-center block"
          >
            Bilgi Al / Sipariş Ver
          </a>
        </div>
      </div>
    </main>
  );
}