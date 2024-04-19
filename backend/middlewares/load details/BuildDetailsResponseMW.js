


module.exports = function BuildDetailsResponseMW() {
    return function(req, res, next) {
        const data = res.locals.detailsData;
        res.locals.details = {
            id: data.id,
            name: data.name,
            prepTime: data.cook_time_minutes ? data.cook_time_minutes : 'Unknown',
            calories: data.nutrition !== {} ? data.nutrition.calories : 'Unknown',
            imageUrl: data.thumbnail_url,
            description: data.description !== '' ? data.description : 'No description available',
            ingredients: data.sections[0].components.map((ingredient) => {return ingredient.raw_text}),
            instructions: data.instructions.map((instruction) => {return instruction.display_text})
        }
        return next();
    }
}