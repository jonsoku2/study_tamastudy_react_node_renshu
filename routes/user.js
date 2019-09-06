const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../middleware/auth");
const { userById, getSecretProfile } = require("../controllers/user");

// :userId => route.param("userId", userById)
router.get("/secret/:userId", requireSignin, isAuth, isAdmin, getSecretProfile);

router.param("userId", userById);

module.exports = router;
