

module.exports = function () {
    return function (req, res, next) {
        if (typeof req.body === 'undefined'
            || typeof req.body.email === 'undefined'
            || typeof req.body.password === 'undefined'
            || typeof req.body.username === 'undefined') {
            return res.status(406).json({ message: 'Missing user parameters' });
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,20}$/;
        if (!regex.test(req.body.password)) {
            return res.status(406).json({ message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and be between 8 and 20 characters long' });
        }

        return next();
    };
}