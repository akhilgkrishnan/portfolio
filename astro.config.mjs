import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  site: 'https://akhilgkrishnan.me', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
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
    astroImageTools,
  ],
});
