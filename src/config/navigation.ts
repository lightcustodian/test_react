import type { MenuItem } from '../types/components';

export const navigationMenu: MenuItem[] = [
  {
    label: 'INDUSTRIES',
    href: '/industries',
    children: [
      { label: 'Higher Education', href: '/higher-education' },
      { label: 'K-12 School Districts', href: '/k12-schools' },
      { label: 'Regional Healthcare', href: '/regional-healthcare' },
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Business', href: '/business' }
    ]
  },
  {
    label: 'SOLUTIONS',
    href: '/solutions',
    children: [
      {
        label: 'Private Cloud',
        href: '/private-cloud',
        children: [
          { label: 'Primary Datacenter Services', href: '/primary-datacenter-services' },
          { label: 'Backup as a Service', href: '/backup-as-a-service' },
          { label: 'Secondary Datacenter Services', href: '/secondary-datacenter-services' },
          { label: 'Disaster Recovery as a Service', href: '/disaster-recovery-as-a-service' },
          { label: 'Desktop as a Service', href: '/desktop-as-a-service' },
          { label: 'Video Surveillance Storage', href: '/video-surveillance-storage' }
        ]
      },
      {
        label: 'On-Premise Solutions',
        href: '/on-premise',
        children: [
          { label: 'Data Center Modernization', href: '/data-center-modernization' },
          { label: 'Servers and Storage', href: '/servers-storage' },
          { label: 'Virtual Desktops', href: '/virtual-desktops-vdi' },
          { label: 'Data Protection', href: '/data-protection' },
          { label: 'Networking', href: '/networking' },
          { label: 'Security', href: '/it-security' }
        ]
      },
      { label: 'Microsoft Azure', href: '/microsoft-azure' },
      {
        label: 'AI/Automation Platforms',
        href: '/ai-automation',
        children: [
          { label: 'AI Infrastructure as a Service', href: '/ai-infrastructure-as-a-service' },
          { label: 'AI Testing Environments', href: '/ai-testing-environments' },
          { label: 'Educational AI Platform', href: '/educational-ai-platform' },
          { label: 'AI Operations Center', href: '/ai-operations-center' }
        ]
      }
    ]
  },
  {
    label: 'CASE STUDIES',
    href: '/case-studies',
    children: [
      { label: 'Venoco ($400K savings)', href: '/case-study-venoco' },
      { label: 'Glen Rose ISD (50% cost reduction)', href: '/case-study-glen-rose-isd' },
      { label: 'Pearland ISD (1/3 implementation time)', href: '/case-study-pearland-isd' },
      { label: 'Aurora Public Schools', href: '/case-study-aurora' },
      { label: 'Crosby ISD', href: '/case-study-crosby-isd' },
      { label: 'Integrated Project Services (IPS)', href: '/case-study-ips' },
      { label: 'See All Case Studies', href: '/case-studies' }
    ]
  },
  {
    label: 'ABOUT US',
    href: '/about-us',
    children: [
      { label: 'Mission Statement', href: '/mission-statement' },
      { label: 'Core Values', href: '/values' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Blog', href: '/blog' },
      { label: 'Videos', href: '/videos' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];