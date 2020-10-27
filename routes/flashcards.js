const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  getAllCards,
  addCard,
  removeCard,
  updateCard,
} = require("../controllers/flashcards");

/**
 * @route   GET /cards
 * @desc    Get All User cards
 * @access  Private
 */
router.get("/cards", auth, getAllCards);

/**
 * @route   POST /addcard
 * @desc    Add questions/cards
 * @access  Private
 */
router.post("/addcard", auth, addCard);

/**
 * @route   PUT /card/update/:id
 * @desc    Update card
 * @access  Private
 */
router.put("/card/update/:id", auth, updateCard);

/**
 * @route   DELETE /card/delete/:id
 * @desc    Remove card from list
 * @access  Private
 */

router.delete("/card/delete/:id", auth, removeCard);

module.exports = router;
