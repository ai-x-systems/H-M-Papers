import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export function Hero() {
  const whatsappHref = buildWhatsAppGeneralUrl();

  return (
    <section className="relative overflow-hidden bg-ink-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-seal">
            {siteConfig.businessName}
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Quality Paper.
            <br />
            Simple Ordering.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Explore our paper products and place your order directly through
            WhatsApp.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-seal px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-seal-dark hover:text-paper"
            >
              Browse Products
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block" aria-hidden="true">
          <RaneStackIllustration />
        </div>
      </div>
    </section>
  );
}

/** Decorative fanned-ream illustration — the hero's signature visual. */
function RaneStackIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full"
      role="presentation"
      focusable="false"
    >
      <g opacity="0.9">
        <rect x="60" y="150" width="200" height="120" rx="3" fill="#1F2E4F" stroke="#3A4A6E" />
        <rect x="50" y="132" width="200" height="120" rx="3" fill="#233657" stroke="#3A4A6E" />
        <rect x="40" y="112" width="200" height="120" rx="3" fill="#293F65" stroke="#3A4A6E" />
        <rect x="40" y="150" width="200" height="34" fill="#B9791E" />
        <text
          x="140"
          y="171"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="15"
          fontWeight="600"
          fill="#0F1A2E"
        >
          H&amp;M PAPERS
        </text>
        <text
          x="140"
          y="186"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="9.5"
          letterSpacing="1.5"
          fill="#0F1A2E"
        >
          A4 &#183; 80 GSM &#183; 1 REAM
        </text>
      </g>
    </svg>
  );
}
