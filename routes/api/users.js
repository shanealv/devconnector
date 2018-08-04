const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests post router
// @access  Public
router.get("/test", (req, res) => res.json({ message: "users works" }));

module.exports = router;
