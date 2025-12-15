import { catalogue, sortCatalogueByYear } from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function getOldestBook(catalogue) {
  const sortedCatalogue = sortCatalogueByYear([...catalogue]);
  const firstBook = sortedCatalogue[0];
  return firstBook;
}

function getBookSummary(book) {
  const title = book.title;
  const authors = book.authors;
  const year = book.year;
  return `${title} by ${authors.join(", ")} (${year})`;
}

function getFirstAuthor(book) {
  const firstAuthor = book.authors[0];
  return firstAuthor;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const oldestBook = getOldestBook(catalogue);
console.log("Oldest Book:", getBookSummary(oldestBook));
console.log("Main Author:", getFirstAuthor(oldestBook));
