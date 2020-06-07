const fs = require('fs');

const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf8'))
const items = JSON.parse(fs.readFileSync('items.json', 'utf8'))
// Compare recipes json with items json, create a new json which includes data from the recipes json that includes the images from the items json

const newRecipesArr = []


