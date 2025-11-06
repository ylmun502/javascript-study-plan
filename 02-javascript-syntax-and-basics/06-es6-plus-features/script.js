const firstName = "Alex";
const lastName = "Hsu";
const age = 35;
alert(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`);

const recipe = {
    title: "Scrambled Eggs",
    servings: 2,
    ingredients: ["eggs", "milk", "butter"]
}
const { title, servings } = recipe;
alert(title + ", " + servings);

const dairyFreeIngredients = [...recipe.ingredients];
dairyFreeIngredients.pop();
dairyFreeIngredients.pop();
dairyFreeIngredients.push("olive oil");
alert(dairyFreeIngredients);
