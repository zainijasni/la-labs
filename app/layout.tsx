import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Labs — Innovation Connected',
  description: 'La Labs menghadirkan produk digital inovatif untuk perniagaan Malaysia. Dari sistem penggajian hingga pengurusan pelajar — semua dalam satu ekosistem.',
  keywords: 'La Labs, Jana Mega Global, GajIla, sistem penggajian Malaysia, produk digital Malaysia',
  openGraph: {
    title: 'La Labs — Innovation Connected',
    description: 'Produk digital inovatif untuk perniagaan Malaysia.',
    url: 'https://la-labs.my',
    siteName: 'La Labs',
    locale: 'ms_MY',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
