// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const speciesNames = ["Blue", "Humpback", "Minke", "Gray", "Sperm"];

const sightings = [
  { species: "Blue", count: 2, location: "Pacific" },
  { species: "Humpback", count: 5, location: "Atlantic" },
  { species: "Minke", count: 3, location: "Pacific" },
  { species: "Gray", count: 1, location: "Pacific" },
  { species: "Blue", count: 1, location: "Atlantic" },
  { species: "Sperm", count: 4, location: "Indian" },
  { species: "Humpback", count: 2, location: "Pacific" },
];

function endangeredStatus(speciesName) {
  // TODO: refactor this function to use a switch statement
  if (speciesName === "Blue") {
    return "Endangered";
  }
  if (speciesName === "Gray" || speciesName === "Sperm") {
    return "Vulnerable";
  }
  if (speciesName === "Humpback" || speciesName === "Minke") {
    return "Least Concern";
  }
  return "Unknown status";
}

function oceanDescription(ocean) {
  // TODO: refactor this function to *not* use control flow statements
  switch (ocean) {
    case "Pacific":
      return "the largest and deepest ocean";
    case "Atlantic":
      return "the second largest ocean";
    case "Indian":
      return "the third largest ocean";
    case "Arctic":
      return "the smallest and shallowest ocean";
    case "Southern":
      return "the newest named ocean";
  }
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
for (let i = 0; i < sightings.length; i = i + 1) {
  const sighting = sightings[i];
  const status = endangeredStatus(sighting.species);
  const oceanDesc = oceanDescription(sighting.location);
  console.log(
    `Sighting of ${sighting.count} ${sighting.species} whale(s) in the ${sighting.location} Ocean (${oceanDesc}). Conservation status: ${status}.`
  );
}
