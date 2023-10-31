import { FetchError } from '../errors';

const moviesBaseUrl = `https://api.themoviedb.org/3`;

export const fetchMovies = async () => {
  const response = await fetch(
    `${moviesBaseUrl}/trending/movie/day?api_key=30a4fb284f96ffaec0832b385ebaa1d2`,
    {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE0ZmIyODRmOTZmZmFlYzA4MzJiMzg1ZWJhYTFkMiIsInN1YiI6IjVkMjBiMGQxOTRkOGE4MDQ5YTQxMzY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSRXhzK7oEMd2OcbCuEPMVK9PF41X1cxTsBuHhzcRPg',
      },
    }
  );

  if (!response.ok) {
    throw new FetchError({
      message: response.statusText,
      status: response.status,
    });
  }

  return response.json();
};

export const fetchMovie = async ({ id }: { id: string }) => {
  const response = await fetch(`${moviesBaseUrl}/movie/${id}`, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE0ZmIyODRmOTZmZmFlYzA4MzJiMzg1ZWJhYTFkMiIsInN1YiI6IjVkMjBiMGQxOTRkOGE4MDQ5YTQxMzY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSRXhzK7oEMd2OcbCuEPMVK9PF41X1cxTsBuHhzcRPg',
    },
  });

  if (!response.ok) {
    throw new FetchError({
      message: response.statusText,
      status: response.status,
    });
  }

  return response.json();
};
