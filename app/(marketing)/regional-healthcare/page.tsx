import { RegionalHealthcarePage } from '../../../src/components/pages/RegionalHealthcarePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regional Healthcare IT Solutions',
  description: 'Specialized IT infrastructure solutions for regional healthcare providers. HIPAA-compliant systems, electronic health records, and medical device networking.',
  keywords: ['healthcare IT', 'HIPAA compliance', 'medical records', 'healthcare infrastructure', 'regional healthcare'],
  openGraph: {
    title: 'Regional Healthcare IT Solutions | Logical Front',
    description: 'HIPAA-compliant IT infrastructure for healthcare providers',
    url: '/regional-healthcare',
  },
}

export default function RegionalHealthcare() {
  return <RegionalHealthcarePage />
}