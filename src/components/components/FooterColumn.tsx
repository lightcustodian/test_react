import React from 'react';
import { Heading } from '../items/Heading';
import { Link } from '../items/Link';
import { cn } from '../../utils/cn';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className = ''
}) => {
  return (
    <div className={cn('', className)}>
      <Heading level={4} variant="white" className="text-brand-green mb-4">
        {title}
      </Heading>
      <ul className="list-none p-0 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              variant="nav"
              className="text-sm text-gray-300 hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
export { FooterColumn };