import { MicrosoftAzurePage } from '../../../src/components/pages/MicrosoftAzurePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microsoft Azure Cloud Solutions',
  description: 'Expert Microsoft Azure implementation and management services. Azure Virtual Machines, SQL Database, Security Center, and Analytics.',
  keywords: ['Microsoft Azure', 'Azure cloud', 'Azure services', 'cloud migration', 'Azure management'],
  openGraph: {
    title: 'Microsoft Azure Cloud Solutions | Logical Front',
    description: 'Expert Microsoft Azure implementation and management',
    url: '/microsoft-azure',
  },
}

export default function MicrosoftAzure() {
  return <MicrosoftAzurePage />
}