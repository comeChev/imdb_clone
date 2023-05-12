import { getMovie } from "@/api/tmdbApi";
import { getColorVote, getDateFr } from "@/utilities";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function movie({ params }) {
  const { id } = params;
  const movie = await getMovie(id);
  const popularity = movie.popularity.toString().split(".");

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          height={300}
          width={500}
          style={{ objectFit: "cover", maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
          className="rounded-lg"
        />

        <div className="p-2">
          <div className="flex justify-between items-center">
            <h2 className="mb-3 font-bold text-lg">
              {movie.title || movie.name}
            </h2>
            {/* <h3>{movie.tagline}</h3> */}
            <p
              className={`rounded-lg py-1.5 px-2 ${getColorVote(
                movie.vote_average
              )}`}
            >
              {movie.vote_average}
            </p>
          </div>

          <p className="text-lg mb-3">
            <spa className="font-semibold mr-1">Aperçu : </spa>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Première diffusion : </span>
            {movie.release_date
              ? getDateFr(movie.release_date)
              : getDateFr(movie.first_air_date)}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Entrées : </span>
            {movie.popularity.toString().replace(".", " ")} spectateurs
          </p>

          <ul className="flex gap-5 mt-2">
            {movie.genres.map((genre) => (
              <li
                className="bg-amber-300 dark:bg-amber-600 py-1.5 px-2 rounded-lg font-semibold hover:dark:bg-amber-700 hover:bg-amber-400 transition duration-200"
                key={genre.id}
              >
                <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
