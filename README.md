# Grainform – Webová stránka

Next.js 15 webová stránka pro Grainform, řemeslnou dílnu specializující se na suché kamenné zídky a dřevěné konstrukce.

## Požadavky

- Node.js 18+
- npm

## Lokální spuštění

```bash
npm install
npm run dev
```

Stránka běží na [http://localhost:3000](http://localhost:3000).

## Build a produkce

```bash
npm run build
npm start
```

## Deployment na Vercel

1. Pushni kód na GitHub
2. Importuj repozitář na [vercel.com](https://vercel.com)
3. Vercel automaticky detekuje Next.js a nastaví build příkaz
4. Po deployi nastav vlastní doménu `grainform.cz` v nastavení projektu

## Struktura projektu

```
grainform-web/
├── app/
│   ├── globals.css       ← globální styly, Tailwind direktivy
│   ├── layout.tsx        ← SEO metadata, fonty, JSON-LD schema
│   └── page.tsx          ← skládá všechny sekce
├── components/
│   ├── Navbar.tsx        ← navigace, aktivní sekce (IntersectionObserver)
│   ├── Hero.tsx          ← hero sekce s koláží obrázků
│   ├── Gallery.tsx       ← horizontální galerie, lightbox, drag & drop
│   ├── StoneWork.tsx     ← sekce kamenných prací
│   ├── WoodWork.tsx      ← sekce dřevěných prací
│   ├── Workshop.tsx      ← sekce workshop
│   ├── About.tsx         ← o nás
│   ├── Pricelist.tsx     ← odkaz na ceník PDF
│   ├── Contact.tsx       ← kontaktní informace
│   ├── FAQ.tsx           ← accordion s 10 otázkami
│   └── Footer.tsx        ← patička, sociální sítě
├── public/
│   ├── images/           ← všechny fotografie
│   ├── pricelist.pdf     ← ceník
│   ├── sitemap.xml
│   └── robots.txt
└── README.md
```

## Aktualizace obsahu

| Co aktualizovat | Kde |
|---|---|
| Ceník | Nahraď `/public/pricelist.pdf` |
| Fotografie | Nahraď soubory v `/public/images/` |
| FAQ otázky | Pole `faqs` v `components/FAQ.tsx` |
| Kontaktní údaje | `components/Contact.tsx` |
| SEO metadata | `app/layout.tsx` |
| Doménová URL | Proměnná `baseUrl` v `app/layout.tsx` a `public/sitemap.xml` |
| Facebook odkaz | `components/Footer.tsx` |
