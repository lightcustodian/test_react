import { K12SchoolsPage } from '../../../src/components/pages/K12SchoolsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'K-12 School IT Solutions',
  description: 'IT infrastructure solutions designed for K-12 schools. Student information systems, network infrastructure, and educational technology support.',
  keywords: ['K-12 IT', 'school technology', 'student information systems', 'school network', 'educational IT'],
  openGraph: {
    title: 'K-12 School IT Solutions | Logical Front',
    description: 'IT infrastructure solutions for K-12 schools',
    url: '/k12-schools',
  },
}

export default function K12Schools() {
  return <K12SchoolsPage />
}