import { getTopRatedMovies, getTrendingMovies } from "@/api/tmdbApi";
import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
  const genre = searchParams.genre || "fetchTrending";

  const results =
    genre === "fetchTrending"
      ? await getTrendingMovies()
      : await getTopRatedMovies();

  return (
    <main>
      <Results results={results} />
    </main>
  );
}
