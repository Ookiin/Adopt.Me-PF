const express = require("express");
const { get } = require("mongoose");
require("../db");
const router = express.Router();
const infoBlog2 = require("../controllers/comentarioInfo");

router.post("/", postComentario);
router.get("/", getComentario);
router.put("/:id", putComentario);
router.delete("/:id", deleteComentario);

module.exports = router;
