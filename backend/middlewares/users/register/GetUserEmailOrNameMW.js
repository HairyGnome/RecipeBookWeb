module.exports = function(objectrepository) {
    return function(req, res, next) {
        objectrepository.User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        }).then(user => {
            res.locals.user = user;
            return next();
        });
    }
}