import MovieCard, { IMovieCard } from "@/components/MovieCard";
import Paginate from "@/components/Paginate";
import axios from "axios";
import React from "react";

type Props = {
  searchParams?: {
    page?: number;
  };
};

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "en-US",
  },
});

async function getTopRatedMovies(page: number) {
  const response = await axiosInstance.get("movie/top_rated", {
    params: {
      page,
    },
  });
  return response.data;
}

const page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Top Rated Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {topRatedMovies.results.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > topRatedMovies.total_pages ? 1 : page}
          totalPages={topRatedMovies.total_pages}
          pageType="top-rated"
        />
      </div>
    </main>
  );
};

export default page;
