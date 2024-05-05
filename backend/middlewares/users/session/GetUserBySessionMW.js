


module.exports = function (objectrepository) {
    return function (req, res, next) {
        objectrepository.Session.findOne({
            sessionId: req.cookies.sessionId
        }).then(session => {
            res.locals.userid = session ? session.userid : undefined;
            return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    };
}