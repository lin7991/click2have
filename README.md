# Click2Have H5 Demo

Click2Have is a simulated shopping H5 experience for entertainment only.

## Current Version

This first version is a zero-dependency static H5 demo. It includes:

- Home product feed
- Product detail
- Variant selection
- Cart
- Zero-cost simulated checkout
- Order success animation
- Simulated tracking timeline
- ClickCash wallet ledger
- Local browser persistence
- Mobile-first responsive layout

No real payment, shipping, user account, database, or AI generation is connected in this version.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.

Example:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default static deployment settings.
4. Add `click2have.com` and `www.click2have.com` in Vercel project domains.
5. Update DNS records in the domain provider or Cloudflare based on Vercel's instructions.

## Demo Boundary

This version is designed for public concept demos. Data is stored in the visitor's browser using `localStorage`, so each visitor has their own local cart, wallet, and order history.

