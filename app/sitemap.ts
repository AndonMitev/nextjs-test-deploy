import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * Replace `https://acme.com` with URL of the hosted version aka `https://weichain-nextjs-template.org`
   */
  const baseUrl = 'https://acme.com';

  const posts = [{ id: 1 }];

  // const posts = await getPosts()

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date()
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date()
    },
    ...postUrls
  ];
}
