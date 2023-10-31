import { Label } from '@/app/components/ui/label';
import { APP_ROUTES } from '@/app/constants';
import { fetchMovies } from '@/app/lib';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Movies',
};

async function Page() {
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
        return (
          <Link key={index.title} href={`${APP_ROUTES.MOVIES}/${index.id}`}>
            <li>{index.title}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
