import { Label } from '@/app/components/ui/label';
import { fetchMovies } from '@/app/lib';
import { Suspense } from 'react';

async function Movies() {
  return (
    <div>
      <Label>Movies</Label>
      <Suspense fallback={<Label>Loading data...</Label>}>
        <MovieList />
      </Suspense>
    </div>
  );
}

const MovieList = async () => {
  const { results } = await fetchMovies();

  return (
    <div>
      {results.map((index: any) => {
        return <li key={index.title}>{index.title}</li>;
      })}
    </div>
  );
};

export default Movies;
