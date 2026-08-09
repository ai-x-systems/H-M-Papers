import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BusinessIntro } from "@/components/BusinessIntro";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { HowOrderingWorks } from "@/components/HowOrderingWorks";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { getAllProducts } from "@/data/products";

export default function HomePage() {
  const featured = getAllProducts().filter((product) => product.featured);

  return (
    <>
      <Hero />
      <BusinessIntro />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                Featured paper products
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                A snapshot of what&apos;s available — see the full catalogue
                for more.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-seal-dark"
            >
              View all products
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-8">
            <CategoryNav />
          </div>

          <div className="mt-8">
            <ProductGrid products={featured} />
          </div>
        </div>
      </section>

      <HowOrderingWorks />
      <WhatsAppCta />
    </>
  );
}
