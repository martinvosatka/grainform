import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  style: ['italic'],
  weight: ['400'],
  variable: '--font-roboto',
  display: 'swap',
})

const baseUrl = 'https://grainform.cz'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Grainform – Práce s kamenem a dřevem | Benešov u Prahy',
  description:
    'Řemeslné práce s kamenem a dřevem – suché kamenné zídky, opěrné zdi, klenby, dřevěné sochy a nábytek na míru. Krystof Jung, Benešov u Prahy. Realizace po celém Středočeském kraji.',
  keywords: [
    'suché kamenné zídky',
    'práce s kamenem',
    'práce se dřevem',
    'kamenné opěrné zdi',
    'kamenné schody',
    'dřevěné sochy',
    'dřevěný nábytek na míru',
    'stoly z jednoho kusu',
    'řemeslné práce',
    'workshop suché zdění',
    'Benešov u Prahy',
    'Středočeský kraj',
    'Grainform',
  ],
  alternates: { canonical: baseUrl },
  openGraph: {
    title: 'Grainform – Práce s kamenem a dřevem | Benešov u Prahy',
    description:
      'Řemeslné práce s kamenem a dřevem – suché kamenné zídky, opěrné zdi, dřevěné sochy a nábytek na míru. Benešov u Prahy.',
    url: baseUrl,
    siteName: 'Grainform',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/images/hero-photo-1.png',
        width: 1200,
        height: 630,
        alt: 'Grainform – práce s kamenem a dřevem, Benešov u Prahy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grainform – Práce s kamenem a dřevem',
    description:
      'Řemeslné práce s kamenem a dřevem – suché kamenné zídky, opěrné zdi, dřevěné sochy a nábytek na míru. Benešov u Prahy.',
    images: ['/images/hero-photo-1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Grainform',
  description:
    'Řemeslné práce s kamenem a dřevem – suché kamenné zídky, opěrné zdi, klenby, dřevěné sochy a nábytek na míru.',
  email: 'grainform@seznam.cz',
  url: baseUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Benešov u Prahy',
    addressRegion: 'Středočeský kraj',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.7818,
    longitude: 14.6862,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.7818,
      longitude: 14.6862,
    },
    geoRadius: '150000',
  },
  sameAs: [
    'https://www.facebook.com/p/Such%C3%A9-kamenn%C3%A9-z%C3%ADdky-workshop-61574753138031/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Řemeslné služby',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suché kamenné zídky' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opěrné zdi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kamenné schody a klenby' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dřevěné sochy a nábytek na míru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workshop suchého zdění' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
