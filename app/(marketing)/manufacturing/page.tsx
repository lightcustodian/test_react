import { ManufacturingPage } from '../../../src/components/pages/ManufacturingPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing IT Solutions',
  description: 'Industrial IT infrastructure for manufacturing operations. Industrial IoT, automation systems, and production network infrastructure.',
  keywords: ['manufacturing IT', 'industrial automation', 'IoT systems', 'production networks', 'industrial infrastructure'],
  openGraph: {
    title: 'Manufacturing IT Solutions | Logical Front',
    description: 'Industrial IT infrastructure for manufacturing operations',
    url: '/manufacturing',
  },
}

export default function Manufacturing() {
  return <ManufacturingPage />
}