const whale = {
  name: "Ada",
  species: "Orca",
  age: 5,
  location: "Pacific Ocean",
};

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function countProperties(object) {
  // TODO: return the count of properties
}

function hasValue(object, value) {
  // TODO: check if the value exists in the object
}

function filterPropertiesByValue(object, predicateFn) {
  // TODO: return a new object containing only properties where the value
  // satisfies the predicate function
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log(countProperties(whale)); // Should log: 4
console.log(hasValue(whale, "Orca")); // Should log: true
console.log(hasValue(whale, "Atlantic Ocean")); // Should log: false

const onlyStrings = filterPropertiesByValue(
  whale,
  (value) => typeof value === "string",
);
console.log(JSON.stringify(onlyStrings)); // Should log: { name: "Ada", species: "Orca", location: "Pacific Ocean" }

const onlyLongStrings = filterPropertiesByValue(
  whale,
  (value) => typeof value === "string" && value.length > 5,
);
console.log(JSON.stringify(onlyLongStrings)); // Should log: { location: "Pacific Ocean" }
