# H&M Papers — Client Demo Website

A demo site for H&M Papers showing the core customer journey:
**Home → Products → Product → Quantity → Add to Cart → Cart → Order on WhatsApp**

This is a sales demo, not the production e-commerce platform — no database,
accounts, or payment integration. See section 27 of the original brief for
what's intentionally out of scope.

## Run locally

```bash
npm install
cp .env.example .env.local   # then set your WhatsApp number
npm run dev
```

## Configure

- `config/site.ts` — business name, WhatsApp number, phone, email, Instagram
- `data/products.ts` — the product catalogue (currently 4 demo products)
- `.env.local` — `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, country code first)

## Deploy

Push to a GitHub repo and import it into Vercel — no extra configuration
needed. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in the Vercel project's
environment variables.

## Notes

- Product photography is placeholder SVG art (styled ream/label
  illustrations) since no real product photos were supplied — swap the
  `image` field in `data/products.ts` for real photos when ready.
- The logo badge is the actual H&M Papers artwork
  (`public/images/hm-papers-logo.png`).
