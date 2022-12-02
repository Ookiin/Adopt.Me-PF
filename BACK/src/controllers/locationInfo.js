const locationModel = require("../modelos/locationModel");
const infoLocation = {};

getLocation = async (req, res) => {
  try {
    let locations = await locationModel.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ msg: "no se encontró la locación" });
  }
};

postLocation = async (req, res) => {
  try {
    const { longitude, latitude } = req.body;

    const locations = await new locationModel({
      longitude, latitude
    });
    if (locations.length) await locations.save();
    const nuevaLocation = await locations.save();
    res.status(200).json(nuevaLocation);

  } catch (error) {
    res.status(400).json({ msg: "no se registro la locación" });
  }
};

module.exports = infoLocation;
