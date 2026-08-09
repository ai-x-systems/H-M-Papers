"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  label?: string;
}

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  label = "Quantity",
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-surface">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-warm disabled:cursor-not-allowed disabled:opacity-30"
        aria-label={`Decrease ${label.toLowerCase()}`}
      >
        <Minus size={16} strokeWidth={2} />
      </button>
      <span
        className="w-10 text-center font-mono text-base tabular-nums text-ink"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-warm"
        aria-label={`Increase ${label.toLowerCase()}`}
      >
        <Plus size={16} strokeWidth={2} />
      </button>
    </div>
  );
}
