"use client";

import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

export function CartSummary() {
  const { items, subtotal } = useCart();

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-lg text-ink">Order Summary</h2>

      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Subtotal</dt>
          <dd className="font-mono text-ink">{formatPrice(subtotal)}</dd>
        </div>
      </dl>

      <div className="mt-4 flex justify-between border-t border-line pt-4">
        <span className="font-medium text-ink">Total</span>
        <span className="font-mono text-lg font-semibold text-ink">
          {formatPrice(subtotal)}
        </span>
      </div>

      <a
        href={buildWhatsAppUrl(items)}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={items.length === 0}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-seal px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-seal-dark hover:text-paper aria-disabled:pointer-events-none aria-disabled:opacity-40"
      >
        <MessageCircle size={17} strokeWidth={2} />
        Order on WhatsApp
      </a>
      <p className="mt-3 text-center text-xs text-ink-soft">
        Opens WhatsApp with your order pre-filled — just press send.
      </p>
    </div>
  );
}
