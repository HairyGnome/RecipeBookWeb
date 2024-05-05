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
                    prepTime: recipe.total_time_tier === null ? 'Unknown' : recipe.total_time_tier.display_tier,
                    calories: recipe.nutrition.calories === undefined ? 'Unknown' : recipe.nutrition.calories,
                    imageUrl: recipe.thumbnail_url
                });
            });
        res.json({data: recipes});
        return next();
    };
}