// import { getLogger } from '../';

const url =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=30a4fb284f96ffaec0832b385ebaa1d2';

// const logger = getLogger('Movies services');

export const fetchMovies = async () => {
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE0ZmIyODRmOTZmZmFlYzA4MzJiMzg1ZWJhYTFkMiIsInN1YiI6IjVkMjBiMGQxOTRkOGE4MDQ5YTQxMzY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSRXhzK7oEMd2OcbCuEPMVK9PF41X1cxTsBuHhzcRPga'
    }
  });

  if (!response.ok) {
    // logger.error('Error fetching movies');
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return response.json();
};
