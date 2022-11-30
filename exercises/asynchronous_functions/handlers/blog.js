import fs from "node:fs/promises"

const blogPosts = JSON.parse(await fs.readFile("./data/blogPosts.json"))

export default function blog(id) {
  if (!blogPosts[id]) {
    return { status: 404, content: "blog post not found" }
  }

  return { status: 200, content: blogPosts[id] }
}
