const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Session = new Schema({
    id: ObjectId,
    userid: String,
    sessionId: String
});

const SessionModel = mongoose.model('Session', Session);

module.exports = SessionModel;