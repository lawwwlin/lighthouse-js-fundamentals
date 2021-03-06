const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while (counter <= ingredients.length-1) {
  console.log(ingredients[counter]);
  counter++;
}
// Write a for loop that prints out the contents of ingredients:

for (ingredient in ingredients) {
  console.log(ingredients[ingredient]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
