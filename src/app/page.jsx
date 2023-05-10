import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
  const genre = searchParams.genre || "fetchTrending";

  const results = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 0 } }
    // next: { revalidate: 10000 } is used to revalidate the data every 10 seconds
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })

    .then(async (data) => {
      return data.results;
    });

  console.log(results);
  return (
    <main>
      <Results results={results} />
    </main>
  );
}
