'use strict';
module.exports = function (app) {
    var recipe = require('../controllers/recipeController');

    app.route('/recipe')
        .get(recipe.get_random_recipe);

};
