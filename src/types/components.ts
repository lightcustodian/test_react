import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from 'react';

// Button Component Types
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: string;
  className?: string;
}

// IconCircle Component Types
export type IconCircleVariant = 'trust' | 'expertise' | 'innovation' | 'growth';
export type IconCircleSize = 'small' | 'default' | 'large';

export interface IconCircleProps {
  icon: string;
  variant?: IconCircleVariant;
  size?: IconCircleSize;
  className?: string;
}

// Card Component Types
export type CardVariant = 'elevated' | 'feature' | 'value' | 'testimonial';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  children: ReactNode;
  className?: string;
}

// StatItem Component Types
export interface StatItemProps {
  number: string;
  label: string;
  className?: string;
}

// Navigation Types
export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface NavigationProps {
  menuItems?: MenuItem[];
  className?: string;
}