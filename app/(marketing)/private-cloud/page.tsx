import { PrivateCloudPage } from '../../../src/components/pages/PrivateCloudPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Cloud Solutions',
  description: 'Secure private cloud infrastructure with primary datacenter services, backup solutions, disaster recovery, and desktop-as-a-service.',
  keywords: ['private cloud', 'datacenter services', 'backup as a service', 'disaster recovery', 'desktop as a service'],
  openGraph: {
    title: 'Private Cloud Solutions | Logical Front',
    description: 'Secure private cloud infrastructure solutions',
    url: '/private-cloud',
  },
}

export default function PrivateCloud() {
  return <PrivateCloudPage />
}