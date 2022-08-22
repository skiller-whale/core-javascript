"use strict"

function canViewBlog(blog, user) {
  if (/* Write a boolean expression here */) {
    return true
  }
  if (/* Write a boolean expression here */) {
    return true
  }
  return false
}

function hasComments(blog) {
  /* Return true if the blog has comments otherwise return false */
}

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

const blog = {
  author: "Bob",
  isPublic: false,
  allowsComments: true,
  isDraft: false,
  comments: [],
}

const Bob = {
  name: "Bob",
  isAdmin: true,
}

const Alice = {
  name: "Alice",
  isAdmin: false,
}

const users = [Bob, Alice]

for (let user of users) {
  if (canViewBlog(blog, user)) {
    console.log(user.name, "can see the blog")
  } else {
    console.log(user.name, "cannot see the blog")
  }
}

if (!hasComments(blog)) {
  console.log("Blog has no comments!")
}
