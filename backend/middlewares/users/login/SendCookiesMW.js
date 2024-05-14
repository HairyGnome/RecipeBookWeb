module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.cookie('sessionId', res.locals.sessionId, {path: '/'});
        res.cookie('username', res.locals.user.username, {path: '/'});
        return res.status(200).send('Login successful');
    }
}