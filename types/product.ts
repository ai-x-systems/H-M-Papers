export type ProductCategory = "a4" | "blc" | "copymate" | "ppc";

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  description: string;
  gsm: number;
  unit: string;
  price: number;
  image: string;
  category: ProductCategory;
  featured: boolean;
}
