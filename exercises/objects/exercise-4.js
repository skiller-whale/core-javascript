const whales = [
  { name: "Ada", species: "Orca", age: 5 },
  { name: "Bob", species: "Blue Whale", age: 12 },
  { name: "Charlie", species: "Orca", age: 8 },
];

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const whalesRegistry = new Map();

function addWhaleToRegistry(whale, metadata) {
  // TODO: map whale to metadata in the whalesRegistry map
}

function getWhaleMetadata(whale) {
  // TODO: retrieve metadata for whale from the whalesRegistry map
}

function groupByHealth(whales) {
  // TODO: group whales by their health status from the registry
  // Whales without metadata should be grouped under "unknown"
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
addWhaleToRegistry(whales[0], { lastSeen: "2024-01-15", health: "good" });
addWhaleToRegistry(whales[1], { lastSeen: "2024-01-20", health: "excellent" });

const metadata = getWhaleMetadata(whales[0]);
console.log(JSON.stringify(metadata)); // Should log: { lastSeen: "2024-01-15", health: "good" }

const healthGroups = groupByHealth(whales);
console.log(JSON.stringify(healthGroups));
// Should log:
// {
//   "good": [ { name: "Ada", ... } ],
//   "excellent": [ { name: "Bob", ... } ],
//   "unknown": [ { name: "Charlie", ... } ]
// }
