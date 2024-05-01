

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const id = res.locals.favourites.id;
        const favourites = res.locals.favourites.favourites;

        objectrepository.Favourite.findOneAndUpdate({
            id: id
        }, {favourites: favourites}).then(favourites => {
            return res.status(200).json('Operation successful');
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}