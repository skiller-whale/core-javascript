function pop(array) {
  const rest = array.slice(0, -1);
  const last = array.at(-1);
  return { last, rest };
}

function push(array, element) {
  // TODO: return a copy of the array with the element added to the end
}

function shift(array) {
  // TODO: return the first element of the array and a copy of the array without that element
  // (as an object with `first` and `rest` properties, as in the `pop` function above)
}

function unshift(array, element) {
  // TODO: return a copy of the array with the element added to the beginning
}
