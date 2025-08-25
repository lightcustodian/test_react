// Block Data Interfaces
export interface CTAData {
  text: string;
  href?: string;
  icon?: string;
  onClick?: () => void;
}

export interface StatData {
  number: string;
  label: string;
}

// Hero Section Types
export interface HeroContent {
  title: string;              // Editable
  subtitle: string;           // Editable  
  backgroundImage: string;    // Editable
  stats: StatData[];          // Configurable array
  primaryCTA: CTAData;        // Editable
  secondaryCTA?: CTAData;     // Optional, Editable
  showStats?: boolean;        // Configurable
}

export interface HeroSectionProps extends HeroContent {
  className?: string;
}

// Value Props Section Types
export interface ValueProp {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface ValuePropsContent {
  title: string;
  subtitle?: string;
  values: ValueProp[];
}

export interface ValuePropsSectionProps extends ValuePropsContent {
  className?: string;
}

// Feature Section Types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureSectionContent {
  title: string;
  subtitle?: string;
  features: Feature[];
  primaryCTA?: CTAData;
}

export interface FeatureSectionProps extends FeatureSectionContent {
  className?: string;
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  image?: string;
}

export interface TestimonialSectionContent {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface TestimonialSectionProps extends TestimonialSectionContent {
  className?: string;
}

// Service Grid Types
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

export interface ServiceGridContent {
  title: string;
  subtitle?: string;
  services: Service[];
}

export interface ServiceGridProps extends ServiceGridContent {
  className?: string;
}

// CTA Section Types
export interface CTASectionContent {
  title: string;
  subtitle?: string;
  primaryCTA: CTAData;
  secondaryCTA?: CTAData;
  backgroundVariant?: 'gradient' | 'solid' | 'image';
  backgroundImage?: string;
}

export interface CTASectionProps extends CTASectionContent {
  className?: string;
}