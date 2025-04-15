import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter | null = null;

export async function highlightCode(code: string, lang: string, theme: string) {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'html', 'bash'],
    });
  }

  const html = highlighter.codeToHtml(code, {
    lang,
    theme: theme === 'dark' ? 'github-dark' : 'github-light',
  });

  return html;
}