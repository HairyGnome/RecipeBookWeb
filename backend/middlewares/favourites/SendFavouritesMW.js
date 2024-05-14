module.exports = function (objectrepository) {
    return function (req, res, next) {
        const favourites = res.locals.favourites ? res.locals.favourites : [];
        return res.status(200).json(favourites);
    }
}