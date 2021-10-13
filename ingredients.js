const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop:")
i = -1;
while (i < ingredients.length - 1){
    i++;
    console.log(ingredients[i]);
}
// Write a for loop that prints out the contents of ingredients:
console.log("For..of loop:")
for (let ingredient of ingredients){
    console.log(ingredient);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("For loop:")
for(let i = ingredients.length-1; i > -1; i--){
    console.log(ingredients[i]);
}