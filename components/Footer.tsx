import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Üst Kısım: 3 Sütunlu Izgara */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* 1. Sütun: Marka Kimliği */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start gap-8">
            <Link href="/" className="relative w-32 h-16 md:w-36 md:h-20 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="Saye Bloom Logo"
                fill
                className="object-contain object-center md:object-left mix-blend-multiply" 
              />
            </Link>
            <p className="text-[12px] font-light text-zinc-500 tracking-widest text-center md:text-left max-w-sm leading-relaxed">
              Zarafetin yeni formu. <br />
              Modern ve minimalist çiçek tasarımları, kişiye özel atölye hizmetleri.
            </p>
          </div>

          {/* 2. Sütun: Menü */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-5 mt-4 md:mt-0">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-900 mb-2">Keşfet</h3>
            <Link href="#koleksiyon" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">Koleksiyon</Link>
            <Link href="#tasarla" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">Tasarla</Link>
            <Link href="#hikaye" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">Hikayemiz</Link>
          </div>

          {/* 3. Sütun: İletişim */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-5 mt-4 md:mt-0">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-900 mb-2">İletişim</h3>
            <a href="https://wa.me/905067876301" target="_blank" rel="noopener noreferrer" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">
              WhatsApp
            </a>
            <a href="https://instagram.com/sayebloom" target="_blank" rel="noopener noreferrer" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">
              Instagram
            </a>
            <a href="mailto:hello@sayebloom.com" className="text-[12px] font-light tracking-[0.2em] text-zinc-500 hover:text-floral-primary hover:translate-x-1 transition-all">
              E-Posta
            </a>
          </div>
        </div>

        {/* Alt Kısım: Çizgi, Telif Hakkı ve Lokasyon */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-medium text-zinc-400 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Saye Bloom. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-floral-primary animate-pulse" />
            <p className="text-[10px] font-medium text-zinc-400 tracking-[0.2em] uppercase">
              Balıkesir / Türkiye
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}