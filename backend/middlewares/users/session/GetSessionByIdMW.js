module.exports = function (objectrepository) {
    return function (req, res, next) {
        const userid = res.locals.user._id;

        objectrepository.Session.findOne({ userid: userid } )
            .then(session => {
                res.locals.sessionid = session ? session._id : null;
                return next();
            });
    }
}