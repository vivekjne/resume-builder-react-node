const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc list users
// @access Public
router.get("/", async (req, res) => {
  return res.status(200).json({ data: [] });
});

module.exports = router;
