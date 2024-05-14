module.exports = function (objectrepository) {
        return function (req, res, next) {
            res.clearCookie('sessionId', {path: '/'});
            res.clearCookie('username', {path: '/'});
            return res.status(200).json({message: 'Logout successful'});
        }
}