import { SolutionsPage } from '../../../src/components/pages/SolutionsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Solutions & Services',
  description: 'Comprehensive IT solutions including private cloud, on-premise infrastructure, Microsoft Azure, and AI automation services.',
  keywords: ['IT solutions', 'private cloud', 'on-premise', 'Microsoft Azure', 'AI automation', 'data center'],
  openGraph: {
    title: 'IT Solutions & Services | Logical Front',
    description: 'Comprehensive IT solutions for your business needs',
    url: '/solutions',
  },
}

export default function Solutions() {
  return <SolutionsPage />
}