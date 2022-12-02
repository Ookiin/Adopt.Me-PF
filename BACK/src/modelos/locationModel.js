const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocationSchema = new Schema({
  longitude: String,
  latitude: String,
  }
);

const locationModel = mongoose.model("location", LocationSchema);
module.exports = locationModel;
