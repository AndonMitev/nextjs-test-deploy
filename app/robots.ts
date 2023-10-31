import { MetadataRoute } from 'next';
import { env } from './lib';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${env.APP_BASE_URL}/sitemap.xml`,
  };
}
