"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/QuantitySelector";
import { formatPrice } from "@/lib/utils";

export function CartItem({ item }: { item: CartItemType }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  const lineTotal = product.price * quantity;

  return (
    <div className="flex gap-4 border-b border-line py-5 last:border-b-0">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-line bg-paper-warm sm:h-24 sm:w-24"
      >
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="96px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-seal-dark">
            {product.brand}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-base text-ink sm:text-lg">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 font-mono text-xs text-ink-soft">
            {product.gsm} GSM &middot; {product.unit} &middot;{" "}
            {formatPrice(product.price)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
          <QuantitySelector
            quantity={quantity}
            onChange={(next) => {
              if (next > quantity) increaseQuantity(product.id);
              else decreaseQuantity(product.id);
            }}
          />
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-ink">
              {formatPrice(lineTotal)}
            </span>
            <button
              type="button"
              onClick={() => removeItem(product.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-warm hover:text-ink"
              aria-label={`Remove ${product.name} from cart`}
            >
              <Trash2 size={15} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
