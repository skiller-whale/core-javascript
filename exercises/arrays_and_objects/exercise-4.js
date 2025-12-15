import { catalogue, sortCatalogueByYear } from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function getOldestBook(catalogue) {
  const sortedCatalogue = sortCatalogueByYear([...catalogue]);
  return sortedCatalogue[0];
}

function getAllBooksExceptOldest(catalogue) {
  const sortedCatalogue = sortCatalogueByYear([...catalogue]);
  // TODO: return all books except the first one (the oldest book)
}

function bookWithoutISBN(book) {
  // TODO: return a new book object that excludes the ISBN property
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const remainingBooks = getAllBooksExceptOldest(catalogue);
console.log("Books Except Oldest:", remainingBooks);

const oldestBook = getOldestBook(catalogue);
const oldestBookWithoutISBN = bookWithoutISBN(oldestBook);
console.log("Oldest Book Without ISBN:", oldestBookWithoutISBN);
