import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('from-brand-green', 'to-brand-blue');
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-white/10', 'backdrop-blur-lg');
  });

  it('applies different size classes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm');

    rerender(<Button size="large">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg');

    rerender(<Button>Default</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('renders with icon when provided', () => {
    render(<Button icon="fas fa-rocket">Launch</Button>);
    const icon = screen.getByRole('button').querySelector('i');
    expect(icon).toHaveClass('fas', 'fa-rocket');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<Button disabled data-testid="test-button">Disabled</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });
});