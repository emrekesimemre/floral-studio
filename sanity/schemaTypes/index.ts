import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product' // Yazdığımız şemayı içeri aktarıyoruz

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product], // Listeye ekliyoruz
}