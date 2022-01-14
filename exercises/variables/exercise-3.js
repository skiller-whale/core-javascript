const adaTheSkillerWhale = {
  givenName: 'Ada',
  species: ['Orcinus', 'Orca'],
  commonName: 'Skiller Whale',
  physicalAttributes: {
    colours: ['black', 'white'],
    sizeInMetres: 6,
    weightInKg: 3500
  }
}

function printSpeciesInfo (whale) {
  console.log(whale.givenName, 'is a member of', whale.species[0], whale.species[1], ', common name', whale.commonName)
}

function printAttributes (whale) {
  console.log(whale.givenName, 'is', whale.physicalAttributes.sizeInMetres, 'metres long and weighs', whale.physicalAttributes.weightInKg, 'kilograms')
}

function printPersonalPreferences (whale) {
  console.log(whale.givenName, 'loves learning to code and likes to eat', whale.likesToEat)
}

printSpeciesInfo(adaTheSkillerWhale)
printAttributes(adaTheSkillerWhale)
printPersonalPreferences(adaTheSkillerWhale)
