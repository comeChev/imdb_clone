import { getGenres, getMoviesWithGenre } from "@/api/tmdbApi";
import Card from "@/components/Card";
import Results from "@/components/Results";
import React from "react";

export default async function page({ params }) {
  const { id } = params;
  const genres = await getGenres();
  const films = await getMoviesWithGenre(id);

  const genre = genres.genres.find((genre) => genre.id === parseInt(id));

  return (
    <div className="mx-auto max-w-6xl mt-4">
      <p className="text-center font-semibold text-amber-500 text-4xl p-3">
        Top des films du genre {genre.name.toLowerCase()}
      </p>
      <Results results={films.results} />
    </div>
  );
}
