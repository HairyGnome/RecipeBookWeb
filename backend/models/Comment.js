const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({
    id: ObjectId,
    recipeId: String,
    comments: [{
        username: String,
        comment: String
    }]
});

const CommentModel = mongoose.model('Comment', Comment);

module.exports = CommentModel;