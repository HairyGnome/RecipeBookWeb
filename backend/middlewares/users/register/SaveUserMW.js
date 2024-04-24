

module.exports = function (objectRepository) {
    return async function (req, res, next) {
        const newUser = new objectRepository.User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        try {
            await newUser.save();
        } catch (err) {
            return res.status(500).json({error: 'Error during user save'});
        }
        return res.status(201).json({message: 'User created'});
    };
}