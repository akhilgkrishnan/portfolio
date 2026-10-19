import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://akhilgkrishnan.me', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore', // Keep trailing slashes on URLs
  compressHTML: true, // Astro 7 defaults to 'jsx', which strips whitespace between inline elements
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    sitemap({
      // Post pages are stubs that link to the full article on the Saeloun blog
      filter: (page) => !/\/blogs\/[^/]+\/$/.test(page),
    }),
    robotsTxt({
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: 'Bingbot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: 'AhrefsBot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
      ],
    }),
  ],
});
