const UsuarioModel = require("../modelos/usuarios");
const infoUser = {};
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { USERGMAIL, PASSWORDGMAIL } = process.env;


getUsuarios = async (req, res) => {
  try {
    let users = await UsuarioModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: "no se encontró nada" });
  }
};

postUsuario = async (req, res) => {
  console.log(req.body);
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
  console.log("ENTRE a la ruta PUTUSERRRRRR");
  console.log(req.body);
  const { id } = req.params; //es lo que buscamos
  const {
    //es lo que modificamos
    usuario,
    nombre,
    mail,
    contrasena,
    nuevaContraseña,
    localidad,
    nacimiento,
    publicaciones,
    telefono,
    fotoPerfil,
  } = req.body;

  let hasheada = "";
  if (nuevaContraseña) {
    hasheada = await bcrypt.hash(req.body.nuevaContraseña, 10);
  }
  console.log(nuevaContraseña);
  console.log(hasheada);

  try {
    let usuarios = await UsuarioModel.updateOne(
      { _id: id },
      {
        $set: {
          usuario,
          nombre,
          mail,
          contrasena: hasheada,
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

emailBienvenida = async (req, res) => {
  const {mail} = req.body
  // console.log('entre al sendMail')
  try{
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: USERGMAIL,
        pass: PASSWORDGMAIL
      },
    });

    // console.log('console.log dentro del try')
    user = await UsuarioModel.findOne ({mail: mail});
    // console.log('usuario creado', user)
    // console.log('mail del usuario', user.mail)
    // const token = jwt.sign({ username: user.mail }, 'SECRET', {expiresIn: '24h'});
    // linkVerificacion = `http://localhost:3000/confirmar_email/${token}`;

    // console.log('console.log antes de sendMail')
    await transporter.sendMail({
      from: '"Adopt.me 🐾" <adoptmeargentina@gmail.com>', // sender address
      to: mail, // list of receivers
      subject: "Bienvenidx a Adopt.me!", // Subject line
      html: `
      <div>
      <h2>Hola ${user.nombre}!<h2/>
      <p>Gracias por unirte a la comunidad de Adopt.me! Adoptar es ser parte de la solución.</p>
      <div/>
      `
    });
    
    return res.send('Ok')

  }catch (error){
      emailStatus = error
      res.status(400).json({ msg: "Algo salió mal" });
  }
}

// putVerificacion = async (req, res) => {
//   console.log(req.body);
//   const { mail } = req.params; //es lo que buscamos
//   const { status } = req.body; //es lo que modificamos

//   try {
//     let usuarios = await UsuarioModel.updateOne(
//       { mail },
//       { $set: { status } }
//     );
//     if (usuarios) {
//       res.status(200).json(usuarios);
//     } else {
//       res.status(400).json({ msg: "no se pudo verificar la cuenta porque el usuario no existe" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = infoUser;
