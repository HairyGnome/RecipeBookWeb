

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const sessionid = res.locals.sessionid;
        if(sessionid) {
            return res.status(401).json({message: 'Already logged in!'});
        }
        return next();
    }
}