const router = require("express").Router();
const { register, login, getUserInfo } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

/**
 * @route   POST /register
 * @desc    Register user
 * @access  Public
 */

router.post(
  "/register",
  [
    check("name", "Name must have atleast 3chars").isLength({ min: 3 }),
    check("email", "Invalid email address").isEmail(),
    check("password", "Password must contain atleast 6chars").isLength({
      min: 6,
    }),
  ],
  register
);

/**
 * @route   POST login
 * @desc    Login user
 * @access  Public
 */

router.post(
  "/login",
  [
    check("email", "Invalid email address").isEmail(),
    check("password", "Password must contain atleast 6chars").isLength({
      min: 6,
    }),
  ],
  login
);

/**
 * @route   GET /auth/user
 * @desc    Get user data
 * @access  Private
 */

router.get("/auth/user", auth, getUserInfo);

//Test route
router.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = router;
