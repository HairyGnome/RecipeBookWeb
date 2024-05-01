

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const favourites = res.locals.favourites.favourites;
        const recipeId = req.body.recipeId;

        if(favourites.includes(recipeId)) {
            favourites.splice(favourites.indexOf(recipeId), 1);
        } else {
            favourites.push(recipeId);
        }

        res.locals.favourites.favourites = favourites;

        console.log(res.locals.favourites);
        return next();
    }
}