import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { AppConfig } from '@utils/AppConfig';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('post');

  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: context.site ?? AppConfig.site_url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blogs/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
