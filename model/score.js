const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const scoreSchema = new Schema({
  user: {
    type: ObjectId,
  },
  score: {
    type: Number,
    default: 0,
    required: true,
  },
  date: Date,
});

module.exports = mongoose.model("Score", scoreSchema);
