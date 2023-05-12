export function getDateFr(date) {
  return new Date(date).toLocaleString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function getColorVote(vote) {
  if (Number(vote) <= 3) return "bg-red-500";
  if (Number(vote) <= 6.999) return "bg-amber-500";
  if (Number(vote) <= 10) return "bg-green-500";
}
