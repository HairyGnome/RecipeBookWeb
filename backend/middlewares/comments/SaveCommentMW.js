


module.exports = function (objectrepository) {
    return function (req, res, next) {
        const userId = res.locals.userid;
        const recipeId = req.body.recipeId;
        const comment = req.body.comment;

        if(!recipeId) {
            return res.status(400).json({message: 'Bad request'});
        }

        objectrepository.User.findOne({_id: userId}).then((user) => {
            objectrepository.Comment.findOne({recipeId: recipeId}).then((comments) => {
                if(!comments) {
                    comments = new objectrepository.Comment({
                        recipeId: recipeId,
                        comments: []
                    });
                }
                comments.comments.push({
                    username: user.username,
                    comment: comment
                });
                comments.save().then(() => {
                    return res.status(200).json({comments: comments.comments});
                }).catch((err) => {
                    console.log(err);
                    return res.status(500).json({message: 'Internal server error'});
                });
            }).catch((err) => {
                console.log(err);
                return res.status(500).json({message: 'Internal server error'});
            });
        }).catch((err) => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    }
}