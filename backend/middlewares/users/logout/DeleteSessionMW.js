

module.exports = function (objectrepository) {

    return function (req, res, next) {
        objectrepository.Session.deleteOne({
            sessionId: req.cookies.sessionId
        }).then(() => {
            return next();
        }).catch(err => {
            return res.status(500).json({message: 'Logout failed'});
        });
    }
}