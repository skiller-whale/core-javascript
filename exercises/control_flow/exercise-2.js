// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const sightings = [
  { species: "Blue", count: 2, location: "Pacific" },
  { species: "Humpback", count: 5, location: "Atlantic" },
  { species: "Minke", count: 3, location: "Pacific" },
  { species: "Gray", count: 1, location: "Pacific" },
  { species: "Blue", count: 1, location: "Atlantic" },
  { species: "Sperm", count: 4, location: "Indian" },
  { species: "Humpback", count: 2, location: "Pacific" },
];

function calculateTotalWhales(sightings) {
  // TODO: loop through the sightings and sum the count of whales
}

function findLargestSighting(sightings) {
  // TODO: loop through the sightings and find the sighting with the largest count
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log("Total whales seen:", calculateTotalWhales(sightings));

const largestSighting = findLargestSighting(sightings);
console.log(
  `Largest sighting: ${largestSighting.count} ${largestSighting.species} whales in the ${largestSighting.location} Ocean.`
);
