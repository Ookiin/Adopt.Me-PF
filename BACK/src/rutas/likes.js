const express = require("express");
const { get } = require("mongoose");
require("../db");
const router = express.Router();
const likes = require("../controllers/likes");

router.put("/", putLikes);
router.get("/", getLikes);

module.exports = router;