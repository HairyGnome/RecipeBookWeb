module.exports = function SendDetailsResponseMW() {
    return function(req, res, next) {
        res.json({
            data: res.locals.details
        });
        return next();
    }
}