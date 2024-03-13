import { useRouter } from "next/router";

async function getMovies(keyword: string) {
  const res = await fetch(`/api/search/${keyword}`);
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
}

export async function getServerSideProps({ params }) {
  try {
    const { keyword } = params;
    const { results } = await getMovies(keyword);

    return {
      props: {
        keyword,
        movies: results,
      },
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {
      props: {
        keyword: params.keyword,
        movies: [], // Set empty array as movies in case of error
      },
    };
  }
}

export default function SearchPage({ keyword, movies }) {
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <h1>Search Results for: {keyword}</h1>
      </div>
    </main>
  );
}