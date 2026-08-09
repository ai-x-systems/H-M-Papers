"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-shadow hover:shadow-[0_2px_16px_-4px_rgba(22,35,63,0.14)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square bg-paper-warm"
      >
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}, ${product.gsm} GSM`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-seal-dark">
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg leading-snug text-ink">
            {product.name}
          </h3>
        </Link>
        <p className="font-mono text-xs text-ink-soft">
          {product.gsm} GSM &middot; {product.unit}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-mono text-base font-semibold text-ink">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-paper transition-colors hover:bg-ink-dark disabled:cursor-default"
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check size={14} strokeWidth={2.5} />
                Added
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={2.5} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
