

module.exports = function (objectRepository) {
    return async function (req, res, next) {
        const users = await objectRepository.User.find({
            $or: [
                {email: req.body.email},
                {username: req.body.username}
            ]});
        if (users.length > 0) {
            return res.status(409).json({error: 'User already exists'});
        }
        return next();
    };
}