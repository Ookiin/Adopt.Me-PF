const mongoose = require("mongoose");
const { Schema } = mongoose;

const RespuestaModelSchema = new Schema({
  respuesta: {
    type: String,
    required: false,
  },
});

const RespuestaModel = mongoose.model("respuesta", RespuestaModelSchema);
module.exports = RespuestaModel;
