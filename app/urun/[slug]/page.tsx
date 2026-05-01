import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 0;

// 1. Next.js 15+ kuralı: params artık bir Promise olmak zorunda
export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Önce params'ı await ile çözümlüyoruz (İşte patlayan yer burasıydı)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 3. Artık güvenle slug değişkenini kullanabiliriz
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    description,
    price,
    category,
    "imageUrl": image.asset->url
  }`;

  const product = await client.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="w-full px-6 py-8 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-floral-text/60 hover:text-floral-primary transition-colors text-sm font-medium tracking-wider flex items-center gap-2">
          <span>&larr;</span> Koleksiyona Dön
        </Link>
        <div className="text-xl font-light tracking-widest text-floral-text">
          S T U D I O <span className="text-floral-primary font-normal">.</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden bg-floral-bg">
          {product.imageUrl && (
            <Image 
              src={product.imageUrl} 
              alt={product.title} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {product.category && (
            <span className="text-sm text-floral-primary font-medium tracking-widest uppercase mb-4 block">
              {product.category.replace("-", " ")}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-floral-text mb-6">
            {product.title}
          </h1>

          {product.price && (
            <div className="text-2xl text-floral-text mb-8">
              {product.price} <span className="text-lg text-floral-text/60">₺</span>
            </div>
          )}

          <div className="w-12 h-[1px] bg-floral-text/20 mb-8" />

          <p className="text-lg text-floral-text/70 font-light leading-relaxed mb-12 whitespace-pre-wrap">
            {product.description}
          </p>

          <a 
            href={`https://wa.me/905555555555?text=Merhaba, "${product.title}" tasarımı hakkında bilgi almak istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-floral-primary text-white px-10 py-5 rounded-full text-sm font-medium tracking-wide hover:bg-floral-primary-hover transition-colors duration-300 w-full md:w-max"
          >
            Bilgi Al / Sipariş Ver
          </a>
        </div>
      </div>
    </main>
  );
}