import { HomePage } from '../src/components/pages/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Logical Front provides comprehensive IT infrastructure solutions including private cloud, on-premise, and Microsoft Azure services for Arkansas businesses.',
  keywords: ['IT solutions', 'private cloud', 'Microsoft Azure', 'Arkansas IT', 'infrastructure'],
  openGraph: {
    title: 'Logical Front - Infrastructure Solutions',
    description: 'Comprehensive IT infrastructure solutions for Arkansas businesses',
    url: '/',
  },
}

export default function Home() {
  return <HomePage />
}