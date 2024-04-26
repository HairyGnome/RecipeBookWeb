

module.exports = function(objectrepository) {
    return function(req, res, next) {
        objectrepository.User.findOne({
            username: req.body.username
        }).then(user => {
            res.local.user = user;
            return next();
        });
    }
}