export function parseCoordinates(input) {
  const cleaned = input
    .replace('[', '')
    .replace(']', '')
    .trim();

  const parts = cleaned.split(',');

  if (parts.length !== 2) {
    throw new Error("Wrong format");
  }

  const lat = parseFloat(parts[0]);
  const lon = parseFloat(parts[1]);

  if (isNaN(lat) || isNaN(lon)) {
    throw new Error("Wrong format");
  }

  return { lat, lon };
}
