const whales = [
  { name: "Ada", species: "Orca", age: 5 },
  { name: "Bob", species: "Blue Whale", age: 12 },
  { name: "Charlie", species: "Orca", age: 7 },
  { name: "Diana", species: "Humpback", age: 15 },
  { name: "Eve", species: "Blue Whale", age: 20 },
  { name: "Frank", species: "Orca", age: 3 },
];

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function groupWhalesBySpecies(whales) {
  // TODO: return whales grouped by species
}

function generateSpeciesSummaries(whales) {
  const grouped = groupWhalesBySpecies(whales);
  // TODO: return an object with species as keys and a summary object as values
  // The summary object should have two properties:
  // - count: number of whales of that species
  // - averageAge: average age of whales of that species
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const bySpecies = groupWhalesBySpecies(whales);
console.log(JSON.stringify(bySpecies));
// Should log:
// {
//   "Orca": [ { name: "Ada", ... }, { name: "Charlie", ... }, { name: "Frank", ... } ],
//   "Blue Whale": [ { name: "Bob", ... }, { name: "Eve", ... } ],
//   "Humpback": [ { name: "Diana", ... } ]
// }

const summaries = generateSpeciesSummaries(whales);
console.log(JSON.stringify(summaries));
// Should log:
// {
//   "Orca": { count: 3, averageAge: 5 },
//   "Blue Whale": { count: 2, averageAge: 16 },
//   "Humpback": { count: 1, averageAge: 15 }
// }
