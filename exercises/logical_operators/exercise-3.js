const article = {
  title: "Jojoba oil suitable alternative to sperm whale oil",
  author: "Ada the Skiller Whale",
  content: "Spermaceti is a waxy substance found in the head cavities of the sperm whale, used to make cosmetics and candles since the 17th C. But jojoba oil is just as good and smells just as weird!",
  updated: { hours: 16, minutes: 37 },
  comments: ["Thank goodness!", "What a discovery! I love you Ada."],
  isWorthReading: true,
}

function hasComments(article) {
  return article.comments && article.comments.length
}

function getNumberOfComments(article) {
  return (article.comments && article.comments.length) || 0
}
