const bcrypt = require('bcrypt');

module.exports = function () {
    return function (req, res, next) {
        const user = res.locals.user;

        bcrypt.compare(req.body.password, user.password)
            .then(match => {
                if (match) {
                    return next();
                } else {
                    return res.status(400).json({message: 'Incorrect username or password'});
                }
            })
    }
}