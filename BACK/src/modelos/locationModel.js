const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocationSchema = new Schema({
  latitud: {
    type: String,
  },

  longitud: {
    type: String,
  },
});

const locationModel = mongoose.model("location", LocationSchema);
module.exports = locationModel;
