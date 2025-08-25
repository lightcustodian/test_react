import { IndustriesPage } from '../../../src/components/pages/IndustriesPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Logical Front provides specialized IT infrastructure solutions for education, healthcare, manufacturing, and business sectors across Arkansas.',
  keywords: ['education IT', 'healthcare IT', 'manufacturing IT', 'business IT', 'K-12 schools', 'higher education'],
  openGraph: {
    title: 'Industries We Serve | Logical Front',
    description: 'Specialized IT infrastructure solutions for multiple industries',
    url: '/industries',
  },
}

export default function Industries() {
  return <IndustriesPage />
}