import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from './HeroSection';

describe('HeroSection Component', () => {
  const mockHeroData = {
    title: 'Test Hero Title',
    subtitle: 'Test hero subtitle text',
    backgroundImage: 'https://example.com/image.jpg',
    stats: [
      { number: '100+', label: 'Clients' },
      { number: '99.9%', label: 'Uptime' }
    ],
    primaryCTA: {
      text: 'Get Started',
      icon: 'fas fa-rocket',
      onClick: vi.fn()
    },
    secondaryCTA: {
      text: 'Learn More',
      icon: 'fas fa-info',
      onClick: vi.fn()
    }
  };

  it('renders title and subtitle', () => {
    render(<HeroSection {...mockHeroData} />);
    expect(screen.getByText('Test Hero Title')).toBeInTheDocument();
    expect(screen.getByText('Test hero subtitle text')).toBeInTheDocument();
  });

  it('renders stats when showStats is true', () => {
    render(<HeroSection {...mockHeroData} showStats={true} />);
    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('Clients')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Uptime')).toBeInTheDocument();
  });

  it('hides stats when showStats is false', () => {
    render(<HeroSection {...mockHeroData} showStats={false} />);
    expect(screen.queryByText('100+')).not.toBeInTheDocument();
    expect(screen.queryByText('Clients')).not.toBeInTheDocument();
  });

  it('renders primary CTA button', () => {
    render(<HeroSection {...mockHeroData} />);
    const primaryButton = screen.getByText('Get Started');
    expect(primaryButton).toBeInTheDocument();
    
    fireEvent.click(primaryButton);
    expect(mockHeroData.primaryCTA.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders secondary CTA button', () => {
    render(<HeroSection {...mockHeroData} />);
    const secondaryButton = screen.getByText('Learn More');
    expect(secondaryButton).toBeInTheDocument();
    
    fireEvent.click(secondaryButton);
    expect(mockHeroData.secondaryCTA.onClick).toHaveBeenCalledTimes(1);
  });

  it('applies background image style', () => {
    const { container } = render(<HeroSection {...mockHeroData} />);
    const section = container.querySelector('section');
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('url(https://example.com/image.jpg)')
    });
  });

  it('renders without secondary CTA', () => {
    const dataWithoutSecondaryCTA = { ...mockHeroData, secondaryCTA: undefined };
    render(<HeroSection {...dataWithoutSecondaryCTA} />);
    
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.queryByText('Learn More')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<HeroSection {...mockHeroData} className="custom-hero" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-hero');
  });
});