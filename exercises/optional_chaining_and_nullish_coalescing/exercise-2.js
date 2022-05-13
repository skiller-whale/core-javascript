"use strict"

function displayPreview(blog) {
  const title = blog.title || "Lorem Ipsum"
  const authorName = (blog.author && blog.author.name) || "Anonymous"
  const contents =
    blog.contents || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  const comments =
    blog.comments && blog.comments.length
      ? blog.comments
      : ["lorem ipsum", "lorem ipsum"]
  const isPublic = blog.isPublic || true

  // ------------------------------------------------------//
  // Don't edit the code below here                        //
  // ------------------------------------------------------//

  console.log(title)
  console.log("By", authorName)
  console.log("Blog is", isPublic ? "public" : "private")
  console.log(contents)
  console.log(comments)
}

const draftBlog = {
  title: "",
  comments: [],
  isPublic: false,
}

displayPreview(draftBlog)
console.log("----------")
displayPreview(undefined)
