'use strict'

function printContent (blog) {
  if (/* Write a condition here */) {
    console.log(blog.content)
  } else {
    console.log('No content!')
  }
}

function printCategory (blog) {
  if (/* Write a condition here */) {
    console.log(blog.category)
  } else {
    console.log('No category!')
  }
}

function printComments (blog) {
  if (/* Write a condition here */) {
    console.log(blog.comments)
  } else {
    console.log('No comments!')
  }
}

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

const blog = {
  content: '',
  comments: [],
}

printContent(blog)
printCategory(blog)
printComments(blog)
