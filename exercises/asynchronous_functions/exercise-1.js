import fs from "node:fs/promises"
import fetch from "node-fetch"

function hackerNewsUrl(searchTerm) {
  return `http://hn.algolia.com/api/v1/search?hitsPerPage=4&query=${encodeURIComponent(searchTerm)}`
}

function displayHackerNewsSearchResult(searchTerm, data) {
  if (data.hits.length > 0) {
    console.log(`Hits for search term "${searchTerm}":`)
    console.log(`------------------------${"-".repeat(searchTerm.length)}`)
    data.hits.forEach(hit => {
      console.log(`  - Title: ${hit.title}`)
      console.log(`    Url: ${hit.url}`)
    })
  } else {
    console.log(`No hits for search term "${searchTerm}".`)
  }
  console.log("")
}

function search() {
  fs.readFile("./data/searchTerms.json", "utf-8")
}

search()
