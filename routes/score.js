const router = require("express").Router();

const { getUserScore, addScore } = require("../controllers/score");
//Middleware
const auth = require("../middleware/auth");

/**
 * @route   GET /user/score
 * @desc    Get user scores by date
 * @access  Private
 */
router.get("/user/score", auth, getUserScore);

/**
 * @route   POST /addScore
 * @desc    Add score to db
 * @access  Private
 */
router.post("/addScore", auth, addScore);

module.exports = router;
