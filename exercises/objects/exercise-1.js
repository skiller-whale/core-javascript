const whales = [
  { name: "Ada", species: "Orca", age: 5 },
  { name: "Bob", species: "Blue Whale", age: 12 },
  { name: "Charlie", species: "Orca", age: 8 },
  { name: "Diana", species: "Humpback", age: 15 },
  { name: "Eve", species: "Blue Whale", age: 20 },
  { name: "Frank", species: "Orca", age: 3 },
];

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function areEqual(whale1, whale2) {
  // TODO: refactor to loop over array of ["name", "species", "age"]
  // instead of repeating code
  if (whale1.name !== whale2.name) return false;
  if (whale1.species !== whale2.species) return false;
  if (whale1.age !== whale2.age) return false;
  return true;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const whaleA = { name: "Ada", species: "Orca", age: 5 };
const whaleB = { name: "Bob", species: "Blue Whale", age: 12 };

console.log(areEqual(whaleA, whales[0])); // Should log: true
console.log(areEqual(whaleA, whales[1])); // Should log: false
console.log(areEqual(whaleB, whales[1])); // Should log: true
