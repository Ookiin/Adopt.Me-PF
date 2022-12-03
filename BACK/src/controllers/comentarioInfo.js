const comentarioModel = require("../modelos/comentarioModel");
const infoBlog2 = {};

postComentario = async (req, res) => {
  try {
    const { comentario } = req.body;

    const comentarios = await new comentarioModel({
      comentario,
    });
    if (comentario1.length) await comentario.save();
    const nuevoComentario = await comentario.save();
    res.status(200).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ msg: "no se guardo comentario" });
  }
};

getComentario = async (req, res) => {
  try {
    let comentario = await comentarioModel.find();
    res.status(200).json(comentario);
  } catch (error) {
    res.status(400).json({ msg: "no se puede mostrar comentario" });
  }
};

putComentario = async (req, res) => {
  const { id } = req.params;
  const { comentario } = req.body;
  try {
    let comentario2 = await comentarioModel.updateOne(
      { _id: id },
      {
        $set: {
          comentario,
        },
      }
    );
    if (comentario) {
      res.status(200).json(comentario);
    } else {
      res.status(400).json({ msg: "no puede modificar su comentario" });
    }
  } catch (error) {
    console.log(error);
  }
};

deleteComentario = async (req, res) => {
  const { id } = req.params;
  try {
    await comentarioModel.remove({ _id: id });
    res.status(200).json(`el comentario fue ${id} eliminado con exito`);
  } catch (error) {
    res.status(400).json(`el comentario ${id} no se pudo eliminar`);
  }
};

module.exports = infoBlog2;
