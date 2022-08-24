"use strict"

function displayPreview(blog) {
  const title = blog.title || "New blog"
  const authorName = blog?.author?.name ?? "Anonymous"
  const contents = blog.contents || "Lorem ipsum dolor sit amet..."
  const comments = (blog?.comments?.[0] && blog.comments) ?? "no comments"

  console.log(title)
  console.log(authorName)
  console.log(contents)
  console.log(comments)
}

const draftBlog1 = {
  title: "Fishstory",
  author: {
    name: "Agatha Fishtie",
  },
  comments: ["Great blog!"],
  contents: "This is a story about the history of fish.",
  isPublic: true
}

const draftBlog2 = {
  title: "",
  comments: [],
  isPublic: false
}

const draftBlog3 = {
  title: "Moby Dick",
  author: {
    name: "",
  },
  comments: ["Great story!"],
  contents: "Call me Ishmael.",
  isPublic: true,
  commentsDisabled: true
}

displayPreview(draftBlog1)
// should log:
// Fishstory
// Agatha Fishtie
// This is a story about the history of fish.
// [ 'Great blog!' ]
console.log("----------")

displayPreview(draftBlog2)
// should log:
// This blog is not public
console.log("----------")

displayPreview(draftBlog3)
// should log:
// Moby Dick
//
// Call me Ishmael.
// Comments disabled