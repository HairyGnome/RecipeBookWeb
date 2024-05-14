module.exports = function (objectrepository) {
    return function (req, res, next) {
        objectrepository.Session.deleteOne({
            sessionId: req.cookies.sessionId
        }).then(() => {
            return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}