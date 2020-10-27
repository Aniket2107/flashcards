const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const flashcardSchema = new Schema({
  user: {
    type: ObjectId,
    rel: "User",
  },
  question: {
    type: String,
    min: 2,
    required: true,
  },
  answer: {
    type: String,
    min: 2,
    required: true,
  },
  boxId: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Card", flashcardSchema);
