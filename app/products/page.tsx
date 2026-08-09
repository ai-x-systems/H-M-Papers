import type { Metadata } from "next";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Products — ${siteConfig.businessName}`,
  description: "Browse H&M Papers' paper products and add them to your cart.",
};

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = typeof params.category === "string" ? params.category : "all";
  const activeCategory = categories.some((c) => c.id === categoryParam)
    ? categoryParam
    : "all";

  const products = getProductsByCategory(activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="font-serif text-3xl text-ink sm:text-4xl">
          Paper Products
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Everyday paper essentials for the office, classroom, and print shop.
          Add what you need to your cart and send the order on WhatsApp.
        </p>
      </header>

      <div className="mt-8">
        <CategoryNav active={activeCategory} />
      </div>

      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
