//Card Model
const Card = require("../model/flashcards");

/*
 >> GET cards route helper
*/

exports.getAllCards = (req, res) => {
  Card.find({ user: req.user }).exec((err, cards) => {
    if (!cards || err)
      return res.status(400).json({ Success: false, msg: "No cards found" });

    return res.status(200).json({ Success: true, data: cards });
  });
};

/*
 >> POST addcard route helper    
*/

exports.addCard = (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer)
    return res.status(400).json({ Success: false, msg: "Enter all fields" });

  const newCard = new Card({
    user: req.user._id,
    question: question,
    answer: answer,
  });

  newCard.save((err, savedCard) => {
    if (err || !savedCard)
      return res
        .status(400)
        .json({ Success: false, msg: "Something went wrong, Try again" });

    res.status(200).json({ Success: true, msg: "Card added", data: savedCard });
  });
};

/*
 >> Update route helper
*/
exports.updateCard = (req, res) => {
  Card.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedCard) => {
      if (err || !updatedCard) {
        return res
          .status(400)
          .json({ Success: false, msg: "Something went wrong, Try again" });
      }
      res
        .status(200)
        .json({ Success: true, msg: "Card updated", data: updatedCard });
    }
  );
};

/*
 >> DELETE card route helper
*/

exports.removeCard = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.id }, (err, delCard) => {
    if (err || !delCard)
      return res
        .status(400)
        .json({ Success: false, msg: "Something went wrong,Try again" });

    res
      .status(200)
      .json({ Success: true, msg: "Card deleted ", data: delCard });
  });
};
