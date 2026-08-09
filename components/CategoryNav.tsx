import Link from "next/link";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

export function CategoryNav({ active = "all" }: { active?: string }) {
  return (
    <nav aria-label="Product categories" className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const isActive = category.id === active;
        return (
          <Link
            key={category.id}
            href={category.id === "all" ? "/products" : `/products?category=${category.id}`}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-line bg-surface text-ink-soft hover:border-ink hover:text-ink"
            )}
            aria-current={isActive ? "true" : undefined}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}
