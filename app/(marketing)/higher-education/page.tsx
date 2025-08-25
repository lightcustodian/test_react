import { HigherEducationPage } from '../../../src/components/pages/HigherEducationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Higher Education IT Solutions',
  description: 'Comprehensive IT infrastructure solutions for colleges and universities. Private cloud, data center modernization, and educational technology support.',
  keywords: ['higher education IT', 'university IT', 'college technology', 'educational infrastructure', 'campus IT'],
  openGraph: {
    title: 'Higher Education IT Solutions | Logical Front',
    description: 'IT infrastructure solutions for colleges and universities',
    url: '/higher-education',
  },
}

export default function HigherEducation() {
  return <HigherEducationPage />
}