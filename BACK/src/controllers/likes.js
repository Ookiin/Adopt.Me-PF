const likesModel = require("../modelos/likesModel");
const likesCount = {};

putLikes = async (req, res) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    let likes = await likesModel.updateOne(
      { _id: id },
      {
        $set: {
          likes,
        },
      }
    );
    if (likes) {
      res.status(200).json(likes);
    } else {
      res.status(400).json({ msg: "no puede modificar su comentario" });
    }
  } catch (error) {
    console.log(error);
  }
};

getLikes = async (req, res) => {
  try {
    let likes = await likesModel.find();
    res.status(200).json(likes);
  } catch (error) {
    res.status(400).json({ msg: "No se pudo obtener el like" });
  }
};

module.exports = likesCount;