module.exports = function(objectrepository) {
    return function(req, res, next) {
        objectrepository.User.findOne({
            username: req.body.username
        }).then(user => {
            if(user) {
                res.locals.user = user;
                return next();
            } else {
                return res.status(400).json({message: 'Incorrect username or password'});
            }
        });
    }
}