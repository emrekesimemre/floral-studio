import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import Story from "../components/Story";
import { client } from "../sanity/lib/client"; // Sanity bağlantımız
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DesignYourOwn from "@/components/DesignYourOwn";

// Sayfaya her girildiğinde en güncel veriyi çekmesi için önbelleği (cache) devredışı bırakıyoruz
export const revalidate = 0; 

export default async function Home() {
  // GROQ Sorgusu: Veritabanından product tipindeki verileri çek,
  // fotoğrafın crop/hotspot bilgisini korumak için image objesini getir.
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "slug": slug.current, // Slug bilgisini de veritabanından çekiyoruz
    image
  }`;

  // Sunucu tarafında ışık hızında veriyi çekiyoruz
  const products = await client.fetch(query);

  return (
    <>
      <main>
        <Hero />
      </main>
      {/* Çektiğimiz verileri props olarak galerimize gönderiyoruz */}
      <FeaturedCollection products={products} />
      <Story />
      <DesignYourOwn />
      <Contact />
      <Footer />
    </>
  );
}