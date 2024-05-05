const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Session = new Schema({
    id: ObjectId,
    userid: String,
    sessionId: String,
    createdAt: { type: Date, expires: 1800, default: Date.now }
});

const SessionModel = mongoose.model('Session', Session);

module.exports = SessionModel;