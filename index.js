const fs = require('fs');

const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf8'))
const items = JSON.parse(fs.readFileSync('items.json', 'utf8'))
// Compare recipes json with items json, create a new json which includes data from the recipes json that includes the images from the items json

const newRecipesArr = []

recipes.forEach(recipe => {
    items.forEach(item => {
        if (recipe.name === item.name) {
            if (item.variants[0].image) {
                recipe.image = item.variants[0].image;
            } else {
                recipe.image = item.variants[0].storageImage;
            }
            newRecipesArr.push(recipe);
        }
    })
});

let data = JSON.stringify(newRecipesArr)

fs.writeFileSync('newRecipes.json', data)