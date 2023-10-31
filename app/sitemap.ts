import { MetadataRoute } from 'next';

import { APP_ROUTES } from '@/app/constants';
import { fetchMovies } from '@/app/lib/services';
import { env } from './lib';

const baseUrl = env.APP_BASE_URL;

const getMovieUrls = async () => {
  const movies = await fetchMovies();

  return movies.map((movie: any) => ({
    url: `${baseUrl}/${APP_ROUTES.MOVIES}/${movie.id}`,
    lastModified: Date.now(),
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const movieUrls = await getMovieUrls();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${APP_ROUTES.SIGNIN}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${APP_ROUTES.SIGNUP}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${APP_ROUTES.ABOUT}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${APP_ROUTES.MOVIES}`,
      lastModified: new Date(),
    },
    ...movieUrls,
  ];
}
