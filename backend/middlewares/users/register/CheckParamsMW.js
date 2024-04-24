

module.exports = function () {
    return function (req, res, next) {
        if (typeof req.body === 'undefined'
            || typeof req.body.email === 'undefined'
            || typeof req.body.password === 'undefined'
            || typeof req.body.username === 'undefined') {
            return res.status(406).json({ error: 'Missing user parameters' });
        }
        return next();
    };
}