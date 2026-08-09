import type { Product } from "@/types/product";

/**
 * Demo product catalogue.
 *
 * These four products and their prices are for demonstration purposes only
 * and are not confirmed client pricing. When the client is ready, replace
 * the contents of this array with their real product data — every product
 * card, detail page, and cart line reads from here.
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "blc-a4-copy-paper-70gsm",
    brand: "BLC",
    name: "BLC A4 Copy Paper",
    description:
      "A dependable everyday copy paper for general office printing and copying. Smooth finish, consistent opacity, and reliable feed through printers and copiers.",
    gsm: 70,
    unit: "1 Rim",
    price: 2300,
    image: "/products/blc-70.svg",
    category: "blc",
    featured: true,
  },
  {
    id: "2",
    slug: "blc-a4-copy-paper-80gsm",
    brand: "BLC",
    name: "BLC A4 Copy Paper",
    description:
      "A heavier 80 GSM stock from BLC, suited to documents that call for a slightly firmer, more premium feel — reports, presentations, and letterheads.",
    gsm: 80,
    unit: "1 Rim",
    price: 2500,
    image: "/products/blc-80.svg",
    category: "blc",
    featured: true,
  },
  {
    id: "3",
    slug: "copymate-a4-paper-80gsm",
    brand: "CopyMate",
    name: "CopyMate A4 Paper",
    description:
      "CopyMate's 80 GSM A4 paper offers bright, consistent whiteness for crisp black-and-white and colour printing across office and school use.",
    gsm: 80,
    unit: "1 Rim",
    price: 2400,
    image: "/products/copymate-80.svg",
    category: "copymate",
    featured: true,
  },
  {
    id: "4",
    slug: "ppc-a4-copy-paper-80gsm",
    brand: "PPC",
    name: "PPC A4 Copy Paper",
    description:
      "An 80 GSM all-purpose paper from PPC, built for high-volume printing environments that need steady quality, rim after rim.",
    gsm: 80,
    unit: "1 Rim",
    price: 2450,
    image: "/products/ppc-80.svg",
    category: "ppc",
    featured: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  // Every demo product is an A4 paper, so "all" and "a4" both show the full set.
  // BLC / CopyMate / PPC narrow down to that brand.
  if (category === "all" || category === "a4") return products;
  return products.filter((product) => product.category === category);
}

export const categories: { id: Product["category"] | "all"; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "a4", label: "A4 Paper" },
  { id: "blc", label: "BLC" },
  { id: "copymate", label: "CopyMate" },
  { id: "ppc", label: "PPC" },
];
