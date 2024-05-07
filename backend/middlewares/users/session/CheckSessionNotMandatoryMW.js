


module.exports = function () {
    return function (req, res, next) {
        const sessionId = req.cookies.sessionId;
        const userid = res.locals.userid;
        if(!sessionId) {
            return next();
        }
        if(!userid) {
            res.clearCookie('sessionId', {path: '/'});
            res.clearCookie('username', {path: '/'});
        }
        return next();
    };
}
