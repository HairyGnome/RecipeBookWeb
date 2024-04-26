

module.exports = function () {
    return async function (req, res, next) {
        return res.local.user === undefined ? res.status(409).json({error: 'User already exists'}) : next();
    };
}