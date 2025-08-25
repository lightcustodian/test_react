import { CaseStudiesPage } from '../../../src/components/pages/CaseStudiesPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world success stories from our clients including UAMS, ASU Mid-South, and other Arkansas organizations.',
  keywords: ['case studies', 'client success', 'UAMS', 'ASU Mid-South', 'project examples'],
  openGraph: {
    title: 'Case Studies | Logical Front',
    description: 'Real-world success stories from our clients',
    url: '/case-studies',
  },
}

export default function CaseStudies() {
  return <CaseStudiesPage />
}