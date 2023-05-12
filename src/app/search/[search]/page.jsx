import { getResultsOnSearch } from "@/api/tmdbApi";
import Results from "@/components/Results";
import React from "react";

export default async function page({ params }) {
  const { search } = params;
  const results = await getResultsOnSearch(search);
  return (
    <div className="max-w-6xl mx-auto p-4">
      {results && results.length > 0 ? (
        <>
          <p>Votre recherche porte sur : {decodeURIComponent(search)}</p>
          <Results results={results} />
        </>
      ) : (
        <h1 className="pt-6 font-bold text-lg">
          Aucun résultat ne correspond à votre recherche
          <span className="italic text-sm font-light ml-1">{`(${search})`}</span>
        </h1>
      )}
    </div>
  );
}
