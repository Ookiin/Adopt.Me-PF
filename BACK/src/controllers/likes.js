const likesModel = require("../modelos/likesModel");
const likesCount = {};

putLikes = async (req, res) => {
  const { likes } = req.body;
  try {
    await likesModel.findOneAndUpdate(
      {
        $set: { likes },
      }
    );
  } catch (error) {
      res.status(400).send(error)
    } 
    const likie = await likesModel.findOne(likes)
    res.send(likie)
  }

getLikes = async (req, res) => {
  try {
    let likes = await likesModel.find();
    res.status(200).json(likes);
  } catch (error) {
    res.status(400).json({ msg: "No se pudo obtener el like" });
  }
};

module.exports = likesCount;