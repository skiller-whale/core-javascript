import recipes from "./data.js";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
// TODO: implement recipeSummary function
// should take a recipe and return a string summary of the recipe

// TODO: implement addIngredientAndSummarise function
// should take a recipe and an ingredient to add, and return a new recipe with
// the ingredient added, along with a summary of the new recipe

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const pasta = recipes[0];
const betterPasta = { ...pasta, ingredients: [...pasta.ingredients, "basil"] };
const summary = `${betterPasta.name} (Ingredients: ${betterPasta.ingredients.join(", ")})`;
console.log(summary);
