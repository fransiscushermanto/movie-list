export function getMetascoreLevel(rate: number | "N/A") {
  if (rate === "N/A") return "unknown";

  if (rate > 74) return "excellence";
  else if (rate <= 74 && rate >= 50) return "good";
  else return "bad";
}
