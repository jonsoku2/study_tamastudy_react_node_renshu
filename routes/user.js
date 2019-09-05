const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// controllers
const { signup, signin, signout } = require("../controllers/user");
//const { userSignupValidator } = require("../validator");

router.post(
  "/signup",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({ min: 4, max: 32 }),
    check("password", "Password is required")
      .not()
      .isEmpty(),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must contain at least 6 characters")
      .matches(/\d/)
      .withMessage("Password must contain a number")
  ],
  signup
);

router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
