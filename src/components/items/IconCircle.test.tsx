import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconCircle } from './IconCircle';

describe('IconCircle Component', () => {
  it('renders with the provided icon', () => {
    const { container } = render(<IconCircle icon="fas fa-shield-alt" />);
    const icon = container.querySelector('i');
    expect(icon).toHaveClass('fas', 'fa-shield-alt');
  });

  it('applies trust variant styles by default', () => {
    const { container } = render(<IconCircle icon="fas fa-shield" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('bg-brand-green', 'text-white');
  });

  it('applies expertise variant styles', () => {
    const { container } = render(<IconCircle icon="fas fa-cloud" variant="expertise" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('bg-brand-blue', 'text-white');
  });

  it('applies innovation variant styles', () => {
    const { container } = render(<IconCircle icon="fas fa-rocket" variant="innovation" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('bg-brand-green', 'text-brand-blue');
  });

  it('applies growth variant styles', () => {
    const { container } = render(<IconCircle icon="fas fa-chart-line" variant="growth" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('bg-brand-blue', 'text-brand-green');
  });

  it('applies different size classes', () => {
    const { container, rerender } = render(<IconCircle icon="fas fa-star" size="small" />);
    let iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('w-8', 'h-8', 'text-sm');

    rerender(<IconCircle icon="fas fa-star" size="large" />);
    iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('w-16', 'h-16', 'text-xl');

    rerender(<IconCircle icon="fas fa-star" />);
    iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('w-12', 'h-12', 'text-lg');
  });

  it('applies custom className', () => {
    const { container } = render(<IconCircle icon="fas fa-star" className="custom-class" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('custom-class');
  });

  it('has hover transform effect', () => {
    const { container } = render(<IconCircle icon="fas fa-star" />);
    const iconCircle = container.firstChild;
    expect(iconCircle).toHaveClass('hover:-translate-y-1');
  });
});