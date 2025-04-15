import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import nextMDX from '@next/mdx';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: { dark: 'github-dark', light: 'github-light' },
  keepBackground: false,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withMDX(nextConfig));
