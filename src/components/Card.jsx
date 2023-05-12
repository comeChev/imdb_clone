"use client";
import { getDateFr } from "@/utilities";
import Image from "next/image";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  const imageLoader = () => {
    return "spinner.svg";
  };
  return (
    <div
      className="group cursor-pointer m-2 p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400  transition-shadow duration-200 ease-in-out"
      key={result.id}
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          height={300}
          width={500}
          style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL={"/spinner.svg"}
          alt="Image is not available"
          className="mx-auto rounded-t-lg group-hover:opacity-80 transition duration-200"
        />
        <div className="p-2">
          <p className="line-clamp-3 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold mt-3 mb-2">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {getDateFr(result.release_date) || getDateFr(result.first_air_date)}
            <span className="mx-2">•</span>
            <FiThumbsUp className="mr-1 text-lg" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
