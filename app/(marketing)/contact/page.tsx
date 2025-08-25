import { ContactPage } from '../../../src/components/pages/ContactPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Logical Front for your IT infrastructure needs. Located in Arkansas, serving the region with expert technology solutions.',
  keywords: ['contact Logical Front', 'Arkansas IT support', 'get quote', 'technology consultation'],
  openGraph: {
    title: 'Contact Us | Logical Front',
    description: 'Get in touch for your IT infrastructure needs',
    url: '/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}