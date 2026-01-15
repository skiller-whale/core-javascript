// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function recipeSummary(recipe) {
  return `${recipe.name} (Cooking time: ${recipe.cookingTime} minutes)`;
}

function createRecipe() {
  // TODO: return new recipe with given name and ingredients
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const pasta = createRecipe("Pasta", 25, "spaghetti", "basil", "parmesan", "olive oil");
console.log("-", recipeSummary(pasta));

const salad = createRecipe("Salad", 10, "lettuce", "tomato", "cucumber", "olive oil");
console.log("-", recipeSummary(salad));
