const uuid = require('uuid');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        const user = res.locals.user;
        const sessionId = uuid.v4();

        const session = new objectrepository.Session({
            userid: user._id,
            sessionId: sessionId,
            createdAt: Date.now()
        });

        res.locals.sessionId = sessionId;

        session.save().then(() => {
            console.log('Session created');
           return next();
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}