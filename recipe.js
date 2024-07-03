const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    category: String,
    rating: Number
});

module.exports = mongoose.model('Recipe', recipeSchema);
