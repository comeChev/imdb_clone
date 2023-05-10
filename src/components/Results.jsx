import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card result={result} />
      ))}
    </div>
  );
}
