

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const id = res.locals.favouritesId;
        const favourites = res.locals.favourites;


        objectrepository.Favourite.findOneAndUpdate({
            _id: id
        }, {favourites: favourites}).then(favourites => {
            return res.status(200).json('Operation successful');
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}