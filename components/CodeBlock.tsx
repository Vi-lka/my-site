'use client';

import { highlightCode } from '@/lib/highlight';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { type HTMLAttributes, useEffect, useState } from 'react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  code?: string;
  language?: string;
  classNameCode?: string;
  classNameViewport?: string;
}

export function CodeBlock({ 
  code, 
  language = 'text', 
  className, 
  classNameCode, 
  classNameViewport,
  ...props 
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    if (code) {
      void highlightCode(code, language, resolvedTheme ?? 'dark').then((html) => {
        setHighlightedCode(html);
      });
    }
  }, [code, language, resolvedTheme]);

  return (
    <div className="relative w-full">
      <pre
        className={cn(
          'rounded bg-muted p-0 overflow-x-auto text-sm font-mono relative',
          className
        )}
        {...props}
      >
        {language && (
          <span className="absolute top-2 right-2 text-xs font-medium bg-background border text-foreground uppercase px-2 py-1 rounded z-1">
            {language}
          </span>
        )}
        <ScrollArea className={cn("z-0", classNameCode)} classNameViewport={classNameViewport}>
          {code ? (
            <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          ) : (
            props.children
          )}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </pre>
    </div>
  );
}