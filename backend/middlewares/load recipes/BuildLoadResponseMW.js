module.exports = function BuildLoadResponseMW() {
    return function (req, res, next) {
        const recipeData = res.locals.recipeData;
        let recipes = [];
        recipeData.forEach(
            /**
             * @param {{id: int, name: string, totalTime: string, thumbnail_url: string, beauty_url: string, nutrition: {calories: string}}} recipe
             */
            (recipe) => {
                recipes.push({
                    id: recipe.id,
                    name: recipe.name,
                    prepTime: recipe.totalTime === undefined ? 'Unknown' : recipe.totalTime,
                    calories: recipe.nutrition.calories === undefined ? 'Unknown' : recipe.nutrition.calories,
                    imageUrl: recipe.thumbnail_url
                });
            });
        res.locals.recipes = recipes;
        return next();
    };
}