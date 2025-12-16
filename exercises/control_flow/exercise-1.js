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

// TODO: factor out execution logic into reusable functions...

// whaleDescription: takes a species name and returns a description string
// (e.g. "Blue whale")

// oceanName: takes a location string and returns a formatted ocean name
// (e.g. "the Pacific Ocean")

// sightingSummary: takes a sighting object and returns a summary string
// (e.g. "2 Blue whale(s) in the Pacific Ocean")

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const whale0 = `${sightings[0].species} whale`;
const ocean0 = `the ${sightings[0].location} Ocean`;
const summary0 = `${sightings[0].count} ${whale0}(s) in the ${ocean0}.`;
console.log(summary0);

const whale1 = `${sightings[1].species} whale`;
const ocean1 = `the ${sightings[1].location} Ocean`;
const summary1 = `${sightings[1].count} ${whale1}(s) in the ${ocean1}.`;
console.log(summary1);
