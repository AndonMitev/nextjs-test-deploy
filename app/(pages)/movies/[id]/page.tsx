import { Label } from '@/app/components/ui/label';
import { fetchMovie } from '@/app/lib';
import { Metadata } from 'next';
import Image from 'next/image';

interface IPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const movie = await fetchMovie({ id: params.id });

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [`https://image.tmdb.org/t/p/original/${movie.poster_path}`],
    },
  };
}

const Page = async ({ params }: IPageProps) => {
  const movie = await fetchMovie({ id: params.id });

  return (
    <div key={params.id}>
      <Label>{movie.original_title}</Label>
      <Image
        width={200}
        height={200}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  );
};

export default Page;
