

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const userId = res.locals.userId;
        const favourite = new objectrepository.Favourite({
            userId: userId,
            favourites: []
        });

        favourite.save().then(favourite => {
            return res.status(200);
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}