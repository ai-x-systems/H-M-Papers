/**
 * Central business configuration.
 *
 * Every business-identifying value used across the UI is read from here.
 * Update this file when moving from the demo to the client's real details —
 * nothing else in the codebase should need to change.
 */
export const siteConfig = {
  businessName: "H&M Papers",
  tagline: "Deals in all sorts of paper and printing.",
  description:
    "Explore H&M Papers paper products and place your order directly through WhatsApp.",
  logo: {
    src: "/images/hm-papers-logo.png",
    alt: "H&M Papers logo",
  },
  // Digits only, country code first, no spaces or symbols — e.g. 923001234567
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923001234567",
  phone: "+92 300 1234567",
  email: "orders@hmpapers.pk",
  // Leave empty until the client supplies their real Instagram handle/URL.
  instagramUrl: "",
  address: "Karachi, Pakistan",
  year: new Date().getFullYear(),
} as const;
