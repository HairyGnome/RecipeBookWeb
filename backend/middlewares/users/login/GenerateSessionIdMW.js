const uuid = require('uuid');
module.exports = function(objectrepository) {
    return function(req, res, next) {
        const user = res.locals.user;
        const sessionId = uuid.v4();

        const session = new objectrepository.Session({
            username: user.username,
            sessionId: sessionId
        });

        session.save().then(() => {
           return res.json({
               username: user.username,
               sessionId: sessionId
           })
        }).catch(err => {
            console.log(err);
            return res.status(500).json({message: 'Database error'});
        });
    }
}