import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import type { CartItem } from "@/context/CartContext";

/**
 * Builds the human-readable order message and the wa.me URL for it.
 * The customer still has to press "Send" inside WhatsApp — nothing here
 * sends anything automatically.
 */
export function buildWhatsAppOrderMessage(items: CartItem[]): string {
  const lines: string[] = [
    `Hello, I would like to place an order from ${siteConfig.businessName}:`,
    "",
  ];

  items.forEach((item, index) => {
    const lineTotal = item.product.price * item.quantity;
    lines.push(
      `${index + 1}. ${item.product.brand} ${item.product.name}`,
      `   ${item.product.gsm} GSM`,
      `   ${item.product.unit}`,
      `   Quantity: ${item.quantity}`,
      `   Unit Price: ${formatPrice(item.product.price)}`,
      `   Total: ${formatPrice(lineTotal)}`,
      ""
    );
  });

  const orderTotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  lines.push(
    `Order Total: ${formatPrice(orderTotal)}`,
    "",
    "Please confirm availability and delivery details."
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(items: CartItem[]): string {
  const message = buildWhatsAppOrderMessage(items);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * A general-purpose WhatsApp link (not tied to a cart) for use in the hero,
 * footer, and anywhere else a customer might reach out before adding items.
 */
export function buildWhatsAppGeneralUrl(): string {
  const message = `Hello, I'd like to know more about ${siteConfig.businessName}'s paper products.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
