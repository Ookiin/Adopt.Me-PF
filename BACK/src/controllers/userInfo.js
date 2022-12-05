const UsuarioModel = require("../modelos/usuarios");
const infoUser = {};

getUsuarios = async (req, res) => {
  try {
    let users = await UsuarioModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: "no se encontró nada" });
  }
};

postUsuario = async (req, res) => {
  console.log(req.body)
  const user = await UsuarioModel(req.body);
  try {
    if (user) {
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(400).json({ msg: "no se creó el usuario" });
    }
  } catch (error) {
    res.status(400).json({ msg: "no se creó el usuario" });
  }
};

getDetalleUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    let userId = await UsuarioModel.findById(id);
    if (userId) {
      let u = await userId.save();
      res.status(200).json(u);
    } else {
      res.status(400).json(`${id} no encontrado`);
    }
  } catch (error) {
    res.status(400).json(`${id} no encontrado`);
  }
};

putUsuario = async (req, res) => {
  console.log("ENTRE a la ruta PUTUSER")
  console.log(req.body)
  const { id } = req.params; //es lo que buscamos
  const {
    //es lo que modificamos
    usuario,
    nombre,
    mail,
    contraseña,
    localidad,
    nacimiento,
    publicaciones,
    telefono,
    fotoPerfil,
  } = req.body;
  try {
    let usuarios = await UsuarioModel.updateOne(
      { _id: id },
      {
        $set: {
          usuario,
          nombre,
          mail,
          contraseña,
          localidad,
          nacimiento,
          publicaciones,
          telefono,
          fotoPerfil,
        },
      }
    );
    if (usuarios) {
      res.status(200).json(usuarios);
    } else {
      res.status(400).json({ msg: "no coincide el id que deseas modificar" });
    }
  } catch (error) {
    console.log(error);
  }
};

deleteUsuario = async (req, res) => {
  const { id } = req.params; //es lo que buscamos para eliminar
  try {
    await UsuarioModel.remove({ _id: id });
    res.status(200).json(`el usuario  ${id} fue eliminado con exito`);
  } catch (error) {
    res.status(400).json(`el usuario ${id} fue  eliminado con exito`);
  }
};

module.exports = infoUser;
