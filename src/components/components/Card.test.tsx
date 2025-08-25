import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <h3>Test Title</h3>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies elevated variant styles by default', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('p-6', 'shadow-md');
  });

  it('applies feature variant styles', () => {
    const { container } = render(<Card variant="feature">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('p-6', 'border', 'border-gray-200');
  });

  it('applies value variant styles', () => {
    const { container } = render(<Card variant="value">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('p-6', 'bg-gradient-to-br', 'from-brand-light-blue', 'to-brand-light-green');
  });

  it('applies testimonial variant styles', () => {
    const { container } = render(<Card variant="testimonial">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('p-8', 'bg-gray-50', 'relative');
  });

  it('applies interactive styles when interactive is true', () => {
    const { container } = render(<Card interactive={true}>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('hover:-translate-y-2', 'hover:scale-105', 'hover:shadow-xl', 'cursor-pointer');
  });

  it('does not apply interactive styles when interactive is false', () => {
    const { container } = render(<Card interactive={false}>Content</Card>);
    const card = container.firstChild;
    expect(card).not.toHaveClass('hover:-translate-y-2');
    expect(card).not.toHaveClass('cursor-pointer');
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const { container } = render(
      <Card data-testid="test-card" onClick={() => {}}>
        Content
      </Card>
    );
    const card = screen.getByTestId('test-card');
    expect(card).toBeInTheDocument();
  });
});