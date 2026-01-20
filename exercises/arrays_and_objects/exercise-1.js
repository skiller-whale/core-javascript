import catalogue from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function sortCatalogueByYear(catalogue) {
  catalogue.sort((a, b) => a.year - b.year);
}

function getOldestBook(catalogue) {
  // TODO: return the oldest book from the catalogue (i.e. the first book after sorting by year)
}

function getNewestBook(catalogue) {
  // TODO: return the newest book from the catalogue (i.e. the last book after sorting by year)
}

function getTotalBooks(catalogue) {
  // TODO: return the total number of books in the catalogue
}

function addBookToCatalog(catalogue, book) {
  // TODO: add the given book to the catalogue
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
addBookToCatalog(catalogue, {
  title: "Brave New World",
  authors: ["Aldous Huxley"],
  year: 1932,
  isbn: "978-0-06-085052-4",
  available: true
});

console.log("Oldest Book:", getOldestBook(catalogue));
console.log("Newest Book:", getNewestBook(catalogue));
console.log("Total Books:", getTotalBooks(catalogue));
