

module.exports = function (objectrepository) {

    return function (req, res, next) {
        const userid = res.locals.userid;
        if(!userid) {
            res.clearCookie('sessionId', {path: '/'});
            res.clearCookie('username', {path: '/'});
            return res.status(208).json({message: 'Not logged in!'});
        }
        return next();
    };
}