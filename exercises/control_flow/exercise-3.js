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

function categorizeByCount(count) {
  // TODO: categorize the sighting based on the count
  // 1 ---> "Solo whale"
  // 2 ---> "Small pod"
  // 3-4 ---> "Medium pod"
  // >= 5 ---> "Large pod"
}

function findFirstSighting(species, sightings) {
  // TODO: loop through the sightings and return the first sighting for the given species
}

function sightingDescription(sighting) {
  const sizeCategory = categorizeByCount(sighting.count);
  return `${sizeCategory} of ${sighting.count} ${sighting.species} whale(s) in the ${sighting.location} Ocean.`;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
for (let i = 0; i < speciesNames.length; i = i + 1) {
  const speciesName = speciesNames[i];
  const firstSighting = findFirstSighting(speciesName, sightings);
  if (firstSighting !== null) {
    console.log(
      `First sighting of ${speciesName} whale: ${sightingDescription(
        firstSighting
      )}`
    );
  } else {
    console.log(`No sightings of ${speciesName} whale.`);
  }
}
