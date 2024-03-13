import MovieCard, { IMovieCard } from "@/components/MovieCard";
import axios from "axios";

interface IParamsRecommendations {
  params: {
    id: IMovieCard["id"];
  };
}

async function getAllRecommendations(id: IMovieCard["id"]) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations`,
    {
      params: {
        api_key: process.env.API_KEY,
        language: "en-US",
      },
    }
  );
  return response.data;
}

const Page = async ({ params }: IParamsRecommendations) => {
  const { id } = params;

  const movieRecommendations = await getAllRecommendations(id);

  return (
    <main className="mt-5 flex flex-col mb-6">
      <div className="w-[1200px] max-w-full px-4 mx-auto">
        <div className="flex flex-col mb-6 mt-6">
          <h1 className="text-2xl font-medium">All Recommendations</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {movieRecommendations?.results?.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
