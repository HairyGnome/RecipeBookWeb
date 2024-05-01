const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Favourite = new Schema({
    id: ObjectId,
    userId: {type: ObjectId, ref: 'User'},
    favourites: [String]
});

const FavouriteModel = mongoose.model('Favourite', Favourite);

module.exports = FavouriteModel;