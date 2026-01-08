const article = {
  title: "Jojoba oil suitable alternative to sperm whale oil",
  author: "Ada the Skiller Whale",
  content:
    "Spermaceti is a waxy substance found in the head cavities of the sperm whale, used to make cosmetics and candles since the 17th C. But jojoba oil is just as good and smells just as weird!",
  updated: { hours: 16, minutes: 37 },
  comments: ["Thank goodness!", "What a discovery! I love you Ada."],
  isWorthReading: true,
};

function getTimeUpdated(article) {
  if (article.updated.hours < 12) {
    return `${article.updated.hours}:${article.updated.minutes}am`;
  } else {
    return `${article.updated.hours - 12}:${article.updated.minutes}pm`;
  }
}

function determineReadability(article) {
  let isWorthReading;
  if (!article.content.includes("Skiller Whale")) {
    isWorthReading = false;
  } else {
    isWorthReading = true;
  }
  article.isWorthReading = isWorthReading;
}

function getPopularity(article) {
  if (article.comments.length === 0) {
    return "no one is very interested in this article";
  } else if (article.comments.length > 100) {
    return "lots of people are interested in this article";
  } else {
    return "some people are interested in this article.";
  }
}
