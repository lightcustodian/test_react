"use client"

import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface RichTextBlockProps {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
  variant?: 'default' | 'article' | 'blog' | 'documentation' | 'editorial';
  readingTime?: string;
  author?: {
    name: string;
    title?: string;
    image?: string;
  };
  publishedDate?: string;
  category?: string;
  tags?: string[];
  showMetadata?: boolean;
  dropcap?: boolean;
  fontSize?: 'small' | 'default' | 'large';
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  width?: 'full' | 'half' | 'two-thirds' | 'narrow';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const RichTextBlock: React.FC<RichTextBlockProps> = ({
  title,
  subtitle,
  content,
  variant = 'default',
  readingTime,
  author,
  publishedDate,
  category,
  tags,
  showMetadata = false,
  dropcap = false,
  fontSize = 'default',
  lineHeight = 'normal',
  width = 'full',
  alignment = 'left',
  className = ''
}) => {
  const fontSizeClasses = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-lg'
  };

  const lineHeightClasses = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed'
  };

  const widthClasses = {
    full: 'w-full max-w-2xl',
    half: 'w-full md:w-1/2',
    'two-thirds': 'w-full md:w-2/3',
    narrow: 'w-full max-w-md'
  };

  const alignmentClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  };

  const containerClasses = cn(
    'bg-white rounded-xl shadow-lg border border-gray-200',
    widthClasses[width],
    alignmentClasses[alignment],
    {
      'p-6': variant !== 'article',
      'p-8': variant === 'article'
    },
    className
  );

  const contentClasses = cn(
    'prose prose-gray max-w-none',
    fontSizeClasses[fontSize],
    lineHeightClasses[lineHeight],
    {
      'first-letter:text-6xl first-letter:font-bold first-letter:text-brand-blue first-letter:float-left first-letter:mr-2 first-letter:mt-1': dropcap
    }
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      {(title || subtitle || showMetadata) && (
        <div className="mb-6">
          {/* Category */}
          {category && (
            <Badge variant="primary" className="mb-3">
              {category}
            </Badge>
          )}

          {/* Title */}
          {title && (
            <Heading level={variant === 'article' ? 2 : 3} variant="primary" className="mb-3">
              {title}
            </Heading>
          )}

          {/* Subtitle */}
          {subtitle && (
            <Text variant="lead" className="mb-4 text-gray-600 font-medium">
              {subtitle}
            </Text>
          )}

          {/* Metadata */}
          {showMetadata && (author || publishedDate || readingTime) && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
              {/* Author */}
              {author && (
                <div className="flex items-center gap-2">
                  {author.image && (
                    <img 
                      src={author.image}
                      alt={author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <Text variant="small" className="font-semibold text-gray-700">
                      {author.name}
                    </Text>
                    {author.title && (
                      <Text variant="small" className="text-gray-500">
                        {author.title}
                      </Text>
                    )}
                  </div>
                </div>
              )}

              {/* Published Date */}
              {publishedDate && (
                <div className="flex items-center gap-1">
                  <Icon name="fas fa-calendar" size="small" />
                  <Text variant="small">{formatDate(publishedDate)}</Text>
                </div>
              )}

              {/* Reading Time */}
              {readingTime && (
                <div className="flex items-center gap-1">
                  <Icon name="fas fa-clock" size="small" />
                  <Text variant="small">{readingTime}</Text>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Rich Text Content */}
      <div className={contentClasses}>
        {typeof content === 'string' ? (
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="rich-text-content"
          />
        ) : (
          <div className="rich-text-content">
            {content}
          </div>
        )}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Text variant="small" className="font-semibold text-gray-700 mb-3">
            Tags:
          </Text>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" size="small">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Styles for rich text content */}
      <style jsx>{`
        .rich-text-content {
          color: #374151;
          line-height: 1.8;
        }
        
        .rich-text-content h1,
        .rich-text-content h2,
        .rich-text-content h3,
        .rich-text-content h4,
        .rich-text-content h5,
        .rich-text-content h6 {
          color: #125EAD;
          font-weight: 600;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        
        .rich-text-content h1 { font-size: 2em; }
        .rich-text-content h2 { font-size: 1.5em; }
        .rich-text-content h3 { font-size: 1.25em; }
        .rich-text-content h4 { font-size: 1.1em; }
        
        .rich-text-content p {
          margin-bottom: 1em;
        }
        
        .rich-text-content strong {
          color: #125EAD;
          font-weight: 600;
        }
        
        .rich-text-content em {
          font-style: italic;
          color: #4B5563;
        }
        
        .rich-text-content a {
          color: #125EAD;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        
        .rich-text-content a:hover {
          color: #4BB74E;
        }
        
        .rich-text-content ul,
        .rich-text-content ol {
          margin: 1em 0;
          padding-left: 1.5em;
        }
        
        .rich-text-content ul li {
          list-style-type: disc;
          margin-bottom: 0.5em;
        }
        
        .rich-text-content ol li {
          list-style-type: decimal;
          margin-bottom: 0.5em;
        }
        
        .rich-text-content blockquote {
          border-left: 4px solid #4BB74E;
          padding-left: 1em;
          margin: 1.5em 0;
          font-style: italic;
          color: #6B7280;
          background: #F9FAFB;
          padding: 1em;
          border-radius: 0 0.5em 0.5em 0;
        }
        
        .rich-text-content code {
          background: #F3F4F6;
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #125EAD;
        }
        
        .rich-text-content pre {
          background: #1F2937;
          color: #F9FAFB;
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          margin: 1em 0;
        }
        
        .rich-text-content pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }
        
        .rich-text-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5em;
          margin: 1.5em 0;
        }
        
        .rich-text-content hr {
          border: none;
          border-top: 2px solid #E5E7EB;
          margin: 2em 0;
        }
        
        .rich-text-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
        }
        
        .rich-text-content th,
        .rich-text-content td {
          border: 1px solid #E5E7EB;
          padding: 0.5em;
          text-align: left;
        }
        
        .rich-text-content th {
          background: #F9FAFB;
          font-weight: 600;
          color: #125EAD;
        }
      `}</style>
    </div>
  );
};

export default RichTextBlock;
export { RichTextBlock };