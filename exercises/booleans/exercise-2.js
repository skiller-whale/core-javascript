"use strict"

function getContent(blog) {
  if (/* Write a boolean expression here */) {
    return "No content!"
  }
  return blog.content
}

function getCategory(blog) {
  if (/* Write a boolean expression here */) {
    return "No category!"
  }
  return blog.category
}

function getComments(blog) {
  if (/* Write a boolean expression here */) {
    return "No comments!"
  }
  return blog.comments
}

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

const blog = {
  content: "",
  comments: [],
}

console.log(getContent(blog))
console.log(getCategory(blog))
console.log(getComments(blog))
