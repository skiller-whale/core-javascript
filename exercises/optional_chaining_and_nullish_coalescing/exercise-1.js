'use strict'

function displayPreview (blog) {
  // Populate the below variables with default values
  const title = blog.title
  const authorName = blog.author.name
  const contents = blog.contents
  const comments = blog.comments

// ------------------------------------------------------//
// Don't edit the code below here                        //
// ------------------------------------------------------//

  console.log(title)
  console.log('By', authorName)
  console.log(contents)
  console.log(comments)
}

const draftBlog1 = {
  title: '',
  author: {
    name: 'Agatha Fishtie'
  },
  comments: ['Great blog!'],
}

const draftBlog2 = {
  title: 'The Magestic Whale',
}

displayPreview(draftBlog1)
console.log('----------')
displayPreview(draftBlog2)
