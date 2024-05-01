


module.exports = function (objectrepository) {
    return function (req, res, next) {
        objectrepository.Session.findOne({
            sessionId: req.cookies.sessionId
        }).then(session => {
            if (!session) {
                return res.status(401).json({message: 'Session not found'});
            }

            res.locals.userid = session.userid;
            return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    };
}