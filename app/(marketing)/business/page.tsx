import { BusinessPage } from '../../../src/components/pages/BusinessPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business IT Solutions',
  description: 'Comprehensive IT infrastructure solutions for Arkansas businesses. Cloud services, network infrastructure, and business continuity planning.',
  keywords: ['business IT', 'Arkansas business', 'cloud services', 'network infrastructure', 'business continuity'],
  openGraph: {
    title: 'Business IT Solutions | Logical Front',
    description: 'Comprehensive IT infrastructure for Arkansas businesses',
    url: '/business',
  },
}

export default function Business() {
  return <BusinessPage />
}