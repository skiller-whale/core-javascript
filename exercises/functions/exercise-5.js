// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function createRecipe(name, cookingTime, ...ingredients) {
  return { name, cookingTime, ingredients };
}

function recipeSummary({ name, cookingTime }) {
  return `${name} (Cooking time: ${cookingTime} minutes)`;
}

function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const recipes = [
  createRecipe("Pasta", 25, "spaghetti", "basil", "parmesan", "olive oil"),
  createRecipe("Salad", 10, "lettuce", "tomato", "cucumber", "olive oil"),
  createRecipe("Soup", 30, "broth", "vegetables"),
  createRecipe("Steak", 25, "beef", "salt", "pepper"),
  createRecipe("Sandwich", 15, "bread", "ham", "cheese"),
];

// TODO: use forEach to print summaries of all recipes
