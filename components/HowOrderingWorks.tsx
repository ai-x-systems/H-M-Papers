import { Package, ShoppingCart, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Choose your paper",
    description: "Browse products, pick a quantity, and add them to your cart.",
  },
  {
    icon: ShoppingCart,
    title: "Review your order",
    description: "Check quantities and totals on the cart page before sending.",
  },
  {
    icon: MessageCircle,
    title: "Send it on WhatsApp",
    description: "One tap fills in your order details — you just hit send.",
  },
];

export function HowOrderingWorks() {
  return (
    <section className="border-b border-line bg-paper-warm">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          How ordering works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-surface text-ink">
                  <step.icon size={18} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-ink-soft">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
