module.exports = function (objectrepository) {
    return function (req, res, next) {
        const userid = res.locals.userid;
        if(!userid) {
            return res.status(401).json({message: 'Error: Not logged in!'});
        }

        objectrepository.Favourite.findOne({
            userId: userid
        }).then(favourites => {
            res.locals.favourites = favourites ? favourites.favourites.sort() : [];
            res.locals.favouritesId = favourites ? favourites._id : null;
            return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}