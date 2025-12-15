import { catalogue, sortCatalogueByYear } from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function getOldestBook(catalogue) {
  sortCatalogueByYear(catalogue);
  return catalogue[0];
}

function getNewestBook(catalogue) {
  sortCatalogueByYear(catalogue);
  return catalogue.at(-1);
}

function getTotalBooks(catalogue) {
  return catalogue.length;
}

function addBookToCatalog(catalogue, book) {
  catalogue.push(book);
}

function createBook(data) {
  const defaults = { authors: ["anonymous"], available: true };
  // TODO: return a new book based on the data given, which includes the defaults
  // for any missing properties
}

function updateBook(book, updates) {
  // TODO: return a new book object that overrides the properties of the
  // original book with the properties from the updates object
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const bnwWrong = createBook({
  title: "Brave New World",
  authors: ["Aldous Huxley"],
  year: 1923,
  isbn: "978-0-06-085052-4",
});
const bnwRight = updateBook(bnwWrong, { year: 1932 });
const newCatalogue = addBookToCatalog(catalogue, bnwRight);

console.log("Oldest Book:", getOldestBook(newCatalogue));
console.log("Newest Book:", getNewestBook(newCatalogue));
console.log("Total Books:", getTotalBooks(newCatalogue));
