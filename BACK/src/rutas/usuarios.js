const express = require("express");
require("../db");
const UsuarioModel = require("../modelos/usuarios");
const router = express.Router();
const infoUser = require("../controllers/userInfo");
const flash = require("connect-flash");
const passport = require("passport");
const bcrypt = require("bcryptjs");

router.post("/", postUsuario);

router.get("/", getUsuarios);

router.get("/:id", getDetalleUsuario);

router.put("/:id", putUsuario);

router.delete("/:id", deleteUsuario);

router.post("/signup", (req, res) => {
  UsuarioModel.findOne({ usuario: req.body.usuario }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("El usuario ya existe");
    if (!doc) {
      console.log(
        "entre al /signup, voy a crear el usuario, este es el req.body"
      );
      console.log(req.body);
      console.log("esta es la contraseña");
      console.log(req.body.contraseña);
      const contraseñaHasheada = await bcrypt.hash(req.body.contraseña, 10);
      const usuarioNuevo = new UsuarioModel({
        usuario: req.body.usuario,
        contraseña: contraseñaHasheada,
        nombre: req.body.nombre,
        mail: req.body.mail,
        telefono: req.body.telefono,
        localidad: req.body.localidad,
        fotoPerfil: req.body.fotoPerfil,
        nacimiento: req.body.nacimiento,
        caca: req.body.caca,
      });
      await usuarioNuevo.save();
      console.log(usuarioNuevo);
      res.send("Usuario creado exitosamente");
    }
  });
});

router.post("/google/signup", (req, res) => {
  UsuarioModel.findOne({ usuario: req.body.usuario }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("El usuario ya existe");
    if (!doc) {
      console.log(
        "entre al /signup, voy a crear el usuario, este es el req.body"
      );
      console.log(req.body);
      console.log("esta es la contraseña");
      console.log(req.body.contraseña);
      const usuarioNuevo = new UsuarioModel({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        mail: req.body.mail,
        telefono: req.body.telefono,
        localidad: req.body.localidad,
        fotoPerfil: req.body.fotoPerfil,
        nacimiento: req.body.nacimiento,
        caca: req.body.caca,
      });
      await usuarioNuevo.save();
      console.log(usuarioNuevo);
      res.send("Usuario creado exitosamente");
    }
  });
});

router.post("/signin", (req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("El usuario no existe");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({ message: "Autenticacion exitosa" });
        console.log("aca va el usuario:");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("/google/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let userId = await UsuarioModel.findOne({ caca: id });
    if (userId) {
      let u = await userId.save();
      res.status(200).json(u);
    } else {
      res.status(400).json(`${id} no encontrado`);
    }
  } catch (error) {
    res.status(400).json(`${id} no encontrado`);
  }
});

module.exports = router;
