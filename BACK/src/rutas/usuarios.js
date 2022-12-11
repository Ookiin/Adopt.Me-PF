const express = require("express");
require("../db");
const UsuarioModel = require("../modelos/usuarios");
const router = express.Router();
const infoUser = require("../controllers/userInfo");
const bcrypt = require("bcryptjs");
const infoUserAuth = require ('../controllers/userInfoAuth');
const {verifyToken, isAdmin} = require ('../middlewares/authJwt');
const checkRoles = require('../middlewares/verifyRoles');

router.post("/", [verifyToken, checkRoles], postUsuario);

router.get("/", getUsuarios);

router.get("/:id", getDetalleUsuario);

router.put("/:id", putUsuario);

router.delete("/:id", deleteUsuario);

router.post("/signup", postSignup);

router.post("/signin", postSignin);

router.post("/google/signup", postSignupGoogle);

router.get("/google/:id", getUserGoogle);

router.post("/email_bienvenida", emailBienvenida);

// router.put("/confirmar_email/:token", putVerificacion);

module.exports = router;
