export const catalogue = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    year: 1925,
    isbn: "978-0-7432-7356-5",
    available: true
  },
  {
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"],
    year: 1960,
    isbn: "978-0-06-112008-4",
    available: false
  },
  {
    title: "1984",
    authors: ["George Orwell"],
    year: 1949,
    isbn: "978-0-452-28423-4",
    available: true
  },
  {
    title: "Fahrenheit 451",
    authors: ["Ray Bradbury"],
    year: 1953,
    isbn: "978-0-7432-7356-5",
    available: true
  },
  {
    title: "The Catcher in the Rye",
    authors: ["J.D. Salinger"],
    year: 1951,
    isbn: "978-0-316-76948-0",
    available: true
  },
];

export function sortCatalogueByYear(catalogue) {
  catalogue.sort((a, b) => a.year - b.year);
}
