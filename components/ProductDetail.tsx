"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/QuantitySelector";
import { formatPrice } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const lineTotal = product.price * quantity;

  function handleAdd() {
    addItem(product, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-seal-dark">
          {product.brand}
        </p>
        <h1 className="mt-1.5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-3 font-mono text-sm text-ink-soft">
          {product.gsm} GSM &middot; {product.unit}
        </p>
      </div>

      <p className="max-w-md text-sm leading-relaxed text-ink-soft">
        {product.description}
      </p>

      <div className="font-mono text-2xl font-semibold text-ink">
        {formatPrice(product.price)}
        <span className="ml-1.5 text-sm font-normal text-ink-soft">
          / {product.unit.toLowerCase()}
        </span>
      </div>

      <div className="border-t border-line pt-6">
        <span className="mb-2.5 block text-sm font-medium text-ink">
          Quantity
        </span>
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
      </div>

      <div className="rounded-lg border border-line bg-paper-warm px-4 py-3">
        <p className="font-mono text-sm text-ink">
          {formatPrice(product.price)} &times; {quantity} ={" "}
          <span className="font-semibold">{formatPrice(lineTotal)}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-dark sm:w-auto sm:px-8"
      >
        {justAdded ? (
          <>
            <Check size={17} strokeWidth={2.25} />
            Added to cart
          </>
        ) : (
          <>
            <ShoppingCart size={17} strokeWidth={2} />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
}
