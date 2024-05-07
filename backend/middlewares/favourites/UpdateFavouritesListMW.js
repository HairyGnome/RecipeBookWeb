

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const favourites = res.locals.favourites;
        const recipeId = req.body.recipeId.toString();

        if(favourites.includes(recipeId)) {
            favourites.splice(favourites.indexOf(recipeId), 1);
        } else {
            favourites.push(recipeId);
        }

        res.locals.favourites = favourites;

        return next();
    }
}