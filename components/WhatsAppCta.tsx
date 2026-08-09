import { MessageCircle } from "lucide-react";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export function WhatsAppCta() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start gap-6 rounded-xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              Ready to order?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              Build your order in the cart, then send it to us on WhatsApp —
              we&apos;ll confirm availability and delivery details.
            </p>
          </div>
          <a
            href={buildWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-seal px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-seal-dark hover:text-paper"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
