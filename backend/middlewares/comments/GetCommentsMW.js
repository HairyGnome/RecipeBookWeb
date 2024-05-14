module.exports = function (objectrepository) {
    return function (req, res, next) {
        const recipeId = req.params.recipeId;

        if (!recipeId) {
            return res.status(400).json({message: 'Bad request'})
        }

        objectrepository.Comment.findOne({recipeId: recipeId}).then((comments) => {
            if (!comments) {
                return res.status(200).json({comments: []});
            }
            return res.status(200).json({comments: comments.comments});
        }).catch((err) => {
            console.log(err);
            return res.status(500).json({message: 'Internal server error'});
        });
    };
}