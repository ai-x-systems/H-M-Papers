import Link from "next/link";
import { MessageCircle, Phone, Camera } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-dark text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={40} onDark />
              <span className="font-serif text-lg font-semibold tracking-tight text-paper">
                H&amp;M Papers
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-paper/50">
              Site
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-paper/80 hover:text-paper">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-paper/80 hover:text-paper">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-paper/80 hover:text-paper">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-paper/50">
              Contact
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={buildWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-paper/80 hover:text-paper"
                >
                  <MessageCircle size={15} strokeWidth={1.75} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-paper/80 hover:text-paper"
                >
                  <Phone size={15} strokeWidth={1.75} />
                  {siteConfig.phone}
                </a>
              </li>
              {siteConfig.instagramUrl && (
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-paper/80 hover:text-paper"
                  >
                    <Camera size={15} strokeWidth={1.75} />
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6 text-xs text-paper/50">
          © {siteConfig.year} {siteConfig.businessName}
        </div>
      </div>
    </footer>
  );
}
