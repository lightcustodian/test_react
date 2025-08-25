import { AboutUsPageFixed } from '../../../src/components/pages/AboutUsPageFixed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Logical Front, Arkansas IT infrastructure provider with expertise in education, healthcare, and manufacturing technology solutions.',
  keywords: ['about Logical Front', 'Arkansas IT company', 'IT expertise', 'technology team'],
  openGraph: {
    title: 'About Us | Logical Front',
    description: 'Arkansas IT infrastructure provider with deep industry expertise',
    url: '/about-us',
  },
}

export default function AboutUs() {
  return <AboutUsPageFixed />
}