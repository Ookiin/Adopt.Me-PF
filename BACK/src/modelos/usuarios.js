const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const UsuarioSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: false,
  },
  fotoPerfil: {
    type: String,
  },
  telefono: {
    type: String,
  },
  localidad: {
    type: String,
  },
  nacimiento: {
    type: String,
  },
  publicaciones: {
    type: String,
  },
  caca: {
    type: String,
  },
});

// METODO PARA HASHEAR CONTRASEÑA
UsuarioSchema.methods.encryptPassword = async (contraseña) => {
  return bcrypt.hashSync(contraseña, bcrypt.genSaltSync(10));
};

// METODO PARA TOMAR LA CONTRASEÑA Y HASHEARLA PARA COMPARARLA CON LA HASHEADA EN LA DB
UsuarioSchema.methods.compararContraseña = async function (contraseña) {
  return await bcrypt.compare(contraseña, this.contraseña);
};

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
module.exports = UsuarioModel;
