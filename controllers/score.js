const Score = require("../model/score");

exports.getUserScore = (req, res) => {
  Score.find({ user: req.user }).exec((err, scores) => {
    if (err || !scores) {
      return res
        .status(400)
        .json({ Success: false, msg: "Something went wrong, Try again" });
    }
    res.status(200).json({ Success: true, data: scores });
  });
};

exports.addScore = (req, res) => {
  const data = {
    user: req.user._id,
    score: req.body.score,
    date: req.body.date,
  };

  const newScore = new Score(data);
  newScore.save((err, nscore) => {
    if (err || !nscore) {
      return res
        .status(400)
        .json({ Success: false, msg: "Something went wrong, Try again" });
    }
    res.status(200).json({ Success: true, msg: "Score added ", data: nscore });
  });
};
