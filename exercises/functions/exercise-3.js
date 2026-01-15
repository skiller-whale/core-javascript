import recipes from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function calculateTotalCookingTime(baseTime, servings, multiplier) {
  servings = servings ?? 4;
  multiplier = multiplier ?? servings * 0.1;
  return baseTime + multiplier;
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i];
  const totalTime = calculateTotalCookingTime(recipe.cookingTime);
  console.log(`Cooking time for ${recipe.name} for 4 servings: ${totalTime} minutes`);
}
