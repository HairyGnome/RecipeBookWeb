module.exports = function (objectrepository) {
    return function (req, res, next) {
        const userid = res.locals.userid;
        objectrepository.Favourite.findOne({
            userId: userid
        }).then(favourites => {
            res.locals.favourites = favourites;
            return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }

}
