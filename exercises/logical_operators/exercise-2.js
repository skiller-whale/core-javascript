"use strict"

function displayPreview(blog) {
  // Populate the below variables with default values
  const title = blog.title
  const authorName = blog.author.name
  const contents = blog.contents
  const comments = blog.comments

  // ------------------------------------------------------//
  // Don't edit the code below here                        //
  // ------------------------------------------------------//

  console.log(title)
  console.log("By", authorName)
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
  isPublic: "",
  commentsDisabled: true
}

displayPreview(draftBlog1)
console.log("----------")
displayPreview(draftBlog2)
console.log("----------")
displayPreview(draftBlog3)

