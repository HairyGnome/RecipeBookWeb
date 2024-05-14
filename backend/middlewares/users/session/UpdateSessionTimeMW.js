module.exports = function (objectrepository) {
    return function(req, res, next) {
        const sessionId = req.cookies.sessionId;

        objectrepository.Session.findOneAndUpdate({sessionId: sessionId}, {createdAt: Date.now()})
            .then(() => { return next(); })
            .catch(err => {
                res.status(500).json({message: 'Internal server error'});
            })
    }
}