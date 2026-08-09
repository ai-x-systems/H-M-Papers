"use client";

import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";

export default function CartPage() {
  const { items, isHydrated } = useCart();

  if (!isHydrated) {
    return <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6" aria-hidden="true" />;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper-warm text-ink-soft">
          <PackageOpen size={26} strokeWidth={1.5} />
        </div>
        <h1 className="mt-6 font-serif text-2xl text-ink">
          Your cart is empty.
        </h1>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          Browse our paper products to start an order.
        </p>
        <Link
          href="/products"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-dark"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-serif text-3xl text-ink sm:text-4xl">Your Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-line bg-surface px-5 sm:px-6">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
