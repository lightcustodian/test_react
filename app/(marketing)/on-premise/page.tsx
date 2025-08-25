import { OnPremisePage } from '../../../src/components/pages/OnPremisePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Premise IT Solutions',
  description: 'Complete on-premise infrastructure solutions including data center modernization, servers, storage, virtual desktops, and security systems.',
  keywords: ['on-premise IT', 'data center modernization', 'servers', 'storage', 'virtual desktops', 'IT security'],
  openGraph: {
    title: 'On-Premise IT Solutions | Logical Front',
    description: 'Complete on-premise infrastructure solutions',
    url: '/on-premise',
  },
}

export default function OnPremise() {
  return <OnPremisePage />
}