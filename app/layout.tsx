import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Logical Front',
    default: 'Logical Front - Infrastructure Solutions',
  },
  description: 'Arkansas-based IT infrastructure solutions provider specializing in private cloud, on-premise, and Microsoft Azure services for education, healthcare, and manufacturing.',
  keywords: ['IT infrastructure', 'private cloud', 'Arkansas', 'Microsoft Azure', 'data center', 'education IT', 'healthcare IT'],
  authors: [{ name: 'Logical Front' }],
  creator: 'Logical Front',
  metadataBase: new URL('https://logicalfront.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logicalfront.com',
    title: 'Logical Front - Infrastructure Solutions',
    description: 'Arkansas-based IT infrastructure solutions provider',
    siteName: 'Logical Front',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logical Front - Infrastructure Solutions',
    description: 'Arkansas-based IT infrastructure solutions provider',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}