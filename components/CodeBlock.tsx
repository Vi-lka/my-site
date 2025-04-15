'use client';

import { highlightCode } from '@/lib/highlight';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { HTMLAttributes, useEffect, useState } from 'react';

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  code?: string;
  language?: string;
}

export function CodeBlock({ code, language = 'text', className, ...props }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    if (code) {
      highlightCode(code, language, resolvedTheme || 'dark').then((html) => {
        setHighlightedCode(html);
      });
    }
  }, [code, language, resolvedTheme]);

  return (
    <div className="relative">
      <pre
        className={cn(
          'rounded bg-muted p-4 overflow-x-auto text-sm font-mono relative',
          className
        )}
        {...props}
      >
        {language && (
          <span className="absolute top-2 right-2 text-xs font-medium bg-background text-foreground px-2 py-1 rounded">
            {language.toUpperCase()}
          </span>
        )}
        {code ? (
          <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        ) : (
          props.children
        )}
      </pre>
    </div>
  );
}