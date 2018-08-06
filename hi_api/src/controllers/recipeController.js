'use strict';

var fetchRecipeRandom = require('../mocks/recipeRandomMock')

exports.get_random_recipe = function (req, res) {
    fetchRecipeRandom
        // .then((weatherData) => weatherData.json)
        .then((json) => res.send(json))
}