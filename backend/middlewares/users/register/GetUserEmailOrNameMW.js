

module.exports = function(objectrepository) {
    return function(req, res, next) {
        objectrepository.User.findOne({
            username: req.body.username
        }).then(user => {
            res.locals.user = user;
            return next();
        });
    }
}