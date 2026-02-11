import fs from "node:fs/promises";

// generate URL to search Hacker News for a given search term
function hackerNewsUrl(searchTerm) {
  return `http://hn.algolia.com/api/v1/search?hitsPerPage=4&query=${encodeURIComponent(searchTerm)}`;
}

// display the search results for a given search term and response data
function displayHackerNewsSearchResult(searchTerm, data) {
  if (data.hits.length > 0) {
    console.log(`Hits for search term "${searchTerm}":`);
    console.log(`------------------------${"-".repeat(searchTerm.length)}`);
    data.hits.forEach((hit) => {
      console.log(`  - Title: ${hit.title}`);
      console.log(`    Url: ${hit.url}`);
    });
  } else {
    console.log(`No hits for search term "${searchTerm}".`);
  }
  console.log("");
}

// read search terms from file, search Hacker News for each term, and display the results
function search() {
  // fs.readFile() returns a promise that fulfils with the file contents as a string
  // TODO: parse the file contents as JSON, and for each search term, fetch and display
  // the results from the Hacker News API using the functions above
  fs.readFile("./data/searchTerms.json", "utf-8");
}

// call the search function to execute the search and display results
search();
