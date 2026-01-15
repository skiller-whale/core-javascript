import recipes from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function recipeSummary(recipe, options) {
  const includeCookingTime = options?.includeCookingTime ?? true;
  const maxIngredients = options?.maxIngredients ?? recipe.ingredients.length;

  let summary = `- ${recipe.name}`;
  if (includeCookingTime) {
    summary += ` (Cooking Time: ${recipe.cookingTime} mins)`;
  }
  if (maxIngredients > 0) {
    summary += `\n  Ingredients: ${recipe.ingredients
      .slice(0, maxIngredients)
      .join(", ")}`;
  }
  return summary;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i];
  console.log(recipeSummary(recipe));
}
