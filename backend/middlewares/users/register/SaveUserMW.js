

module.exports = function (objectRepository) {
    return async function (req, res, next) {
        const newUser = new objectRepository.User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        newUser.save().then(() => {
            res.locals.userId = newUser._id;
            return next();
        }).catch( (err) => {
            return res.status(500).json({error: 'Error during user save'});
        });
    };
}