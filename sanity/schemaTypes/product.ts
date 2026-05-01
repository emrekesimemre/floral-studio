import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Koleksiyon Ürünleri', // Panelde eşinin göreceği başlık
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ürün Adı',
      type: 'string',
      validation: (rule) => rule.required().error('Ürün adı girmek zorunludur.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Uzantısı (Slug)',
      description: 'Sitede ürünün linki olacak (örn: cicek-buketi). Generate butonuna basarak otomatik oluşturabilirsiniz.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: {
        hotspot: true, // Eşinin fotoğrafın odak noktasını (crop) panelden seçebilmesini sağlar
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Gelin Buketi', value: 'gelin-buketi' },
          { title: 'Masa Aranjmanı', value: 'masa-aranjmani' },
          { title: 'Kurutulmuş Tasarım', value: 'kurutulmus-tasarim' },
          { title: 'Özel Sipariş', value: 'ozel-siparis' },
        ],
        layout: 'radio', // Dropdown yerine şık seçim butonları olarak gösterir
      },
    }),
    defineField({
      name: 'price',
      title: 'Fiyat (₺)',
      type: 'number',
      description: 'İsteğe bağlı. Sadece fiyatı belli olan standart ürünler için girin.',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text', // İleride bunu rich-text (kalın, italik yazılabilen) formata da çevirebiliriz
      rows: 4,
    }),
  ],
})