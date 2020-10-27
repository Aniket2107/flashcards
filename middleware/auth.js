const jwt = require("jwt-simple");

module.exports = function (req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token, process.env.SECRET);
    req.user = decoded;
    next();
  } else {
    return res.status(403).json({ Success: false, msg: "UnAuthorized" });
  }
};
