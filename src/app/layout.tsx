import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: "Sarthak Dangwal",
  description: "Building fun things on the internet",
  metadataBase: new URL('https://sarthakdangwal.com'),
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://sarthakdangwal.com',
    title: "Sarthak Dangwal",
    description: "Building fun things on the internet",
    siteName: 'Sarthak Dangwal',
    images: ["https://sarthakdangwal.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Dangwal",
    description: "Building fun things on the internet",
    images: ["https://sarthakdangwal.com/og-image.png"],
    creator: '@sarthakdangwal',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="text-gray-900">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
